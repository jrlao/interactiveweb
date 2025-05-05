let jeepneyFont;
let hoverText = "";
let fontSize = 64;
let textColor = "#c83e34";
let bgColor = "#f5f5dc";


function setup() {
  createCanvas(900, 300);
  textFont('jeepney');
  textSize(fontSize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(bgColor);
  fill(textColor);

  let y = height / 2;

  let spacing = 80;
  let centerX = width / 2;

  let mabuhayEx = "mabuhay!";
  let mabuhayQ = "mabuhay?";
  let oText = "o";

  let exWidth = textWidth(mabuhayEx);
  let oWidth = textWidth(oText);
  let qWidth = textWidth(mabuhayQ);

  let mabuhayExX = centerX - (exWidth / 2.75 + spacing + oWidth / 2);
  let oX = centerX;
  let mabuhayQX = centerX + (qWidth / 2.75 + spacing + oWidth / 2);

  if (isMouseOverText(mabuhayEx, mabuhayExX, y)) {
    hoverText = "hello";
  } else if (isMouseOverText(mabuhayQ, mabuhayQX, y)) {
    hoverText = "the will to live";
  } else {
    hoverText = "";
  }

  text(mabuhayEx, mabuhayExX, y);
  text(oText, oX, y);
  text(mabuhayQ, mabuhayQX, y);

  if (hoverText !== "") {
    textSize(32);
    text(hoverText, width / 2, height - 60);
    textSize(fontSize); 
  }
}

function isMouseOverText(txt, x, y) {
  let w = textWidth(txt);
  let h = fontSize;
  return mouseX > x - w / 2 && mouseX < x + w / 2 &&
         mouseY > y - h / 2 && mouseY < y + h / 2;
}

function mousePressed() {
    window.location.href = "pageone.html"; 
  }
  