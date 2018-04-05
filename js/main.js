// Select color input
var colorPicker = document.getElementById("colorPicker");

// Select size input
var inputHeight = document.getElementById("inputHeight");
var inputWidth = document.getElementById("inputWidth");

//Select the table element
var pixelCanvas = document.getElementById("pixelCanvas");

//Select the buttons
var submitButton = document.getElementById("submitButton");
var clearButton = document.getElementById("clearButton");


function makeGrid() {	
	
	//Function that creates the grid based on the user's input numbers.
	
	function buildGrid() {
		event.preventDefault();
		var grid = "";
		for (var height = 1; height <= inputHeight.value; height += 1) {
			grid += "<tr>";
			for (var length = 1; length <= inputWidth.value; length += 1) {
				grid += "<td></td>";
			}
			grid += "</tr>";
		}
		return grid;
	}
	
	//Function that gets the created grid to appear on the screen.
	
	var buildGridEvent = function() {
		event.preventDefault();
		pixelCanvas.innerHTML = buildGrid();
	};
	
	submitButton.addEventListener("click", buildGridEvent);
	
	//Clears the colored squares from the grid and allows the user to start again with a blank canvas.
	
	clearButton.addEventListener("click", buildGridEvent);

	//function that utilizes the user's selected color to change the color of the grid squares upon being clicked.
	
	var clickGridEvent = function() {
		if (event.target.tagName === "TD") {
			event.target.style.backgroundColor = colorPicker.value;
		}
	};
	
	pixelCanvas.addEventListener("click", clickGridEvent);
}

makeGrid();

//Code to have a dbl click on the boxes to change color back

//Starting over and clearing the entire grid
/*

NEXT STEPS: ADDING ON!

1) Being able to click on already colored squares and change them back to white on a second click

*/
	