var starsonce;
var cookiepan;
var nintendoswitch;


function setup() {
  createCanvas(500, 500);
starsonce =  loadImage("assets/starsonce.jpg");
cookiepan =  loadImage("assets/cookiepan.jpg");
nintendoswitch =  loadImage("assets/nintendoswitch.jpg");
imageMode(CENTER);
}

function draw() {
  background('green');
image(starsonce, width/2, height/2, 100, 100);
image(cookiepan, width/2, height/2 - 120, 100, 100);
image(nintendoswitch, width/2, height/2 + 120, 100, 100);
}
