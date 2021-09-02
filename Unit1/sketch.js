var font1, font2;

function setup() {
  createCanvas(500, 500);
  font1 = loadFont("assets/BubbleShine.ttf");
  font2 = loadFont("assets/WinterInsight.ttf");
}

function draw() {
  background("yellow") ;
textFont(font1);
textSize(78)
text("hello world", 100, 100);
textFont(font2);
textSize(58);
text("This is my font test", 90, 200);
}
