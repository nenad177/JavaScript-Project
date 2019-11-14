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

startb.addEventListener('click', new_game)
pauseb.addEventListener('click', pause)

function new_game() {
	for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    cells = [];
	for(var i=0; i<4; i++) {
	    cells[i] = [];
	    for(var j=0; j<4; j++) {
	    	name = "c" + (i*4+j+1).toString()
	        cells[i][j] = document.getElementById(name);
	        if (typeof array[i*4+j] == 'undefined') {
	        	cells[i][j].innerHTML = ''
	        }
	        else {
	        	cells[i][j].innerHTML = array[i*4+j]
	        }
	    }
	}
	time = 0
	moves = 0
	/*document.getElementById("c1").addEventListener('click', swap(0, 0))
	document.getElementById("c2").addEventListener('click', swap(0, 1))
	document.getElementById("c3").addEventListener('click', swap(0, 2))
	document.getElementById("c4").addEventListener('click', swap(0, 3))
	document.getElementById("c5").addEventListener('click', swap(1, 0))
	document.getElementById("c6").addEventListener('click', swap(1, 1))
	document.getElementById("c7").addEventListener('click', swap(1, 2))
	document.getElementById("c8").addEventListener('click', swap(1, 3))
	document.getElementById("c9").addEventListener('click', swap(2, 0))
	document.getElementById("c10").addEventListener('click', swap(2, 1))
	document.getElementById("c11").addEventListener('click', swap(2, 2))
	document.getElementById("c12").addEventListener('click', swap(2, 3))
	document.getElementById("c13").addEventListener('click', swap(3, 0))
	document.getElementById("c14").addEventListener('click', swap(3, 1))
	document.getElementById("c15").addEventListener('click', swap(3, 2))
	document.getElementById("c16").addEventListener('click', swap(3, 3))*/
}

function pause() {
	if (!paused) {
		document.getElementById("tbl").style.visibility = "hidden"
		paused = true
	}
	else {
		document.getElementById("tbl").style.visibility = "visible"
		paused = false
	}
}

function swap(x, y) {
	if ((blank_x-x)*(blank_y-y) == 0 && ((blank_x-x) == 1 || (blank_y-y) == 1)) {
		cells[blank_x, blank_y].innerHTML = cells[x, y].innerHTML
		cells[x, y].innerHTML = ''
		blank_x = x
		blank_y = y
		moves++
		document.getElementById("potezi").innerHTML = "Moves: " + moves
	}
}