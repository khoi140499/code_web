document.addEventListener("DOMContentLoaded", function(){
	var nut = document.querySelector('.nut');
	var den = document.querySelector('.den');
	var ndt = document.querySelector('.noidungto');

	nut.onclick = function(){
		den.classList.add('hienden');
		ndt.classList.remove('chuyenve');
		ndt.classList.add('chuyendong');
	}

	den.onclick = function(){
		den.classList.remove('hienden');
		ndt.classList.remove('chuyendong');
		ndt.classList.add('chuyenve');
	}
}, false)