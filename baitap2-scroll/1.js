document.addEventListener("DOMContentLoaded", function(){
	var menudo = document.querySelector('.menu');
	var trangthaimenu = "duoi100";

	window.addEventListener('scroll', function(){
		if(window.pageYOffset > 100){
			if(trangthaimenu == "duoi100"){
				menudo.classList.add('menuden');
				trangthaimenu = "tren100";
			}
		}
		else if(window.pageYOffset <= 100){
			if(trangthaimenu == "tren100"){
				menudo.classList.remove('menuden');
				trangthaimenu = "duoi100";
			}
		}
	})
}, false)