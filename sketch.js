let bgImage; 
let hoverText = "";
let fontSize = 64;
let textColor = "#c83e34";
let messages = [];
let hover = false;

function preload() {
  bgImage = loadImage("img/manila.jpg"); 
}

function setup() {
  createCanvas(1240, 680);
  textAlign(CENTER, CENTER);
  textFont('jeepney');

  messages.push({ x: width / 2, y: height / 2, size: 64, color: '#c83e34' });


  let attempts = 0;
  let desired = 50; 
  while (messages.length < desired + 1 && attempts < 5000) {
    let x = random(150, width - 150);
    let y = random(150, height - 150);
    let size = 24;
    let ok = true;

    for (let m of messages) {
      let d = dist(x, y, m.x, m.y);
      if (d < (m.size / 2 + size / 2 + 200)) { 
        ok = false;
        break;
      }
    }

    if (ok) {
      messages.push({
        x: x,
        y: y,
        size: size,
        color: random(['#DAA520', '#8EB9E3'])
      });
    }

    attempts++;
  }
}

function draw() {
  function draw() {
    background(bgImage); 
    fill(textColor);

    drawArrows();
  }
  hover = false;

  for (let m of messages) {
    fill(m.color);
    textSize(m.size);
    text("mabuhay?", m.x, m.y);

    if (dist(mouseX, mouseY, m.x, m.y) < m.size) {
      hover = true;
    }
  }

  function setup() {
    createCanvas(800, 400);
    textFont(jeepneyFont);
    textSize(fontSize);
    textAlign(LEFT, CENTER);
    bgImage.resize(800, 400); 
  }
  
  if (hover) {
    fill(50);
    textSize(18);
    text("nahihirapan ka na ba?\nare you having a hard time?", width / 2, height - 60);
  }
}

function mousePressed() {
  window.location.href = "final.html"; 
}
