var bubbles = [];
let url = 'https://docs.google.com/forms/d/e/1FAIpQLSdwyGjxEhEGGhznSpTKyGNTBo-shtrhuCDBjEUQpwvC_3RU8Q/viewform?usp=sf_link';

var cloudy

function setup() {
  cloudy = loadImage("assets/cloudy.jpg");

  let key = '1abFPSAqv4QX-KHQg8ZFeSEKAXbdQW4fBkGKD7om3A7w'; // this is KEY of the URL from the sheet

  //1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);



  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects

function gotData(data) {

  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i]['What is your favorite color of the options below?'], data[i]["What is the best shape?"], data[i]["What is your name?"])); // THESE NEED TO MATCH SPREADSHEET

  }

}


function draw() {
  image(cloudy, 0, 0, 600, 600);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }

}


// my Bubble class
class Bubble {

  constructor(happy, thankful, name) { // only the order of these parameters matters!
    this.happy = happy;
    this.thankful = thankful;
    this.name = name;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 5);

  }


  display() {
    stroke('purple');
    fill(77, 255, 255);
    ellipse(this.pos.x, this.pos.y + 10, 70, 75);
    fill('purple')
    text(this.name + "\n" + this.happy + "\n" + this.thankful, this.pos.x, this.pos.y);

    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }




}
