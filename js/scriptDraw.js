
//(function (global) {

var dc;

function display(x){
	console.log("questo è l'elemento selezionato " +x.id);

	var tran = document.getElementById("quadSel");
	console.log("E questo è il nostro tran : " +tran);
	var sel = document.getElementById("select");
	console.log("E questo è il nostro sel : " +sel);
	

	// tran.style.backgroundImage = x.style.backgroundImage;
	var im = document.getElementById("di3");
	const style = getComputedStyle(x);
	const bg = style.backgroundImage;
	console.log("image : "  + bg);
	
	tran.style.backgroundImage = bg;
	tran.style.opacity = "1";
	sel.style.zIndex = "4";
	sel.style.display = "block";
/*
	x.style.display = "block";
	x.style.zIndex = "4";
	x.style.height = "400px";
	x.style.width = "100%";
	x.style.position = "absolute";
*/	 
	return sel;
}
var modal = document.getElementById("select");
var quad = document.getElementById("quadSel");
window.onclick = function(event){
	console.log("Stiamo clicando in qualsiasi luogo");
	if ( event.target == modal || event.target == quad ) {
		modal.style.display = "none";
	}
}
//var myVar = setInterval(change(), 5000);
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
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}