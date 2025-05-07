let mainText = "mabuhay or mabuhay?";
let words = [
  "nahihirapan ka na ba?",
  "are you having a hard time?",
  "hello!",
  "the will to live?"
];

let wordObjects = [];
let centerArea = 200;

function setup() {
  createCanvas(1440, 779);
  textAlign(CENTER, CENTER);
  textFont('jeepney');
}

function draw() {
  background('#F5F5DC'); // beige

  // Draw center text
  fill('#C83E34');
  textSize(64);
  text(mainText, width / 2, height / 2);

  // Draw existing words
  for (let wordObj of wordObjects) {
    fill(wordObj.color);
    textSize(20);
    text(wordObj.text, wordObj.x, wordObj.y);
  }

  // Instructions at bottom
  fill(100);
  textSize(14);
  text("click around the page", width / 2, height - 40);

  // Left arrow
  drawArrow(40, height - 30, -1);

  // Right arrow
  drawArrow(width - 40, height - 30, 1);
}

function mousePressed() {
  // Check for arrow click
  if (mouseY > height - 50 && mouseY < height - 10) {
    if (mouseX < 80) {
      console.log(window.location.href = "pageone.html");
      // Add navigation logic here
      return;
    } else if (mouseX > width - 80) {
      console.log(window.location.href = "final.html");
      // Add navigation logic here
      return;
    }
  }

  // Avoid placing near center
  if (dist(mouseX, mouseY, width / 2, height / 2) < centerArea) return;

  let randomWord = random(words);
  let randomColor = random(['#8EB9E3', '#DAA520']);

  wordObjects.push({
    text: randomWord,
    x: mouseX,
    y: mouseY,
    color: randomColor
  });
}

function drawArrow(x, y, dir) {
  push();
  translate(x, y);
  stroke(100);
  strokeWeight(2);
  fill(100);
  if (dir === -1) {
    triangle(0, -5, -10, 0, 0, 5); // left arrow
  } else {
    triangle(0, -5, 10, 0, 0, 5); // right arrow
  }
  pop();
}
