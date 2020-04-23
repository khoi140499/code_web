document.addEventListener("DOMContentLoaded", function(){
	var nut = document.getElementsByClassName('nut');
	var den1 = document.querySelector('.den1');
	var den2 = document.querySelector('.den2');
	var menu = document.querySelector('.menutrai');
	var nd = document.querySelector('.noidung');
	
	nut[2].onclick = function(){
		var them = this.getAttribute('data-hien');
		var mat = this.getAttribute('data-ra');
		den1.classList.add('len1');
		menu.classList.remove(mat);
		menu.classList.add(them)
	}

	den1.onclick = function(){
		var them = nut[2].getAttribute('data-hien');
		var mat = nut[2].getAttribute('data-ra');
		den1.classList.remove('len1');
		menu.classList.remove(them);
		menu.classList.add(mat);
	}

	nut[1].onclick = function(){
		var them = this.getAttribute('data-hien');
		var mat = this.getAttribute('data-ra');
		var mn = this.getAttribute('data-menu');
		den2.classList.add('len2');
		nd.classList.remove(mat);
		nd.classList.add(them);
		menu.classList.add(mn);
		console.log(mn);
	}

	den2.onclick = function(){
		var them = nut[1].getAttribute('data-hien');
		var mat = nut[1].getAttribute('data-ra');
		var mn = nut[1].getAttribute('data-menu');
		den2.classList.remove('len2');
		nd.classList.remove(them);
		menu.classList.remove(mn);
		nd.classList.add(mat);
	}
	// nut[2].onclick = function(){
	// 	var them = this.getAttribute('data-hien');
	// 	var mat = this.getAttribute('data-ra');
	// 	den.classList.add('len');
	// 	menu.classList.remove(mat);
	// 	menu.classList.add(them);
	// }
	// den.onclick = function(){
	// 	var them = nut[2].getAttribute('data-hien');
	// 	var mat = nut[2].getAttribute('data-ra');
	// 	den.classList.remove('len');
	// 	menu.classList.remove(them);
	// 	menu.classList.add(mat);
	// }
}, false)