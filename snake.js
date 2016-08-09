function Snake () {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

/* This function is to tell if the snake has reached the food */
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 2) {
      total++;
      return true;
    } else {
      return false;
    }
  }

  /***
  Movement and constarining the snake,
  also keeping track of the total tail
  ***/
  this.update = function () {
    for (var i = 0; i < total-1; i++) {
      tail[i] = tail[i+1];
    }
    tail[total-1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
  }

  this.show = function() {
    fill(255);
    rect(this.x, this.y, scl, scl);

  }
}
