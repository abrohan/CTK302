let state = 0;
let x = 0;
let vel = 0;
let timer = 0;
var  mousetrap;
var rat;

function setup() {
  createCanvas(700, 500);
  mousetrap =  loadImage("assets/mousetrap.png");
  rat = loadImage("assets/rat.png");
}

function draw() {

  switch (state) {
    case 0:
      //setting
      background(128, 255, 170);
      fill(255, 85, 0);
      rect(0, 280, 700, 220);

      //title text
      fill(102, 51, 0);
      rect(125, 0, 450, 80);
      push();
      textSize(70);
      fill('blue')
      text("Catch the Rat", 135, 55);
      pop();

      //start button
      fill(26, 255, 25);
      rect(275, 300, 150, 100);
      fill(0);
      push();
      textSize(40);
      text("Start", 305, 360);
      pop();
      vel = 0;

      //rules
      fill(0);
      textSize(20);
      text("Welcome to Catch the Rat!", 15, 300);
      textSize(12);
      text("Press start to play", 75, 330)
      textSize(20);
      text("Rules", 530, 300)
      textSize(12);
      text("1.Use the big green button to navigate through the game.", 450, 330, 270, 40);
      text("2.Once Start is pressed the rat will start to run across the screen.", 450, 360, 260, 40);
      text("3.Use the Catch button to drop the cage on top of the rat.", 450, 390, 260, 40);
      text("4.You have 15 seconds to make your move.", 450, 420, 260, 40);
      text("5.If you mess up, you can go back to the start and have another go.", 450, 435, 260, 40);

      break;

    case 1:
      //setting
      background(128, 255, 170);
      fill(255, 85, 0);
      rect(0, 280, 700, 220);

      //cage
       image(mousetrap, 275, 0, 150, 80);


      //start button
      fill(26, 255, 25);
      rect(275, 300, 150, 100);
      fill(0);
      push();
      textSize(40);
      text("Catch", 295, 360);
      pop();
      vel = 50;

      //timer
      timer++;
      if (timer > 15 * 60) {
        timer = 0;
        state++;
        if (state > 2) {
          state = 0;
        }
      }

      //rules
      textSize(20);
      text("Rules", 530, 300)
      textSize(12);
      text("1.Use the big green button to navigate through the game.", 450, 330, 270, 40);
      text("2.Once Start is pressed the rat will start to run across the screen.", 450, 360, 260, 40);
      text("3.Use the Catch button to drop the cage on top of the rat.", 450, 390, 260, 40);
      text("4.You have 15 seconds to make your move.", 450, 420, 260, 40);
      text("5.If you mess up, you can go back to the start and have another go.", 450, 435, 260, 40);
      break;

    case 2:
      //setting
      background('red');
      fill(255, 85, 0);
      rect(0, 280, 700, 220);

      //cage
      image(mousetrap, 275, 200, 150, 80);

      //start button
      fill(26, 255, 25);
      rect(275, 300, 150, 100);
      fill(0);
      push();
      textSize(40);
      text("Menu", 300, 360);
      pop();
      vel = 0;

      //rules
      textSize(20);
      text("Rules", 530, 300)
      textSize(12);
      text("1.Use the big green button to navigate through the game.", 450, 330, 270, 40);
      text("2.Once Start is pressed the rat will start to run across the screen.", 450, 360, 260, 40);
      text("3.Use the Catch button to drop the cage on top of the rat.", 450, 390, 260, 40);
      text("4.You have 15 seconds to make your move.", 450, 420, 260, 40);
      text("5.If you mess up, you can go back to the start and have another go.", 450, 435, 260, 40);
      break;

  }



  //object you need to catch
  image(rat, x, 230, 100, 50);
  x = x + vel;
  if (x > width) {
    x = 0;
  }
}

//button function
function mouseReleased() {
  if ((mouseX > 275) && (mouseX < 425) && (mouseY > 300) && (mouseY < 400)) {
    state++;
    if (state > 2) {
      state = 0;
    }
  }
}
