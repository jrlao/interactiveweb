let mainText = "mabuhay!";
let glitchLayers = [];
let glitchTimer = 0;
let glitchInterval = 15;

let y; 
let vy; 
let gravity = 0.2;
let bounce = -10;

function setup() {
  createCanvas(800, 400);
  textFont("jeepney");
  textSize(100);
  textAlign(CENTER, CENTER);
  noStroke();
  generateGlitch();

  y = height / 2;
  vy = 0;
}

function draw() {
  background("#f5f5dc");


  vy += gravity;
  y += vy;


  if (y > height - 50) {
    y = height - 50;
    vy = 0;
  }


  fill("#c83e34");
  text(mainText, width / 2, y);


  for (let g of glitchLayers) {
    fill(g.color);
    text(mainText, width / 2 + g.xOffset, y + g.yOffset);
  }


  glitchTimer++;
  if (glitchTimer > glitchInterval) {
    generateGlitch();
    glitchTimer = 0;
  }
}

function mousePressed() {

  vy = bounce;
}

function generateGlitch() {
  glitchLayers = [];
  let count = int(random(2, 5));
  for (let i = 0; i < count; i++) {
    glitchLayers.push({
      xOffset: random(-5, 5),
      yOffset: random(-5, 5),
      color: color(random(255), random(255), random(255), 80)
    });
  }
}
