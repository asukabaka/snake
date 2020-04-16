var s;
var scl = 80;
let state = start;

function setup() {
  createCanvas(1000, 1000);
  s = new Snake();
  frameRate(7);
  food = createVector(random(width), random(height));
  pickLocation();
  textAlign(CENTER);
  textSize(20);
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}

function draw() {

switch (state) {

  case ('start'):
    start();
  break;

  case ('gamePlay'):
    gamePlay();
  break;
}

}

function start(){
  background('51');
  text('click to adopt doggos', w/2, h/2);
}

function gamePlay(){
  background('rgba(45,225,45, 0.25)');
  s.update();
  s.show();
  s.death();

if (s.eat(food)) {
    pickLocation();
  }

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0,1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1,0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1,0);
  }
}
