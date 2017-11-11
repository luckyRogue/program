	var list = document.getElementById('banlist');
	var num = document.getElementById('banlist').getElementsByTagName("li");
	var count = 0;
	var lef = 0;	
	var dot = document.getElementById('swipe').getElementsByTagName("li");
	dot[0].style.background = "red";
	setInterval(function(){
			count ++;
			lef = -count*320;
			list.style.left = lef/20 + "rem";
		if (count > num.length-1){
			count = 0;
			list.style.left = 0 + "rem";
		}
		for(var i=0; i< dot.length; i++){
			dot[i].style.background = "#FFF";
		}
		dot[count].style.background = "red";
	},2000)		