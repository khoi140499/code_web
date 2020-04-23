"use strict"
console.log("Hello");

var a=10;
var b=20;
var b2=b+a;

console.log(a);
console.log(b);
console.log(b2);

var z="hello";
var z1="world"
console.log(z+" "+z1);
console.log(b*a);
console.log(b/a);
console.log(b%a);

function chaythu(){
	a=a+1;
	console.log('Wow'+(a%10));
}
var dongho = {
	ten:"casio",
	gia:4200000
}
console.log(dongho.ten);
var diem=3;
if (diem<3) {
	console.log("k thoa man");
}
else if (diem>=3) {
	console.log("thoa man");
}

var hocvien ={
	ten:"Khoi",
	ho:"Hoang Dang",
	tuoi:21,
	chieucao:162,
	cannang:60,
	tendaydu: function(){
		return this.ho + " "+ this.ten;
	},
	danhgia: function(){
		if(this.chieucao/this.cannang < 3){
			return "ok";
		}
	}
}
console.log(hocvien.tendaydu());
console.log(hocvien.danhgia());
//for in
for (var x in hocvien) {
    console.log(hocvien[x]);
}
//xử lí với chuỗi.
var x="dien thoai iphone, android";
console.log(x.length);
console.log(x.indexOf("iphone"));
console.log(x.replace("iphone","nokia"));
console.log(x.split(" "));
//xử lí với số
var x=10;
var y=3;
var z="100";
console.log(x+y.toString());
console.log(Number(z));
console.log(parseInt(z));
//khai báo constructor
var cacmonan = {
	ten:"thit kho",
	nguyenlieu:"thit lon",
	gia:20000
};

function MonAn(t, nl, g) {
	// body...
	this.ten=t;
	this.nguyenlieu=nl;
	this.gia=g;
}
var aa=new MonAn("Thit bo xao rau","Thit bo","120000");
console.log(aa);