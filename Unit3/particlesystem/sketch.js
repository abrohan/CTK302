let cars = [];

var firepit

function setup() {
  createCanvas(500, 500);
    firepit = loadImage("assets/firepit.jpg");
  noStroke();

  //for (let i = 0; i < 20; i++) {
  //  cars.push(new Car());
  //}
}

function draw() {
  image(firepit, 0, 0, 500, 500);

  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].a <=0) {
      cars.splice(i, 1) ;
    }

  }
}

class Car {
  constructor() {
    // attributes
    this.pos = createVector(260, 300);
    this.vel = createVector(random(-2, 2), random(-5, 0));
    this.a = random(200);
     this.r = random(255);
     this.g = random(0);
     this.b = random(0);
    this.size = random(15, 25);

  }

  // methods
  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
  move() {
    this.pos.add(this.vel);
     this.a -= 1;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    //if (this.pos.y < 0) this.pos.y = height;
  }
}
