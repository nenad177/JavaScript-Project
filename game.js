var time = 0
var moves = 0
var paused = false
var name = ''
var cells
var startb = document.getElementById("btn1")
var pauseb = document.getElementById("btn2")
var array = []
for(var i=0; i<15; i++) {
    array[i] = [i+1]
}
var blank_x = 3
var blank_y = 3

var startTime
var running
var pauseTime = null

startb.addEventListener('click', new_game)
pauseb.addEventListener('click', pause)

document.getElementById("potezi").innerHTML = "Moves: " + moves
document.getElementById("vreme").innerHTML = "Time: 00:00:00"

function new_game() {
	for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    blank_x = 3
    blank_y = 3
    cells = [];
	for(var i=0; i<4; i++) {
	    cells[i] = [];
	    for(var j=0; j<4; j++) {
	    	name = "c" + (i*4+j+1).toString()
	        cells[i][j] = document.getElementById(name);
	        if (typeof array[i*4+j] == 'undefined') {
	        	cells[i][j].innerHTML = ''
	        	cells[i][j].style.backgroundImage = "url('wood.jpg')"
	        }
	        else {
	        	cells[i][j].innerHTML = array[i*4+j]
	        	cells[i][j].style.background = "rgb(220, 220, 220)"
	        }
	        cells[i][j].addEventListener("click", swap.bind(this, i, j))
	    }
	}
	time = 0
	moves = 0
	paused = false
	pauseTime = null
	startTimer(pauseTime)
	document.getElementById("potezi").innerHTML = "Moves: " + moves
	document.getElementById("vreme").innerHTML = "Time: 00:00:00"
}

function pause() {
	if (!paused) {
		document.getElementById("tbl").style.visibility = "hidden"
		paused = true
		pauseTimer()
	}
	else if (paused) {
		document.getElementById("tbl").style.visibility = "visible"
		paused = false
		startTimer(pauseTime)
	}
}

function swap(x, y) {
	if (!check_if_solved() && (blank_x-x)*(blank_y-y) == 0 && (Math.abs(blank_x-x) == 1 || Math.abs(blank_y-y) == 1)) {
		cells[blank_x][blank_y].innerHTML = cells[x][y].innerHTML
		cells[x][y].innerHTML = ''
		cells[blank_x][blank_y].style.background = cells[x][y].style.background
		cells[x][y].style.backgroundImage = "url('wood.jpg')"
		blank_x = x
		blank_y = y
		moves++
		document.getElementById("potezi").innerHTML = "Moves: " + moves
		//check_if_solved()
	}
}

function check_if_solved()
{
	for(var i=0; i<4; i++) {
	    for(var j=0; j<4; j++) {
	    	if (cells[i][j].innerHTML != i*4+j+1) {
	    		return false
	    	}
	    }
	}
	return true
}

function startTimer(t)
{
	startTime = Date.now()
	if (t != null) {
		startTime -= t
	}
	running = setInterval(refreshTimer.bind(this), 1000)
}

function refreshTimer()
{
	document.getElementById("vreme").innerHTML = 'Time: ' + (new Date(Date.now() - startTime)).toISOString().substr(11, 8)
}

function pauseTimer() {
	clearInterval(running)
	pauseTime = Date.now() - new Date(startTime)
	console.log(pauseTime)
	document.getElementById("vreme").innerHTML = 'Time: ' + (new Date(pauseTime)).toISOString().substr(11, 8)
}
