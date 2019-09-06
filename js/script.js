$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

(function (global) {

function Scroll(){
	// if (window.pageYOffset > sticky) {
	// 	navHeader.classList.add("sticky");
	// 	console.log("Page Y > sticky");
	// }
	// else {
	// 	navHeader.classList.remove("sticky");
	// }
	if (window.pageYOffset >= 0) {
		headphoto.classList.add("stickyPhoto");
		//console.log("Page Y > stickyPhoto");
	}
	else {
		headphoto.classList.remove("stickyPhoto");
	}	
	//console.log("headphoto offset = " +stickyPhoto);
//console.log("window Y = " + window.offsetTop);
}

function light(x){
	x.querySelector(".light").
	style.textShadow = "2px 2px white";
	// console.log('Im being hovered');
	var exp = x.getAttribute("aria-expanded");
	// console.log(" aria-expanded : " +exp);
	if (exp) {
		x.style.margintop = "0px";
		// console.log("... and now I have a differente widht");
	}
}

function shadow(x){
	x.querySelector(".light").
	style.textShadow = "none";
	// console.log('Im being hovered');
	var exp = x.getAttribute("aria-expanded");
	// console.log(" aria-expanded : " +exp);
	if (exp) {
		x.style.margintop = "0px";
		// console.log("... and now I have a differente widht");
	}
}
	var des = document.getElementById("description");
function off(){
	var head = document.getElementById("headphoto");
	// var des = document.getElementById("description");
	console.log("headphoto offset = " +head.offsetTop);
	console.log("description offset = " +des.offsetTop);
	// console.log("description height = " +head.clientHeight);
	if(head.offsetTop + head.clientHeight >= des.offsetTop){
		des.style.transition = "all 2s";
		console.log("description offset now is= " +des.offsetTop);
	}
}

function display(x){
	console.log("questo è l'elemento selezionato " +x.id);

	var tran = document.getElementById("quadSel");
	console.log("E questo è il nostro tran : " +tran);
	var sel = document.getElementById("select");
	console.log("E questo è il nostro sel : " +sel);
	

	// tran.style.backgroundImage = x.style.backgroundImage;
	sel.innerHTML = x.innerHTML;
	sel.style.zIndex = "4";
	sel.style.display = "block";
/*
	x.style.display = "block";
	x.style.zIndex = "4";
	x.style.height = "400px";
	x.style.width = "100%";
	x.style.position = "absolute";
*/	 

}
// var modal = document.getElementById("select");
// window.onclick = function(event){
// 	console.log("Stiamo clicando in qualsiasi luogo");
// 	if (event.target == modal) {
// 		modal.style.display = "none";
// 	}
// }
var myVar = setInterval(change(), 5000);

var timer = setTimeout(change, 1000);
var tim = 0;
function change(){
	tim = tim + 1;
	// console.log("tim value " +tim);
	var ele = document.getElementById("top");
	var back = window.getComputedStyle(ele, null).getPropertyValue("background-color");
	// console.log("Questo è la colore dell'elemento : " +back);
	
		if ((tim%10 == 0 && tim%20 != 0)) {
			// console.log("Colore trovata!");
			var rosso = document.getElementById("rosso");
			// console.log("Cos'è il nostro rosso : " +rosso);

			var blu = document.getElementById("blu");
			// console.log("Cos'è il nostro blu : " +blu);

			var giallo = document.getElementById("giallo");

			var trans = document.getElementById("transition");
			//transition.innerHTML = giallo.innerHTML;
			giallo.innerHTML = rosso.innerHTML;
			rosso.innerHTML = blu.innerHTML;
			//blu.innerHTML = transition.innerHTML;
			blu.innerHTML = giallo.innerHTML;
			clearTimeout(timer);
		}
var timer = setTimeout(change, 1000);
}
//window.onscroll = function(){off()};

window.onclick = function(){check()};

function check(){
	// console.log(" we caught the event on x : " + x.getAttribute("id"));
	var catArray = document.querySelectorAll("#name");
	// var nameH = x.getAttribute("id");
	var nameH = window.target;
	//console.log("This is the nameH " + x.getAttribute("id"));
	for (var i = 0; i < catArray.length; i++) {
		var id = catArray[i].nextElementSibling.getAttribute("id");
		var ele = document.getElementById(id);
		console.log("This is the ele(i) element " + ele.id);
		//console.log(" and this is the x.target(i) element " + x.id);
		
		if (nameH != ele.id && ele.style.display != "none") {
			ele.style.display = "none";
			console.log("... abbiamo cambiato il valore di " + document.querySelector("div[target]"));
		}
	}
}

function value(x){
	// var Aria = x.getAttribute('aria-expanded');
	// console.log("This is our x id: " +x.getAttribute("id"));
	var list = document.querySelectorAll("#name");
	for (var i = 0; i < list.length; i++) {
				list[i].nextElementSibling.style.transition = "all 0s";
			}
	// list = list - x;
	// console.log("this is the x #" +x.id);

	var dis = x.nextElementSibling.style.display;
	var next = x.nextElementSibling.id;
	// console.log(" this is the Next element : #" +next);
	if (dis === "flex") {
		x.nextElementSibling.style.display = "none";
	}
	if (dis === "none") {
		x.nextElementSibling.style.display = "flex";
	}

	// console.log("this is the list lenght " +list.length);
		// if (Aria === "true") {
			// console.log("Aria expanded after click " +Aria);
			for (var i = 0; i < list.length; i++) {
				list[i].nextElementSibling.style.transition = "all 1s";
			}
			// list.nextElementSibling.style.transition = "all 2s";
			// setTimeout(function(){
			for (var i = 0; i < list.length; i++) {
				if (list[i] != x) {
				// console.log("this is the list " +list[i].id);
				// var name = list[i].name;
				list[i].nextElementSibling.style.display = 'none';
				// console.log(" this is the list next element " +list[i].nextElementSibling.id);
				
				
				// console.log("this is the list[i] aria-expanded attribute now " +list[i].getAttribute('aria-expanded'));
				// console.log("... and this is the list[i] display now " +list[i].getAttribute('display'));
				}
			}
}

function click(x){
	console.log('I was clicked');
	// document.querySelector("#navbarSupportedContent").style.width = "400px";
	console.log('I was clicked');
	console.log("... and now I have a differente widht");
	var exp = x.getAttribute("aria-expanded");
	if (exp == true) {
		x.style.margintop = "20px";
	}
}
var modal = document.querySelector(".navbar-nav");
var quad = document.getElementById("content");
var nav = document.getElementById("navbarSupportedContent");
var but = document.querySelector(".navbar-toggler");
window.onclick = function(event){
	console.log("Stiamo clicando in qualsiasi luogo");
	
	if ( event.target == modal || event.target == quad || event.target == document.getElementById("headphoto")) {
		// console.log("target!!");
		// console.log("nav : ", nav.id);
		var exps = but.getAttribute("aria-expanded");
		console.log("il nostro exps ", exps);
		if (exps) {
			exps = "false";
			console.log("succeeded!!");
		}
		but.setAttribute("aria-expanded", exps);
		but.setAttribute("class", "navbar-toggler collapsed");
		nav.setAttribute("class", "navbar-collapse collapse");
		//but.innerHTML = "aria-expanded =" + exps;
		//nav.style.display = "hidden";
	}
	
}

function open(x){
	console.log("Displaying something before...");
    var sh = document.querySelector(".dropdown-content2");
   	
   // sh.style.display = "block";
	console.log("Displaying something after...");
}
})(window);
//})();