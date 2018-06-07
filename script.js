var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var color1random=document.getElementById("color1random");
var color2random=document.getElementById("color2random");


body.style.background="linear-gradient(to right, "+color1.value+" , "+color2.value+")";
css.textContent = body.style.background+";";

function setGradient() {
	body.style.background="linear-gradient(to right, "+color1.value+" , "+color2.value+")";
	css.textContent = body.style.background+";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

color1random.addEventListener("click", function(){
	var randomColor1 = '#'+Math.floor(Math.random()*16777215).toString(16);
color1.value=randomColor1;
  setGradient();
})

color2random.addEventListener("click", function(){
	var randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
color2.value=randomColor2;
   setGradient();
})



