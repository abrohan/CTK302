let song1;


function preload() {
  song1 = loadSound("assets/benhigher.mp3");
}

function setup() {
  createCanvas(500, 500);
  song1.play();
}

function draw() {
  createCanvas(500, 500);
  background("blue");

}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.loop();
  }
}

function touchStarted() {
  getAudioContext().resume();
}
