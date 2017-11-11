window.onload = function(){
	var ser = document.querySelector('.service');
	var fuw = document.querySelector('.fuwu');
	var clo = document.querySelector('.close');
	ser.onclick  = function(){
		fuw.style.display = 'block';
	}
	clo.onclick = function(){
		fuw.style.display = 'none';
	}
	var cho = document.querySelector('.choose');
	var ple	= document.querySelector('.please');
	var gclo = document.querySelector('.good-close'); 
	cho.onclick = function(){
		ple.style.display = 'block';
	}
	gclo.onclick = function(){
		ple.style.display = 'none';
	}
}