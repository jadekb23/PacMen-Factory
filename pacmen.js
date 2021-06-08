
const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); 
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = 'images/PacMan1.png';
  newimg.width = 100;

  // Set position here
  newimg.style.top = position.y;
  newimg.style.left = position.x;

  // Add new Child image to game
  game.appendChild(newimg);

  // Return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  // Detect collision with all walls and make pacman bounce
  let xPosition = item.position.x;
  let yPosition = item.position.y;

  if (xPosition <= 0 || xPosition >= window.innerWidth - item.newimg.width){
    item.velocity.x = item.velocity.x * -1; //to reverse the direction of movement
  }

  if (yPosition <= 0 || yPosition >= window.innerHeight - item.newimg.height){
    item.velocity.y = item.velocity.y * -1; //to reverse the direction of movement
  }
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
