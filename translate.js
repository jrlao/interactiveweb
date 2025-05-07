let hoverText = "";
let fontSize = 64;  // Size for the main text
let translationFontSize = 32;  // Size for translation text
let instructionsFontSize = 14;  // Size for the "click around the page" text
let textColor = "#c83e34";
let spacing = 380; // Increased spacing between words to 290

function setup() {
  createCanvas(1440, 550); // MacBook Air screen resolution
  textAlign(CENTER, CENTER);  // Align text to the center both horizontally and vertically
  textFont('jeepney')
}

function draw() {
  background("#f5f5dc"); // Beige background
  fill(textColor);

  let y = height / 3.75;  // Vertical center position

  let text1 = "mabuhay!";
  let text2 = "o";
  let text3 = "mabuhay?";

  // Calculate width of each text
  let w1 = textWidth(text1);
  let w2 = textWidth(text2);
  let w3 = textWidth(text3);

  // Calculate the center position for "o" (center of the canvas)
  let centerX = width / 2;

  // Position "mabuhay!" to the left of "o"
  let startX1 = centerX - (w2 + spacing + w1) / 2;

  // Position "mabuhay?" to the right of "o"
  let startX3 = centerX + (w2 + spacing + w3) / 2;

  // Draw "mabuhay!" with hover effect
  textSize(fontSize); // Set font size for main text
  if (isMouseOverText(startX1, y, w1)) {
    hoverText = "hello";
  }
  text(text1, startX1, y);  // Position of "mabuhay!"

  // Draw "o" with no hover effect (just display it)
  text(text2, centerX, y);  // Position of "o"

  // Draw "mabuhay?" with hover effect
  if (isMouseOverText(startX3, y, w3)) {
    hoverText = "the will to live";
  }
  text(text3, startX3, y);  // Position of "mabuhay?"

  // Hover translations below the words
  if (hoverText !== "") {
    textSize(translationFontSize);  // Set font size for translation text
    textAlign(CENTER, CENTER);
    text(hoverText, width / 2, height - 100); // Place the translation text below
    textAlign(CENTER, CENTER);  // Reset text alignment to center
  }

  // Instructions at the bottom, centered with smaller font
  textSize(instructionsFontSize);  // Set font size for instructions
  fill(100);
  text("hover to translate", width / 2, height - 40);  // Centered

  // Draw arrows for page navigation
  drawArrow(40, height - 30, -1);  // Left arrow
  drawArrow(width - 40, height - 30, 1);  // Right arrow
}

function mousePressed() {
  // Check for arrow clicks
  if (mouseY > height - 50 && mouseY < height - 10) {
    if (mouseX < 80) {
      console.log(window.location.href = "index.html");
      // Add navigation logic here (e.g., window.location.href = "previous.html")
      return;
    } else if (mouseX > width - 80) {
      console.log(window.location.href = "pageone.html");
      // Add navigation logic here (e.g., window.location.href = "next.html")
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
    triangle(0, -5, -10, 0, 0, 5); // Left arrow
  } else {
    triangle(0, -5, 10, 0, 0, 5); // Right arrow
  }
  pop();
}

function isMouseOverText(x, y, w) {
  let h = fontSize;
  return mouseX > x && mouseX < x + w &&
         mouseY > y - h / 2 && mouseY < y + h / 2;
}
