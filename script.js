var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rand = document.querySelector(".randomize"); //new

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getHexColorValue(){ //new
	var val = Math.floor(Math.random()*255);
	if (0 > val - 16) {
		return "0" + val.toString(16);
	} else {
		return val.toString(16);
	}
}

function randomize() { //new
	var c1r = getHexColorValue();
	var c1g = getHexColorValue();
	var c1b = getHexColorValue();
	var c2r = getHexColorValue();
	var c2g = getHexColorValue();
	var c2b = getHexColorValue();
	color1.value = "#" + c1r + c1g + c1b;
	color2.value = "#" + c2r + c2g + c2b;

	setGradient();
}

setGradient(); //new

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

rand.addEventListener("click", randomize);//new