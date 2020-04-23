document.addEventListener("DOMContentLoaded", function(){
	var nut = document.querySelector('.nut');
	var menutrai = document.querySelector('.menutrai');
	var den = document.querySelector('.den');
	nut.onclick = function(){
		den.classList.add('len');
		menutrai.classList.remove('vt');
		menutrai.classList.add('vetrai');
	}
	den.onclick = function(){
		den.classList.remove('len');
		menutrai.classList.remove('vetrai');
		menutrai.classList.add('vt');
	}
}, false)