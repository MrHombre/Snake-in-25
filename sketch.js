/****
Global Vars
****/
var s;
var scl = 15;

var food;

/****
Set-ups for p5
****/
function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

/****
Picking a location for the food
****/
function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

/****
p5 draw function
****/
function draw() {
  background(51);
  s.update ();
  s.show();

  /****
  If the sanke eaten the food pick a new location
  ****/
  if (s.eat(food)) {
    pickLocation()
  }

  /****
  Color for the food
  ****/
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}


/****
Function for the Keypresses
****/
function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
