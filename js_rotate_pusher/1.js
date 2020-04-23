document.addEventListener("DOMContentLoaded", function(){
	var nut = document.querySelector('.nut');
	var den = document.querySelector('.den');
	var menutrai = document.querySelector('.menutrai');
	var ndt = document.querySelector('.noidungto');

	nut.onclick = function(){
		den.classList.add('hienden');
		menutrai.classList.remove('menu2');
		ndt.classList.remove('chuyenve')
		menutrai.classList.add('menu1');
		ndt.classList.add('chuyendong');
	}

	den.onclick = function(){
		den.classList.remove('hienden');
		menutrai.classList.remove('menu1');
		ndt.classList.remove('chuyendong');
		menutrai.classList.add('menu2');
		ndt.classList.add('chuyenve');
	}
}, false)