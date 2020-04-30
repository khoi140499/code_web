document.addEventListener("DOMContentLoaded", function(){
var nut = document.querySelectorAll('.chuyenslide ul li');
var slides=document.querySelectorAll('.cacslide ul li');
var thoigian=setInterval(function(){
	onSlide()
}, 1000);
for (var i = 0; i < nut.length; i++) {
	nut[i].addEventListener('click', function(){
		// clearInterval(thoigian);
		//bỏ tất cả màu đen
		for (var i = 0; i < nut.length; i++) {
			nut[i].classList.remove('kichhoat');		
		}
		this.classList.add('kichhoat');

		var t=this;
		var ts=0;
		for (ts = 0; t=t.previousElementSibling; ts++) {
		}
		for (var k = 0; k < slides.length; k++) {
			slides[k].classList.remove('acti');
			slides[ts].classList.add('acti');
		}
		
	})
}
function onSlide(){
	var vitri =0;
			var slideht=document.querySelector('.cacslide ul li.acti');
			for(var vitri = 0; slideht = slideht.previousElementSibling; vitri++){
			}
			if(vitri < (slides.length-1)){
				for(var i=0;i<slides.length;i++){	
					slides[i].classList.remove('acti');
					nut[i].classList.remove('kichhoat');
				}
				slides[vitri].nextElementSibling.classList.add('acti');
				nut[vitri].nextElementSibling.classList.add('kichhoat');
			}
			else{
				for(var i=0;i<slides.length;i++){	
					slides[i].classList.remove('acti');
					nut[i].classList.remove('kichhoat');
				}
				slides[0].classList.add('acti');
				nut[0].classList.add('kichhoat');	
			}
}
}, false)