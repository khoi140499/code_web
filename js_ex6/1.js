document.addEventListener("DOMContentLoaded", function(){
	var x = document.getElementById('nut1');
	var y = document.getElementsByClassName('card');
	x.onclick = function(){
		y[0].classList.add('diphai');
	}
}, false)