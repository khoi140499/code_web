var dc = document.getElementsByTagName('h1');
console.log(dc);
for (var i = 0; i < dc.length; i++) {
	dc[i].innerHTML = "<button> Hoang Dang Khoi </button>";
}
var x = document.getElementById('hh');
console.log(x);

var y = document.getElementsByClassName('h2');
console.log(y);

var z = document.querySelector('#ab');
console.log(z);

var c = document.querySelectorAll('#ab');
console.log(c);

for (var i = 0; i < c.length; i++) {
	console.log(c[i]);
	c[i].innerHTML= "Phan tu duoc viet";
	if(i==1){
		c[i].innerHTML = " Cai nayy khac nhe";
	}
}

var b = document.querySelectorAll("[data-thongbao]");
console.log(b);