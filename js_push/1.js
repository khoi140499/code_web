document.addEventListener("DOMContentLoaded", function(){
	// khai bao cac bien can dung

	var nut = document.querySelector('.nut');
	var menutrai = document.querySelector('.menutrai');
	var den = document.querySelector('.den');
	var khoito = document.querySelector('.noidungto');
	//khi click vao nut xanh 
	nut.onclick = function(){
		den.classList.add('len');
		khoito.classList.add('dichphai');
	}

	den.onclick = function(){
		den.classList.remove('len');
		khoito.classList.remove('dichphai');
	}
}, false)