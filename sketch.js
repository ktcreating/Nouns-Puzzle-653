let bx;
let by;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let pressedg = 0;

function setup() {
 let canvas = createCanvas(600, 600);
 canvas.parent('sketch-container');
  bx = 0;
  by = 0;
   bg = loadImage('gg.png');
   glass = loadImage('glass.png');
   code = loadImage('code.png');
  
  
  input = createInput();
  input.position(0, 600);

  button = createButton('submit');
  button.position(input.x + input.width, 600);
  button.mousePressed(greet);

  greeting = createElement('h2');
  textAlign(CENTER);
  textSize(50)

function greet() {
  const password = input.value(); 
   if (password == 6843) {
      greeting.html('Congratulations! Puzzle #653 Solved');
      } else {
      greeting.html('Not Correct')
      textSize(50)}
  
    input.value('');
 }  
}

function draw() {
  background(bg);

  if (
    mouseX > bx + 190 &&
    mouseX < bx + 430 &&
    mouseY > by + 206 &&
    mouseY < by + 320
  ) {
    overBox = true;
    if (!locked) {}
  } else {
    overBox = false;
  }
 
  // Draw the glass
  image(glass, bx, by); 
  
if (pressedg == 1) {
     image(code,0,0,600,600)
    } else {
    }  
 }

function mousePressed() {
  if (overBox) {
    locked = true;
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;
  bx = 0;
  by = 0
}


function keyPressed(){
  if (key == 'g'){
    pressedg = 1}  
}
