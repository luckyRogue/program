 window.onload = function(){
	var ho = document.querySelector('.hh');
	var mi = document.querySelector('.mm');
	var sm = document.querySelector('.ss');
	setInterval(function(){
	var nowDate = new Date();
	var futDate = new Date(2017,12,01,22,00,00);
	var nowTime = nowDate.getTime();
	var futTime = futDate.getTime();
	var mis = futTime - nowTime;
	var ms = 1000*60;
	var hs = ms*60;
	var ds = hs*24;
	var d = parseInt(mis/ds);
	var h = parseInt(mis%ds/hs);
	var m = parseInt(mis%ds%hs/ms);
	var s = parseInt(mis%ds%hs%ms/1000);
	if (h<10) {
		ho.innerHTML = "0" + h;
	}
	else{
		ho.innerHTML = h;
	}
	if (m<10) {
		mi.innerHTML = "0" + m;
	}
	else{
		mi.innerHTML = m;
	}
	if (s<10) {
		sm.innerHTML = "0" + s;
	}
	else{
		sm.innerHTML = s;
	}
	},1000)
}