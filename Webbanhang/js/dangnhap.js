document.addEventListener("DOMContentLoaded", function(){
	var dangki = document.querySelector('.dk');
	var dk=document.querySelector('.account_login');
	var dangnhap = document.querySelector('.dn');
	var dn=document.querySelector('.account_logup');
	var home=document.querySelector('.home');
	var h=document.querySelector('.menu_bar')
	dangki.onclick=function(){
		dk.classList.add('login_out');
		dn.classList.add('logup_hien');
		dn.classList.remove('logout_mat');
		dk.classList.remove('login_in');
		h.classList.remove('hien');
	}
	dangnhap.onclick=function(){
		dk.classList.remove('login_out');
		dn.classList.remove('logup_hien');
		dn.classList.add('logout_mat');
		dk.classList.add('login_in');
		h.classList.remove('hien');
	}
	home.onclick=function(){
		h.classList.toggle('hien');
	}
}, false)