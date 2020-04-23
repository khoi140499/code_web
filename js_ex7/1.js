document.addEventListener("DOMContentLoaded", function(){
	var x = document.getElementById('nut1');
	var y = document.getElementsByClassName('card');
	var tt ="l1";
	x.onclick = function(){
		if (tt == "l1") {
			tt="l2";
			y[0].classList.add('luotdi');
		}
		else if (tt == "l2") {
			y[0].classList.remove('luotdi');
			tt="l1";
		}
	}
}, false)