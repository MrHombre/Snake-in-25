/****
Global Vars
****/
var s;
var scl = 15;
var food;
var score;

/****
Set-ups for p5
****/
function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
  "SCORE: " + score, 10, createCanvas.height-10;
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

  /****
  If the sanke eaten the food pick a new location
  ****/
  if (s.eat(food)) {
    pickLocation()
    score++;
  }
  s.death();
  s.update();
  s.show();

  /****
  Color for the food
  ****/
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);

  /*********
  Score
  **********/
  score = 0;
  score.fillStyle = "#fff";
}


/****
Function for the Keypresses
****/
function keyPressed() {
  if (keyCode === UP_ARROW && keyCode !== DOWN_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW && keyCode !== UP_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW && keyCode !== LEFT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW && keyCode !== RIGHT_ARROW) {
    s.dir(-1, 0);
  }
}
