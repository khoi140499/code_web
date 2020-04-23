document.addEventListener("DOMContentLoaded", function(){
	var x = document.getElementById('nut1');
	var y = document.getElementsByClassName('card');
	var trangthai="lan1";
	x.onclick=function(){
		if(trangthai == "lan1"){
			trangthai = "lan2";
			y[0].classList.remove('ko');
			y[0].classList.add('chieuso1');	
		}
		else if (trangthai == "lan2") {
			trangthai = "lan1";
			y[0].classList.remove('chieuso1');
		}
	}

}, false)