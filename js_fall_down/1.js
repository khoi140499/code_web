document.addEventListener("DOMContentLoaded", function(){
	var nut = document.querySelector('.nut');
	var den = document.querySelector('.den');
	var ndt = document.querySelector('.noidungto');
	var menu = document.querySelector('.menutrai');

	nut.onclick = function(){
		den.classList.add('hienden');
		ndt.classList.remove('chuyenve');
		menu.classList.remove('menu2');
		ndt.classList.add('chuyendong');
		menu.classList.add('menu1');
	}

	den.onclick = function(){
		den.classList.remove('hienden');
		ndt.classList.remove('chuyendong');
		menu.classList.remove('menu1');
		ndt.classList.add('chuyenve');
		menu.classList.add('menu2');
	}
}, false)