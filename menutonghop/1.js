document.addEventListener("DOMContentLoaded", function(){
	var nut = document.getElementsByClassName('nut');
	var den1 = document.querySelector('.den1');
	var den2 = document.querySelector('.den2');
	var den3 = document.querySelector('.den3');
	var den4 = document.querySelector('.den4');
	var den5 = document.querySelector('.den5');
	var den6 = document.querySelector('.den6');
	var den7 = document.querySelector('.den7');
	var den8 = document.querySelector('.den8');
	var den9 = document.querySelector('.den9');
	var den0 = document.querySelector('.den0');
	var den11 = document.querySelector('.den11');
	var den12 = document.querySelector('.den12');
	var den13 = document.querySelector('.den13');
	var den14 = document.querySelector('.den14');
	var menu1 = document.querySelector('.menutrai1');
	var menu0 = document.querySelector('.menutrai0');
	var nd = document.querySelector('.noidung');
	
	nut[2].onclick = function(){
		var mat1 = nut[1].getAttribute('data-ra');
		var mat2 = nut[0].getAttribute('data-ra');
		var mat3 = nut[3].getAttribute('data-ra');
		var mat4 = nut[4].getAttribute('data-ra');
		var xoa1 = document.getElementsByClassName(mat1);
		var xoa2 = document.getElementsByClassName(mat2);
		var xoa3 = document.getElementsByClassName(mat3);
		var xoa4 = document.getElementsByClassName(mat4);
		if(menu1.classList[1] == mat1){
			xoa1[0].classList.remove(mat1);
		}
		else if (menu1.classList[1] == mat2) {
			xoa2[0].classList.remove(mat2);
		}
		else if (menu1.classList[1] == mat3) {
			xoa3[0].classList.remove(mat2);
		}
		else if (menu1.classList[1] == mat4) {
			xoa4[0].classList.remove(mat2);
		}

		if(menu0.classList[1] == mat1){
			xoa1[0].classList.remove(mat1);
		}
		else if (menu0.classList[1] == mat2) {
			xoa2[0].classList.remove(mat2);
		}
		else if (menu0.classList[1] == mat3) {
			xoa3[0].classList.remove(mat2);
		}
		else if (menu0.classList[1] == mat4) {
			xoa4[0].classList.remove(mat2);
		}

		if (nd.classList[1] == mat1) {
			xoa1[0].classList.remove(mat1);
		}
		else if (nd.classList[1] == mat2) {
			xoa2[0].classList.remove(mat2);
		}
		else if (nd.classList[1] == mat3) {
			xoa3[0].classList.remove(mat3);
		}
		else if (nd.classList[1] == mat4) {
			xoa4[0].classList.remove(mat4);
		}
		var mat5 = nut[0].getAttribute('data-nd');
		var mat6 = nut[3].getAttribute('data-nd');
		var mat7 = nut[4].getAttribute('data-nd');
		var xoa5 = document.getElementsByClassName(mat5);
		var xoa6 = document.getElementsByClassName(mat6);
		var xoa7 = document.getElementsByClassName(mat7);
		if (nd.classList[1] == mat5) {
			xoa5[0].classList.remove(mat5);
		}
		else if (nd.classList[1] == mat6) {
			xoa6[0].classList.remove(mat6);
		}
		else if (nd.classList[1] == mat7) {
			xoa7[0].classList.remove(mat7);
		}
		var them = this.getAttribute('data-hien');
		var mat = this.getAttribute('data-ra');	
		den1.classList.add('len1');
		menu1.classList.remove(mat);
		menu1.classList.add(them)
	}

	den1.onclick = function(){
		var them = nut[2].getAttribute('data-hien');
		var mat = nut[2].getAttribute('data-ra');
		den1.classList.remove('len1');
		menu1.classList.remove(them);
		menu1.classList.add(mat);
	}

	nut[1].onclick = function(){
		var mat1 = nut[2].getAttribute('data-ra');
		var mat2 = nut[0].getAttribute('data-ra');
		var mat3 = nut[3].getAttribute('data-ra');
		var mat4 = nut[4].getAttribute('data-ra');
		var xoa1 = document.getElementsByClassName(mat1);
		var xoa2 = document.getElementsByClassName(mat2);
		var xoa3 = document.getElementsByClassName(mat3);
		var xoa4 = document.getElementsByClassName(mat4);
		if(menu1.classList[1] == mat1){
			xoa1[0].classList.remove(mat1);
		}
		else if (menu1.classList[1] == mat2) {
			xoa2[0].classList.remove(mat2);
		}
		else if (menu1.classList[1] == mat3) {
			xoa3[0].classList.remove(mat2);
		}
		else if (menu1.classList[1] == mat4) {
			xoa4[0].classList.remove(mat2);
		}

		if(menu0.classList[1] == mat1){
			xoa1[0].classList.remove(mat1);
		}
		else if (menu0.classList[1] == mat2) {
			xoa2[0].classList.remove(mat2);
		}
		else if (menu0.classList[1] == mat3) {
			xoa3[0].classList.remove(mat2);
		}
		else if (menu0.classList[1] == mat4) {
			xoa4[0].classList.remove(mat2);
		}

		if (nd.classList[1] == mat1) {
			xoa1[0].classList.remove(mat1);
		}
		else if (nd.classList[1] == mat2) {
			xoa2[0].classList.remove(mat2);
		}
		else if (nd.classList[1] == mat3) {
			xoa3[0].classList.remove(mat3);
		}
		else if (nd.classList[1] == mat4) {
			xoa4[0].classList.remove(mat4);
		}
		var mat5 = nut[0].getAttribute('data-nd');
		var mat6 = nut[3].getAttribute('data-nd');
		var mat7 = nut[4].getAttribute('data-nd');
		var xoa5 = document.getElementsByClassName(mat5);
		var xoa6 = document.getElementsByClassName(mat6);
		var xoa7 = document.getElementsByClassName(mat7);
		if (nd.classList[1] == mat5) {
			xoa5[0].classList.remove(mat5);
		}
		else if (nd.classList[1] == mat6) {
			xoa6[0].classList.remove(mat6);
		}
		else if (nd.classList[1] == mat7) {
			xoa7[0].classList.remove(mat7);
		}
		console.log(mat1+" "+mat2+" "+mat3+" "+mat4);
		var them = this.getAttribute('data-hien');
		var mat = this.getAttribute('data-ra');
		var mn = this.getAttribute('data-menu');
		den2.classList.add('len2');
		nd.classList.remove(mat);
		nd.classList.add(them);
		menu0.classList.add(mn);
	}

	den2.onclick = function(){
		var them = nut[1].getAttribute('data-hien');
		var mat = nut[1].getAttribute('data-ra');
		var mn = nut[1].getAttribute('data-menu');
		den2.classList.remove('len2');
		nd.classList.remove(them);
		menu0.classList.remove(mn);
		nd.classList.add(mat);

	}

	nut[0].onclick = function(){
		var mat1 = nut[1].getAttribute('data-ra');
		var mat2 = nut[2].getAttribute('data-ra');
		var mat3 = nut[3].getAttribute('data-ra');
		var mat4 = nut[4].getAttribute('data-ra');
		var xoa1 = document.getElementsByClassName(mat1);
		var xoa2 = document.getElementsByClassName(mat2);
		var xoa3 = document.getElementsByClassName(mat3);
		var xoa4 = document.getElementsByClassName(mat4);
		if(menu1.classList[1] == mat1){
			xoa1[0].classList.remove(mat1);
		}
		else if (menu1.classList[1] == mat2) {
			xoa2[0].classList.remove(mat2);
		}
		else if (menu1.classList[1] == mat3) {
			xoa3[0].classList.remove(mat2);
		}
		else if (menu1.classList[1] == mat4) {
			xoa4[0].classList.remove(mat2);
		}

		if(menu0.classList[1] == mat1){
			xoa1[0].classList.remove(mat1);
		}
		else if (menu0.classList[1] == mat2) {
			xoa2[0].classList.remove(mat2);
		}
		else if (menu0.classList[1] == mat3) {
			xoa3[0].classList.remove(mat2);
		}
		else if (menu0.classList[1] == mat4) {
			xoa4[0].classList.remove(mat2);
		}

		if (nd.classList[1] == mat1) {
			xoa1[0].classList.remove(mat1);
		}
		else if (nd.classList[1] == mat2) {
			xoa2[0].classList.remove(mat2);
		}
		else if (nd.classList[1] == mat3) {
			xoa3[0].classList.remove(mat3);
		}
		else if (nd.classList[1] == mat4) {
			xoa4[0].classList.remove(mat4);
		}
		var mat6 = nut[3].getAttribute('data-nd');
		var mat7 = nut[4].getAttribute('data-nd');
		var xoa6 = document.getElementsByClassName(mat6);
		var xoa7 = document.getElementsByClassName(mat7);
		if (nd.classList[1] == mat6) {
			xoa6[0].classList.remove(mat6);
		}
		else if (nd.classList[1] == mat7) {
			xoa7[0].classList.remove(mat7);
		}

		var mn1 = this.getAttribute('data-hien');
		var mn2 = this.getAttribute('data-ra');
		var nd1 = this.getAttribute('data-menu');
		var nd2 = this.getAttribute('data-nd');
		den3.classList.add('len3');
		menu0.classList.remove(mn2);
		nd.classList.remove(nd2);
		menu0.classList.add(mn1);
		nd.classList.add(nd1);
	}

	den3.onclick = function(){
		var mn1 = nut[0].getAttribute('data-hien');
		var mn2 = nut[0].getAttribute('data-ra');
		var nd1 = nut[0].getAttribute('data-menu');
		var nd2 = nut[0].getAttribute('data-nd');
		den3.classList.remove('len3');
		menu0.classList.remove(mn1);
		nd.classList.remove(nd1);
		menu0.classList.add(mn2);
		nd.classList.add(nd2);	
	}

	// nut[4].onclick = function(){
	// 	var mat1 = nut[0].getAttribute('data-ra');
	// 	var mat2 = nut[1].getAttribute('data-ra');
	// 	var mat3 = nut[2].getAttribute('data-ra');
	// 	var mat4 = nut[3].getAttribute('data-ra');
	// 	var xoa1 = document.getElementsByClassName(mat1);
	// 	var xoa2 = document.getElementsByClassName(mat2);
	// 	var xoa3 = document.getElementsByClassName(mat3);
	// 	var xoa4 = document.getElementsByClassName(mat4);
	// 	if(menu1.classList[1] == mat1){
	// 		xoa1[0].classList.remove(mat1);
	// 	}
	// 	else if (menu1.classList[1] == mat2) {
	// 		xoa2[0].classList.remove(mat2);
	// 	}
	// 	else if (menu1.classList[1] == mat3) {
	// 		xoa3[0].classList.remove(mat2);
	// 	}
	// 	else if (menu1.classList[1] == mat4) {
	// 		xoa4[0].classList.remove(mat2);
	// 	}

	// 	if(menu0.classList[1] == mat1){
	// 		xoa1[0].classList.remove(mat1);
	// 	}
	// 	else if (menu0.classList[1] == mat2) {
	// 		xoa2[0].classList.remove(mat2);
	// 	}
	// 	else if (menu0.classList[1] == mat3) {
	// 		xoa3[0].classList.remove(mat2);
	// 	}
	// 	else if (menu0.classList[1] == mat4) {
	// 		xoa4[0].classList.remove(mat2);
	// 	}

	// 	if (nd.classList[1] == mat1) {
	// 		xoa1[0].classList.remove(mat1);
	// 	}
	// 	else if (nd.classList[1] == mat2) {
	// 		xoa2[0].classList.remove(mat2);
	// 	}
	// 	else if (nd.classList[1] == mat3) {
	// 		xoa3[0].classList.remove(mat3);
	// 	}
	// 	else if (nd.classList[1] == mat4) {
	// 		xoa4[0].classList.remove(mat4);
	// 	}
	// 	var mat5 = nut[0].getAttribute('data-nd');
	// 	var mat6 = nut[3].getAttribute('data-nd');
	// 	var xoa5 = document.getElementsByClassName(mat5);
	// 	var xoa6 = document.getElementsByClassName(mat6);
	// 	if (nd.classList[1] == mat5) {
	// 		xoa5[0].classList.remove(mat5);
	// 	}
	// 	else if (nd.classList[1] == mat6) {
	// 		xoa6[0].classList.remove(mat6);
	// 	}

	// 	var mn1 = this.getAttribute('data-hien');
	// 	var mn2 = this.getAttribute('data-ra');
	// 	var nd1 = this.getAttribute('data-menu');
	// 	var nd2 = this.getAttribute('data-nd');
	// 	den4.classList.add('len4');
	// 	menu0.classList.remove(mn2);
	// 	nd.classList.remove(nd2);
	// 	menu0.classList.add(mn1);
	// 	nd.classList.add(nd1);
	// }

	// den4.onclick = function(){
	// 	var mn1 = nut[4].getAttribute('data-hien');
	// 	var mn2 = nut[4].getAttribute('data-ra');
	// 	var nd1 = nut[4].getAttribute('data-menu');
	// 	var nd2 = nut[4].getAttribute('data-nd');
	// 	den4.classList.remove('len4');
	// 	menu0.classList.remove(mn1);
	// 	nd.classList.remove(nd1);
	// 	menu0.classList.add(mn2);
	// 	nd.classList.add(nd2);
	// }

	// nut[3].onclick = function(){
	// 	var mat1 = nut[1].getAttribute('data-ra');
	// 	var mat2 = nut[0].getAttribute('data-ra');
	// 	var mat3 = nut[2].getAttribute('data-ra');
	// 	var mat4 = nut[4].getAttribute('data-ra');
	// 	var xoa1 = document.getElementsByClassName(mat1);
	// 	var xoa2 = document.getElementsByClassName(mat2);
	// 	var xoa3 = document.getElementsByClassName(mat3);
	// 	var xoa4 = document.getElementsByClassName(mat4);
	// 	if(menu1.classList[1] == mat1){
	// 		xoa1[0].classList.remove(mat1);
	// 	}
	// 	else if (menu1.classList[1] == mat2) {
	// 		xoa2[0].classList.remove(mat2);
	// 	}
	// 	else if (menu1.classList[1] == mat3) {
	// 		xoa3[0].classList.remove(mat2);
	// 	}
	// 	else if (menu1.classList[1] == mat4) {
	// 		xoa4[0].classList.remove(mat2);
	// 	}

	// 	if(menu0.classList[1] == mat1){
	// 		xoa1[0].classList.remove(mat1);
	// 	}
	// 	else if (menu0.classList[1] == mat2) {
	// 		xoa2[0].classList.remove(mat2);
	// 	}
	// 	else if (menu0.classList[1] == mat3) {
	// 		xoa3[0].classList.remove(mat2);
	// 	}
	// 	else if (menu0.classList[1] == mat4) {
	// 		xoa4[0].classList.remove(mat2);
	// 	}

	// 	if (nd.classList[1] == mat1) {
	// 		xoa1[0].classList.remove(mat1);
	// 	}
	// 	else if (nd.classList[1] == mat2) {
	// 		xoa2[0].classList.remove(mat2);
	// 	}
	// 	else if (nd.classList[1] == mat3) {
	// 		xoa3[0].classList.remove(mat3);
	// 	}
	// 	else if (nd.classList[1] == mat4) {
	// 		xoa4[0].classList.remove(mat4);
	// 	}
	// 	var mat5 = nut[0].getAttribute('data-nd');
	// 	var mat7 = nut[4].getAttribute('data-nd');
	// 	var xoa5 = document.getElementsByClassName(mat5);
	// 	var xoa7 = document.getElementsByClassName(mat7);
	// 	if (nd.classList[1] == mat5) {
	// 		xoa5[0].classList.remove(mat5);
	// 	}
	// 	else if (nd.classList[1] == mat7) {
	// 		xoa7[0].classList.remove(mat7);
	// 	}

	// 	var mn1 = this.getAttribute('data-hien');
	// 	var mn2 = this.getAttribute('data-ra');
	// 	var nd1 = this.getAttribute('data-menu');
	// 	var nd2 = this.getAttribute('data-nd');
	// 	den5.classList.add('len5');
	// 	menu0.classList.remove(mn2);
	// 	nd.classList.remove(nd2);
	// 	menu0.classList.add(mn1);
	// 	nd.classList.add(nd1);
	// }

	// den5.onclick = function(){
	// 	var mn1 = nut[3].getAttribute('data-hien');
	// 	var mn2 = nut[3].getAttribute('data-ra');
	// 	var nd1 = nut[3].getAttribute('data-menu');
	// 	var nd2 = nut[3].getAttribute('data-nd');
	// 	den5.classList.remove('len5');
	// 	menu0.classList.remove(mn1);
	// 	nd.classList.remove(nd1);
	// 	menu0.classList.add(mn2);
	// 	nd.classList.add(nd2);
	// }
	
}, false)