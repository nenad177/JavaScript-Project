class Game {

	constructor() {
		this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
		this.cells = [];
		this.moves = 0;
		this.time = 0;
		this.paused = false;
		this.blank_x = 3;
		this.blank_y = 3;
	
		this.startTime;
		this.running;
		this.pauseTime = null;
		this.picture = false;

		this.new_game = this.new_game.bind(this);

	}

	shuffle(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
    	}

	}

	new_game() {
		
		this.reset();
		this.shuffle(this.numbers);

		for (var i = 0; i <= 15; i++) {
			let c = new Cell(this.numbers[i], Math.floor(i/4), i%4);
			this.cells.push(c);
			let cDiv = document.createElement("div");
			cDiv.setAttribute("id", i);
			cDiv.classList.add("cell");

			
			if (i == 15) {
				cDiv.style.backgroundImage = "url('wood.jpg')"
			}
			else {
				cDiv.innerHTML = this.numbers[i];
			}

			c.dom = cDiv;
			container.appendChild(cDiv);
			cDiv.addEventListener('click', this.swap.bind(this, c.row, c.col))

		}
	}

	reset() {
		var container = document.getElementById("container");
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}

		this.blank_x = 3;
    	this.blank_y = 3;
    	this.time = 0;
		this.moves = 0;
		this.paused = false;
		this.startTimer(this.pauseTime);
		this.cells = [];
		document.getElementById("moves").innerHTML = "Moves: " + this.moves;
		document.getElementById("time").innerHTML = "Time: 00:00:00";

		document.getElementById("pause").style.zIndex = -1;
		this.paused = false;
	}

	pause() {
		if (!this.paused) {
			document.getElementById("pause").style.zIndex = 1;
			this.paused = true;
			this.stopTimer();
		}
		else if (this.paused) {
			document.getElementById("pause").style.zIndex = -1;
			this.paused = false;
			this.startTimer(this.pauseTime);
		}
	}

	swap(x, y) {
		if (!this.check_if_solved() && (this.blank_x-x)*(this.blank_y-y) == 0 
		&& (Math.abs(this.blank_x-x) == 1 || Math.abs(this.blank_y-y) == 1)) {
			let d = this.cells[4*x+y].dom.innerHTML;
			this.cells[4*x+y].dom.innerHTML = this.cells[4*this.blank_x + this.blank_y].dom.innerHTML;
			this.cells[4*this.blank_x + this.blank_y].dom.innerHTML = d;
			this.cells[4*this.blank_x+this.blank_y].dom.style.background = this.cells[4*x+y].dom.style.background;
			this.cells[4*x+y].dom.style.backgroundImage = "url('wood.jpg')";
			this.blank_x = x;
			this.blank_y = y;
			this.moves++;
			document.getElementById("moves").innerHTML = "Moves: " + this.moves;
			this.check_if_solved();
		}
	}

	check_if_solved() {
		for (var i = 0; i <=14; i++) {
			if (this.cells[i].dom.innerHTML != i+1) {
				return false;
			}
		}
		return true;
	}
	
	startTimer(t) {
		this.startTime = Date.now();
		if (t != null) {
			this.startTime -= t;
		}
		this.running = setInterval(this.refreshTimer.bind(this), 1000);
	}

	refreshTimer() {
		document.getElementById("time").innerHTML = 'Time: ' + (new Date(Date.now() - this.startTime)).toISOString().substr(11, 8);
	}

	stopTimer() {
		clearInterval(this.running);
		this.pauseTime = Date.now() - new Date(this.startTime);
		console.log(this.pauseTime);
		document.getElementById("time").innerHTML = 'Time: ' + (new Date(this.pauseTime)).toISOString().substr(11, 8);
	}

}
