var css = document.querySelector("h3");
var initialCol = document.querySelector("h2");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var newColorDipsplay = document.querySelector("div");


//Set the values of the colors from the inputs
function changInpColor() {
	color1.value = "#ff0000";

	color2.value = "#ffff00";
}


// Get the initial css value and print it to the initialCol which is the h2
function onloadInitial() {
	var styles = getComputedStyle(body);

	initialCol.textContent = "INITIAL CSS BACKGROUND COLOR: " +
		styles.backgroundImage;
}


// Generating Random Colors and adding them to the Dom Inside a Div
function hexRandomNumber() {
	var sugNumber1 = '#' + Math.floor(Math.random() * 16777215).toString(16);

	var sugNumber2 = '#' + Math.floor(Math.random() * 16777215).toString(16);

	newColorDipsplay.innerHTML = `<h2>YOU CAN TRY THESE COLORS TOO:</h2>
			<h3>Add them to your CSS</h3>
			<input 
			class="color1" type="color" name="color1"  
			value="${sugNumber1}">
			<input 
			class="color2" type="color" name="color2" value="${sugNumber2}";
			<br>
			<h3>${body.style.backgroundImage + ";"}</h3>`
}


// Changing the background color and add text with the values to the h3 element
function bgChange() {
	body.style.background = "linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";

	hexRandomNumber();
}

// listen to input and fire of the function
color1.addEventListener("input", bgChange);

color2.addEventListener("input", bgChange);

onloadInitial();
changInpColor();