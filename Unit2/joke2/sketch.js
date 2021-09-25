let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {

    case 0:
      background('grey');
      text("Why was the skeleton \n so angry?", 100, height / 2);
      break;

    case 1:
      background('blue');
      text("Because he had a bone to pick", 100, height / 2);
      break;
  }
timer++;
  if (timer > 3 * 60) {
    timer = 0;
    state++;
    if (state > 1) state = 0;
  }
}


function mouseReleased() {
  state++;
  if (state > 1) state = 0;
}
