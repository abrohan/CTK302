function setup() {
  createCanvas(720, 400);
}

function draw() {


  background(0, 255, 255);
  noStroke();

  if (mouseIsPressed) {
    background(0, 115, 230);

  } else {
    background(0, 255, 255);
  }

  //left part of left cloud
  fill(255, 255, 255);
  circle(40, 80, 50);

  //right part of left cloud
  fill(255, 255, 255);
   circle(130, 80, 50);

  //middle part of left cloud
  fill(255, 255, 255);
  circle(85, 60, 75);

  //even the left cloud
  fill(255, 255, 255);
  rect(50, 90, 80, 14);

  //left part of right cloud
  fill(255, 255, 255);
  circle(490, 80, 50);

  //right part of right cloud
  fill(255, 255, 255);
   circle(580, 80, 50);

  //middle part of right cloud
  fill(255, 255, 255);
  circle(535, 60, 75);

  //even the right cloud
  fill(255, 255, 255);
  rect(500, 90, 80, 14);

  //front trunk
  fill(77, 25, 0);
  rect(240, 0, 250, 360);

  //left trunk
  fill(77, 25, 0);
  rect(60, 330, 35, 30);

  //left leaves
   if (mouseIsPressed) {
   fill(0, 115, 230);
   triangle(75, 200, 45, 330, 110, 330);
  } else {
    fill(85, 255, 0);
  triangle(75, 200, 45, 330, 110, 330);
  }

  //right trunk
  fill(77, 25, 0);
  rect(580, 300, 75, 60);

  //right leaves
  if (mouseIsPressed) {
   fill(0, 115, 230);
  triangle(610, 60, 550, 300, 685, 300);
  } else {
  fill(85, 255, 0);
  triangle(610, 60, 550, 300, 685, 300);
  }

  //body
  fill(26, 0, 0);
  rect(320, 200, 100, 85);

  //upper head
  fill(26, 0, 0);
  circle(370, 200, 100);

   //right horn
  fill(26, 0, 0);
  rect(390, 110, 20, 80);

   //left horn
  fill(26, 0, 0);
  rect(330, 110, 20, 80);

  //bottom body
  fill(26, 0, 0);
  circle(370, 285, 100);

  //horn
  fill(26, 0, 0);
  rect(360, 70, 20, 90);

  //left upper leg
  fill(26, 0, 0);
  rect(280, 190, 50, 20);

  // right upper leg
   fill(26, 0, 0);
  rect(410, 190, 50, 20);

  //left middle leg
  fill(26, 0, 0);
  rect(280, 235, 50, 20);

  // right middle leg
   fill(26, 0, 0);
  rect(410, 235, 50, 20);

   //left back leg
  fill(26, 0, 0);
  rect(280, 290, 50, 20);

  // right back leg
   fill(26, 0, 0);
  rect(410, 290, 50, 20);

  //left white eye
  fill(255, 255, 255);
  circle(330, 180, 30);

  //left black eye
  if (mouseIsPressed) {
   fill(255, 0, 0);
  circle(330, 170, 10);
  } else {
   fill(0, 0, 0);
  circle(330, 170, 10);
  }

  //right white eye
  fill(255, 255, 255);
  circle(410, 180, 30);

  //right black eye
  if (mouseIsPressed) {
   fill(255, 0, 0);
  circle(410, 170, 10);
  } else {
   fill(0, 0, 0);
  circle(410, 170, 10);
  }

  //eyebrows
  if (mouseIsPressed) {
    fill(51, 34, 0);
  rect(305, 180, 50, 20);

    fill(51, 34, 0);
    rect(385, 180, 50, 20);
  }

  //ground
   fill(0, 179, 0);
   rect(0, 360, 720, 45);


 fill(0) ;
  text("Henry the beetle like to sit on a tree. He doesn't do any harm, unless you damage his forest, then he gets very angry.",10, 10, 150, 80)
}
