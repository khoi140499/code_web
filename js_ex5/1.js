document.addEventListener("DOMContentLoaded", function() {
	var x = document.getElementById('n1');
	console.log(x);
	x.onclick = function(){
		console.log('Ban vua click vao day');
		x.classList.add('dixuong');
	}
}, false)