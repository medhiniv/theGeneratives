let t;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  t = 45;
  stroke(0);
  i=2;
  // drawBranch(100);
  
}

function draw() {
  background(220);
  // g=map(mouseX,0,width,225,0);
  // stroke(0,g,0);
  t=map(mouseX,0,width,1,45);
  
  // stroke(0,255-i,0);
  translate(width / 2, height);// to allow for a 0,0 command in line
  drawBranch(100);
  
}

function drawBranch(s) {
  strokeWeight(i);
  
  line(0, 0, 0, -s);
  
  translate(0, -s);
  push();
  rotate(-t);

  if (s > 10) {
    
    drawBranch(s * 0.75);
  }
  else{
    noStroke();
    fill("pink");
    circle(0,0,10);
  }
  pop();
   push();
  rotate(t);

  if (s > 10) {
    // fill(0,255-i,0);
    drawBranch(s * 0.75);
  }
  pop();
  
  i--;
  
}
