var game = new Game();
var timer = new Timer();

document.getElementById("btn1").addEventListener('click', game.new_game);
document.getElementById("btn2").addEventListener('click', game.pause);
document.getElementById("moves").innerHTML = "Moves: 0";
document.getElementById("time").innerHTML = "Time: 00:00:00";
