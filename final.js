let mainText = "mabuhay!";
let glitchLayers = [];
let glitchTimer = 0;
let glitchInterval = 20;

let y;
let vy;
let gravity = 0.1;
let bounce = -5;

let instructionsFontSize = 20;
let mainFontSize = 100;

function setup() {
  createCanvas(1440, 770);
  textFont('jeepney');
  textAlign(CENTER, CENTER);
  noStroke();
  generateGlitch();

  y = height / 2;
  vy = 0;
}

function draw() {
  background("#f5f5dc");

  // Update falling position
  vy += gravity;
  y += vy;

  if (y > height - 100) {
    y = height - 100;
    vy = 0;
  }

  // Main text
  textSize(mainFontSize);
  fill(80);
  text(mainText, width / 2, y);

  // Glitch layers
  for (let g of glitchLayers) {
    fill(g.gray);
    text(mainText, width / 2 + g.xOffset, y + g.yOffset);
  }

  // Instruction text
  textSize(instructionsFontSize);
  fill(100);
  text("click mabuhay to uplift it or click here to bring mabuhay life again", width / 2, height - 40);

  // Update glitch occasionally
  glitchTimer++;
  if (glitchTimer > glitchInterval) {
    generateGlitch();
    glitchTimer = 0;
  }
}

function mousePressed() {
  // Check if user clicked the instruction text area
  if (mouseY > height - 60 && mouseY < height - 20) {
    window.location.href = "index.html";
  } else {
    vy = bounce;
  }
}

function generateGlitch() {
  glitchLayers = [];
  let count = int(random(2, 4));
  for (let i = 0; i < count; i++) {
    glitchLayers.push({
      xOffset: random(-4, 4),
      yOffset: random(-4, 4),
      gray: color(random(50, 200), 80)
    });
  }
}
