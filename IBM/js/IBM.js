window.onload = function(){
	var me = document.querySelector('#me1');
	var hid = document.querySelector('#hid1');
	me.onmouseover = function(){
		hid.style.height = '569px';
	}
	me.onmouseout = function(){
		hid.style.height = 0;
	}
	hid.onmouseover = function(){
		hid.style.height = '569px';
	}
	hid.onmouseout = function(){
		hid.style.height = 0;
	}
	var me2 = document.querySelector('#me2');
	var hid2 = document.querySelector('#hid2');
	me2.onmouseover = function(){
		hid2.style.height = '569px';
	}
	me2.onmouseout = function(){
		hid2.style.height = 0;
	}
	hid2.onmouseover = function(){
		hid2.style.height = '569px';
	}
	hid2.onmouseout = function(){
		hid2.style.height = 0;
	}
	var me3 = document.querySelector('#me4');
	var hid3 = document.querySelector('#hid3');
	me3.onmouseover = function(){
		hid3.style.height = '569px';
	}
	me3.onmouseout = function(){
		hid3.style.height = 0;
	}
	hid3.onmouseover = function(){
		hid3.style.height = '569px';
	}
	hid3.onmouseout = function(){
		hid3.style.height = 0;
	}
	var sel = document.getElementById('sel');
	var b = document.getElementById('b');
	var count = 0;
	sel.onclick = function(){
		count = (count + 180)%360;
		b.style.transform = "rotate" + "X(" + count + "deg)"
	}
	b.onclick = function(){
		count = (count + 180)%360;
		b.style.transform = "rotate" + "X(" + count + "deg)"
	}
}