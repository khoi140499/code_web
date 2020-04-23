document.addEventListener("DOMContentLoaded", function(){
	//bien su dung .declick
	var nut = document.getElementsByClassName('declick');
	var nd = document.getElementsByClassName('dehienthi');
	for (var i = 0; i < nut.length; i++) {
		nut[i].onclick = function(){
			if(this.classList[1] == 'mautrang'){
				this.classList.remove('mautrang');

				var ndhienra = this.getAttribute('data-hienlen');
				var phantuhienra = document.getElementById(ndhienra);

				phantuhienra.classList.remove('ra');
			}
			else {
				for (var k = 0; k < nut.length; k++) {
				nut[k].classList.remove('mautrang');
			}
			//doi tuong dc click thanh mau trang
			this.classList.toggle('mautrang');

			//lay ve data-hienlen
			var ndhienra = this.getAttribute('data-hienlen');
			var phantuhienra = document.getElementById(ndhienra);

			//cho tat ca cac doi tuong khac div.hienthi an di
			for (var l = 0; l < nd.length; l++) {
				nd[l].classList.remove('ra');
			}

			//cho div cua doi tuong dc click hien thi ra 
			phantuhienra.classList.toggle('ra');
			}
		}
	}
}, false)