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

// Get random rgb value
function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}

// Generating Random Colors and adding them to the Dom Inside a Div
function hexRandomNumber() {
	var hexNumber1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
	var hexNumber2 = '#' + Math.floor(Math.random() * 16777215).toString(16);

	// Get random hex to rgb value
	function hexToRgb(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

	// Creating the rgb display
	var sugNumber1 = `(${hexToRgb(hexNumber1).r}, ${hexToRgb(hexNumber1).g}, ${hexToRgb(hexNumber1).b})`;
	var sugNumber2 = `(${hexToRgb(hexNumber2).r}, ${hexToRgb(hexNumber2).g}, ${hexToRgb(hexNumber2).b}))` + ";";
	
	// Displaying the new colors
	newColorDipsplay.innerHTML = `<h2>YOU CAN TRY THESE COLORS TOO:</h2>
			<h3>Add them to your CSS</h3>
			<input 
			class="color1" type="color" name="color1" 
			value="${hexNumber1}">
			<input 
			class="color2" type="color" name="color2" value="${hexNumber2}";
			<br>
			<h3>linear-gradient(to right, rgb${sugNumber1}, rgb${sugNumber2}</h3>`;
}

// Changing the background color and add text with the values to the h3 element
function bgChange() {
	body.style.background = "linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";

	// calling the 
	hexRandomNumber();
}

// listen to input and fire of the function
color1.addEventListener("input", bgChange);

color2.addEventListener("input", bgChange);

onloadInitial();
changInpColor();