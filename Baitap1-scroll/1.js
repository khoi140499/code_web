document.addEventListener("DOMContentLoaded", function(){
	//bat su kien cuon chuot
	var tt= true;
	var tt1= true;
	var layve = document.querySelector('.menu');
	window.addEventListener('scroll', function(){
		console.log(window.pageYOffset);
		if(window.pageYOffset > 300){
			if(tt==true){
				layve.classList.add('nholai');
				tt=false;
			}
		}
		else if(window.pageYOffset <= 300){
			if(tt==false){
				layve.classList.remove('nholai');
				tt=true;
			}
		}
	})

}, false)