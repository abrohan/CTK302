let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {
  	case 0:
  	background('white');
  	text("case 0", 250, 250);
  	break;
   	case 1:
  	background('grey');
  	text("case 1", 250, 250);
  	break;
  case 2:
  	background('pink');
  	text("case 2", 250, 250);
  	break;
  }

fill('purple')
rect(100, 100, 100, 100) ;

}

function mouseReleased() {
  if((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
  state++ ;
  if (state > 2) {
    state = 0 ;
  }
}
}
