class Timer {
	
	startTimer(t) {
		game.startTime = Date.now();
		if (t != null) {
			game.startTime -= t;
		}
		game.running = setInterval(this.refreshTimer.bind(this), 1000);
	}

	refreshTimer() {
		document.getElementById("time").innerHTML = 'Time: ' + (new Date(Date.now() - game.startTime)).toISOString().substr(11, 8);
	}

	stopTimer() {
		clearInterval(game.running);
		let pt = Date.now() - new Date(game.startTime);
		//console.log(pt);
		document.getElementById("time").innerHTML = 'Time: ' + (new Date(pt)).toISOString().substr(11, 8);
		return pt;
	}

}