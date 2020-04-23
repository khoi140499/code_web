document.addEventListener("DOMContentLoaded", function(){
	var x = document.getElementsByClassName('tamgiac');
	var y = document.getElementsByClassName('danhsach');
	var tg = x[0];
	var y = y[0];
	tg.onclick = function(){
		this.classList.toggle('tgtrang');
		y.classList.toggle('ra');
	}
}, false)