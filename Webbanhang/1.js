document.addEventListener("DOMContentLoaded", function(){
	var x=document.getElementsByClassName('sp');
	var y=document.getElementById('click_sp');
	var z=document.getElementsByClassName('main');
	y.onclick = function(){
		x[0].classList.toggle('sp_hien');
	};
	z[0].onclick=function(){

	}
}, false)