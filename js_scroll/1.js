document.addEventListener("DOMContentLoaded", function(){
	var x=document.querySelector('.main2');
	var y = x.offsetTop-100;
	var tt="true";
	console.log(y);
	document.addEventListener('scroll', function(){
		 // for (var i = 0; i < x.length; i++) {
		 	if(window.pageYOffSet > y){
		 		if(tt == "true"){
		 			console.log('OK');
		 			tt="false";
		 		}
		 	}
		 // }
	})
}, false)