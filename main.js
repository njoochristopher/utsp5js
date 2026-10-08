const img = new Image();

img.src = 'DrivingWhale.jpg';

ctx.drawImage(image, x, y, width, height);

const canvas = document.getElementById('myCanvas');
 
if (!canvas.getContext) {
    alert("Canvas is not supported in your browser.");
    throw new Error("Canvas not supported");
}
 
const ctx = canvas.getContext('2d');

function setup(){
  createCanvas(1600, 800);
  angleMode(DEGREES);
}

function draw() {
  img.resize(1600, 800);
  drawImage(img, 0, 0);
  
  push();
  translate(1000, 700);
  scale(1.5);
  rotate(frameCount * 0.5);
  square(100, 100, 100);
  pop();

  push();
  translate(800, 400);
  rotate(frameCount * 1.5);
  scale(1.0);
  circle(0, 0, 100);
  pop();

  push();
  translate(700, 500);
  rotate(frameCount * 0.5);
  scale(1.0);
  rect(50, 50, 150, 150);
  pop();
  
  push();
  translate(300, 400);
  rotate(frameCount * 1.0);
  scale(1.0);
  triangle(50, 50, 200, 50, 150, 200);
  pop();

  push();
  translate(200, 350);
  rotate(frameCount * 0.5);
  scale(1.0);
  ellipse(200, 200, 100, 100);
  pop();

  push();
  translate(500, 250);
  rotate(frameCount * 0.5);
  scale(1.0);
  stroke(0, 0, 0);
  strokeWeight(8);
  point(200, 200);
  pop();

  push();
  translate(650, 400);
  rotate(frameCount * 1.0);
  scale(1.0);
  arc(200, 200, 100, 100, 0, 100);
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(frameCount * 0.5);
  stroke(0, 0, 0);
  strokeWeight(4);
  line(-50, 0, 50, 0);
  pop();
}
