"use strict"
var x1 = document.getElementsByTagName('h1');
console.log(x1[0]);
var p = document.getElementsByTagName('p');
console.log(p[0].innerHTML); //lấy giá trị của thẻ html
p[1].innerHTML="Web bị hack rồi nhé !!!!";