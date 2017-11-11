window.onload = function(){
	var btn1 = document.querySelector('.solider-items1');
	var paner1 = document.querySelector('.paner1');
	var btn2 = document.querySelector('.solider-items2');
	var paner2 = document.querySelector('.paner2');
	var btn2 = document.querySelector('.solider-items2');
	var paner3 = document.querySelector('.paner3');
	var btn3 = document.querySelector('.solider-items3');
	var paner4 = document.querySelector('.paner4');
	var btn4 = document.querySelector('.solider-items4');
	var paner5 = document.querySelector('.paner5');
	var btn5 = document.querySelector('.solider-items5');
	var paner6 = document.querySelector('.paner6');
	var btn6 = document.querySelector('.solider-items6');
	btn1.onmouseover = function(){
		paner1.style.opacity = "1";
		paner2.style.opacity = "0";
		paner3.style.opacity = "0";
		paner4.style.opacity = "0";
		paner5.style.opacity = "0";
		paner6.style.opacity = "0";
	}
	btn2.onmouseover = function(){
		paner1.style.opacity = "0";
		paner2.style.opacity = "1";
		paner3.style.opacity = "0";
		paner4.style.opacity = "0";
		paner5.style.opacity = "0";
		paner6.style.opacity = "0";
	}
	btn3.onmouseover = function(){
		paner1.style.opacity = "0";
		paner2.style.opacity = "0";
		paner3.style.opacity = "1";
		paner4.style.opacity = "0";
		paner5.style.opacity = "0";
		paner6.style.opacity = "0";
	}
	btn4.onmouseover = function(){
		paner1.style.opacity = "0";
		paner2.style.opacity = "0";
		paner3.style.opacity = "0";
		paner4.style.opacity = "1";
		paner5.style.opacity = "0";
		paner6.style.opacity = "0";
	}
	btn5.onmouseover = function(){
		paner1.style.opacity = "0";
		paner2.style.opacity = "0";
		paner3.style.opacity = "0";
		paner4.style.opacity = "0";
		paner5.style.opacity = "1";
		paner6.style.opacity = "0";
	}
	btn6.onmouseover = function(){
		paner1.style.opacity = "0";
		paner2.style.opacity = "0";
		paner3.style.opacity = "0";
		paner4.style.opacity = "0";
		paner5.style.opacity = "0";
		paner6.style.opacity = "1";
	}
	var close = document.querySelector(".del");
	var ad = document.querySelector(".ad");
	close.onclick = function(){
		ad.style.display = "none";
	}
}
	