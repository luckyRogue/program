var btn1 = document.querySelector(".a1");
var btn2 = document.querySelector(".a2");
var left = document.querySelector(".left");
var passlogin = document.querySelector(".passlogin");
 btn1.onclick = function(){
 	left.style.display = "block";
 	passlogin.style.display = "none";
 	btn1.style.color = "red";
 	btn1.style.fontWeight = "bold";
 	btn2.style.color = "#666";
 	btn2.style.fontWeight = "normal";
 }
  btn2.onclick = function(){
 	left.style.display = "none";
 	passlogin.style.display = "block";
 	btn2.style.color = "red";
 	btn1.style.color = "#666";
 	btn2.style.fontWeight = "bold";
 	btn1.style.fontWeight = "normal";
 }