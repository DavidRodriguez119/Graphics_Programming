//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
// Adapted from https://github.com/nature-of-code/
// released under MIT license
///////////////////////////////////////////////////
function setup() {
  createCanvas(900, 600);
}
///////////////////////////////////////////////////
function draw() {
  background(125);
  strokeWeight(4);

  mouse = new createVector(mouseX, mouseY);
  center = new createVector(width/2, height/2);
  translate(center.x, center.y);
  
  mouse.sub(center)
  line(0, 0, mouse.x, mouse.y);
};
