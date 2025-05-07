let hoverText = "";
let fontSize = 64;  
let translationFontSize = 32;  
let instructionsFontSize = 14;  
let textColor = "#c83e34";
let spacing = 380; 

function setup() {
  createCanvas(1420, 550); 
  textAlign(CENTER, CENTER);  
  textFont('jeepney')
}

function draw() {
  background("#f5f5dc");
  fill(textColor);

  let y = height / 3.75;  

  let text1 = "mabuhay!";
  let text2 = "o";
  let text3 = "mabuhay?";

  let w1 = textWidth(text1);
  let w2 = textWidth(text2);
  let w3 = textWidth(text3);

  let centerX = width / 2;

  let startX1 = centerX - (w2 + spacing + w1) / 2;

  let startX3 = centerX + (w2 + spacing + w3) / 2;

  textSize(fontSize); 
  if (isMouseOverText(startX1, y, w1)) {
    hoverText = "hello";
  }
  text(text1, startX1, y); 

  text(text2, centerX, y);  

  if (isMouseOverText(startX3, y, w3)) {
    hoverText = "the will to live";
  }
  text(text3, startX3, y);  

 
  if (hoverText !== "") {
    textSize(translationFontSize);  
    textAlign(CENTER, CENTER);
    text(hoverText, width / 2, height - 100); 
    textAlign(CENTER, CENTER);  
  }

  textSize(instructionsFontSize);  
  fill(100);
  text("hover to translate", width / 2, height - 40);  

  drawArrow(40, height - 30, -1); 
  drawArrow(width - 40, height - 30, 1);  
}

function mousePressed() {

  if (mouseY > height - 50 && mouseY < height - 10) {
    if (mouseX < 80) {
      console.log(window.location.href = "index.html");
      return;
    } else if (mouseX > width - 80) {
      console.log(window.location.href = "pageone.html");
      return;
    }
  }
}

function drawArrow(x, y, dir) {
  push();
  translate(x, y);
  stroke(100);
  strokeWeight(2);
  fill(100);
  if (dir === -1) {
    triangle(0, -5, -10, 0, 0, 5); 
  } else {
    triangle(0, -5, 10, 0, 0, 5); 
  }
  pop();
}

function isMouseOverText(x, y, w) {
  let h = fontSize;
  return mouseX > x && mouseX < x + w &&
         mouseY > y - h / 2 && mouseY < y + h / 2;
}
