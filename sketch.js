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
  createCanvas(1420, 779);
  textAlign(CENTER, CENTER);
  textFont('jeepney');
}

function draw() {
  background('#F5F5DC'); 

 
  fill('#C83E34');
  textSize(64);
  text(mainText, width / 2, height / 2);

  for (let wordObj of wordObjects) {
    fill(wordObj.color);
    textSize(20);
    text(wordObj.text, wordObj.x, wordObj.y);
  }

  fill(100);
  textSize(14);
  text("click around the page", width / 2, height - 40);

  drawArrow(40, height - 30, -1);

  drawArrow(width - 40, height - 30, 1);
}

function mousePressed() {
  if (mouseY > height - 50 && mouseY < height - 10) {
    if (mouseX < 80) {
      console.log(window.location.href = "pageone.html");
      return;
    } else if (mouseX > width - 80) {
      console.log(window.location.href = "final.html");
      return;
    }
  }

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
    triangle(0, -5, -10, 0, 0, 5); 
  } else {
    triangle(0, -5, 10, 0, 0, 5); 
  }
  pop();
}
