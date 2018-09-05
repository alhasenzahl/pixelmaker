// Select color input
const colorPicker = document.getElementById("colorPicker");

// Select size input
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");

//Select the table element
const pixelCanvas = document.getElementById("pixelCanvas");

//Select the buttons
const submitButton = document.getElementById("submitButton");
const clearButton = document.getElementById("clearButton");


function makeGrid() {

	//Function that creates the grid based on the user's input numbers.

	function buildGrid() {
		event.preventDefault();
		let grid = "";
		for (let height = 1; height <= inputHeight.value; height += 1) {
			grid += "<tr>";
			for (let length = 1; length <= inputWidth.value; length += 1) {
				grid += "<td></td>";
			}
			grid += "</tr>";
		}
		return grid;
	}

	//Function that gets the created grid to appear on the screen.

	const buildGridEvent = function() {
		event.preventDefault();
		pixelCanvas.innerHTML = buildGrid();
	};

	submitButton.addEventListener("click", buildGridEvent);

	//Clears the colored squares from the grid and allows the user to start again with a blank canvas.

	clearButton.addEventListener("click", buildGridEvent);

	//function that utilizes the user's selected color to change the color of the grid squares upon being clicked.

	const clickGridEvent = function() {
		if (event.target.tagName === "TD") {
			event.target.style.backgroundColor = colorPicker.value;
		}
	};

    pixelCanvas.addEventListener("click", clickGridEvent);
}

makeGrid();
