document.addEventListener("DOMContentLoaded", function(){
	var x = document.getElementsByClassName('icon_img');
	var y = document.getElementsByClassName('icon_nd');
	
	for (var i = 0; i < x.length; i++) {
		x[i].onclick = function(){
			if(this.classList[1] == 'mautrang'){
				this.classList.remove('mautrang');

				var nd = this.getAttribute('data-hien');
				var ht = document.getElementById(nd);

				ht.classList.remove('ra');
			}
			else{
				for (var k = 0; k < x.length; k++) {
				x[k].classList.remove('mautrang');
					}
				this.classList.toggle('mautrang');

				var nd = this.getAttribute('data-hien');
				var ht = document.getElementById(nd);

				for (var l = 0; l < y.length; l++) {
				y[l].classList.remove('ra');
			}
				ht.classList.toggle('ra');
			}
		}
	}
}, false)