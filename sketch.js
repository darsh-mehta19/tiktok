var hr,hrAngle;
var mn,mnAngle;
var sc,scAngle;

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  hr=hour();
  mn=minute();
  sc = second();
}

function draw() {
  background(0);
  angleMode(DEGREES); 
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);
  
  push();
  rotate(scAngle)
  stroke(255,0,0);
  strokeWeight(7)
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle)
  stroke(0,0,255);
  strokeWeight(7)
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle)
  stroke(0,255,0);
  strokeWeight(7)
  line(0,0,100,0);
  pop();
}