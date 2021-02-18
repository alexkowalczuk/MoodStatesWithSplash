/***********************************************************************************
	SimpleStateMachine - TEMPLATE
	by Scott Kildall
	Template:
	(1) Add your own PNG files in the assets folder. Make sure they match the names ***exactly*** of the existing PNGs.
	(2) Add custom drawing code to drawSplash(), drawOne(), drawTwo(), drawThree(), drawFour(), drawFive()
	(3) You can add your own interfaces - keys, mouse events, etc in the Interfaces section
	Also start your localhost before running this, otherwise no PNGs will display
------------------------------------------------------------------------------------
	The way it works — you don't need to know this for the template use
	* array of images gets loaded at startup
	* drawFunction is a VARIABLE that points to a function varible name
	* drawOne(), drawTwo(), etc. are set to be functions.
	* the the keys 1-5 will change the drawFunction variable
  * starts with drawSplash and waits for a mousePressed event
  * adds a key, 's' to return to the splash screen
------------------------------------------------------------------------------------
	Notes:
	- a more advanced state machine with use array-indexing variables for each of
		images the draw functions, but this is just for illustrative purposes
	- even more advanced will be to put the draw functions into an array, would
		be helpful for randomizing, go to the next function, etc
	- next step after that would be to put interfaces into an array that maps to
		the functions
***********************************************************************************/

// Array of images
var images = [];

// variables used for instructions 
var midX; 
var startY;
var lineHeight = 48;

// variable that is a function 
var drawFunction;

// Array of colors 
var colors = []; 

// array of functions
var functions = [];

// array of inst
var instructions = [];

// offset from bottom of screen
var gTextOffset = 20;

// load all images into an array
function preload() {
  images[0] = loadImage('assets/one.png');
  images[1] = loadImage('assets/two.png');
  images[2] = loadImage('assets/three.png');
  images[3] = loadImage('assets/four.png');
  images[4] = loadImage('assets/five.png');
  images[5] = loadImage('assets/splash.png');
}

function loadFunctionsArray() {
  functions[0] = drawOne; 
  functions[1] = drawTwo; 
  functions[2] = drawThree; 
  functions[3] = drawFour; 
  functions[4] = drawFive; 
  functions[5] = drawSplash; 
  functions[6] = drawInstructions; 
}

function loadInstructionsArray() {
  instructions[0] = "Press '1' for HAPPY :)"; 
  instructions[1] = "Press '2' for IN LOVE *.*"; 
  instructions[2] = "Press '3' for ANGRY :|"; 
  instructions[3] = "Press '4' for HOME SICK :(";
  instructions[4] = "Press '5' for LOST :/ "
  instructions[5] = "Press 'S' for a splash w Giraffe"; 
  instructions[6] = "On the Giraffe screen click to get the instructions screen or press I (instructions)"; 
}

function loadColors() {
  colors[0] = "#FFFF00";
  colors[1] = "#008000";
  colors[2] = "#FFFF00";
  colors[3] = "#008000";
  colors[4] = "#FFFF00";
  colors[5] = "#008000";
  colors[6] = "#FFFF00";
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  loadFunctionsArray(); 
  loadInstructionsArray(); 
  loadColors();

  midX = width/2;
  startY = 60;

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // set to one for startup
  drawFunction = functions[5];
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(192);

  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawOne() will draw the image at index 0 from the array
drawOne = function() {
   image(images[0],width/2, height/2);

   fill(colors[0]);
   text("Happy Me", width/2, height - gTextOffset);
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
   image(images[1],width/2, height/2);

   fill(colors[1]);
   text("In Love Me", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
drawThree = function() {
   image(images[2],width/2, height/2);

   fill(colors[2]);
   text("Angry Me", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawFour = function() {
   image(images[3],width/2, height/2);

   fill(colors[3]);
   text("Home Sick Me", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 4 from the array
drawFive = function() {
   image(images[4],width/2, height/2);

   fill(colors[4]);
   text("Lost Me", width/2, height - gTextOffset);
}

//-- drawSplash() will draw the image at index 4 from the array
drawSplash = function() {
   image(images[5],width/2, height/2);
}

drawInstructions = function() {
  for( let i = 0; i < instructions.length; i++ ) {
    fill(colors[i]); 
    text(instructions[i], midX, startY + (i * lineHeight) )
  }
}


//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( key === '1' ) {
  	drawFunction = functions[0];
  }
  else if( key === '2' ) {
  	drawFunction = functions[1];
  }
  else if( key === '3' ) {
  	drawFunction = functions[2];
  }
  else if( key === '4' ) {
  	drawFunction = functions[3];
  }
  else if( key === '5' ) {
  	drawFunction = functions[4];
  }
  else if( key === 's' ) {
    drawFunction = functions[5];
  }
  else if( key === 'i' ) {
    drawFunction = functions[6];
  }
}

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction === drawSplash ) {
    drawFunction = functions[6];
  }
}