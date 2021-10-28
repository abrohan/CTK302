let bananas = [];
let maxbananas = 20;
let state = 0;
let timer = 0;
let monkeyPos;

var jungle
var bananabunch
var monkeycharacter

function setup() {
  createCanvas(700, 700);
  jungle = loadImage("assets/jungle.jpg");
  bananabunch = loadImage("assets/bananabunch.png");
  monkeycharacter = loadImage("assets/monkeycharacter.png");



  for (let i = 0; i < maxbananas; i++) {
    bananas.push(new Banana());
  }


  monkeyPos = createVector(width / 2, height - 30);
}

function draw() {
  switch (state) {
    case 0:
      background("green");
      textSize(70);
      text("Monkey Madness", 100, 250);
      textSize(30);
      text("Click anywhere to start the game!", 155, 350);
      textSize(20);
      text("Collect all 20 bananas in 20 seconds to win all of the Bananas!", 90, 420)
      break; //title page

    case 1:
      game();
      timer++;
      if (timer > 20 * 60) {
        state = 3;
        timer = 0;
      }
      break; //monkey game

    case 2:
      background("purple");
      fill("green");
      textSize(80)
      text("YOU WON!", 150, 220);
      fill('brown');
      image(monkeycharacter, 325, 500, 50, 50)

      image(bananabunch, 425, 500, 50, 50)
      break; //collect all bananas

    case 3:
      background("blue");
      fill("white");
      textSize(70)
      text("Too Bad!", 220, 250);
      textSize(30);
      text("Click to return to the title screen", 155, 350);

      image(monkeycharacter, 325, 500, 50, 50)
      break; //not collect bananas
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2:
      resetTheGame();
      state = 0;
      break; //win state

    case 3:
      resetTheGame();
      state = 0;
      break; //lose state
  }
}

function game() {

  image(jungle, 0, 0, 700, 700);
  for (let i = 0; i < bananas.length; i++) {
    bananas[i].display();
    bananas[i].move();

    if (bananas[i].pos.dist(monkeyPos) < 50) {
      bananas.splice(i, 1);
    }
  }

  if (bananas.length == 0) {
    state = 2;
  }


  image(monkeycharacter, monkeyPos.x, monkeyPos.y, 50, 50);
  checkForKeys();
}

function resetTheGame() {
  timer = 0;
  bananas = [];

  for (let i = 0; i < maxbananas; i++) {
    bananas.push(new Banana());
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) monkeyPos.x -= 4;
  if (keyIsDown(RIGHT_ARROW)) monkeyPos.x += 4;
  if (keyIsDown(UP_ARROW)) monkeyPos.y -= 4;
  if (keyIsDown(DOWN_ARROW)) monkeyPos.y += 4;
}


class Banana {

  constructor() {
    this.pos = createVector(random(width), random(height - 400));
    this.vel = createVector(random(9), 0);

    this.size = (90);
  }

  // methods

  display() {

    image(bananabunch, this.pos.x, this.pos.y, 50, 50);

  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
