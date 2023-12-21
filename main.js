// Animation Intro
// setupcanvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;
// global variables

let player2 = {
  x: 250,
  y: 300,
  w: 25,
  h: 25,
  speed: 5,
  color: "green",
};
let player = {
  x: 350,
  y: 300,
  w: 25,
  h: 25,
  speed: 5,
  color: "blue",
};
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

let wPressed = false;
let aPressed = false;
let sPressed = false;
let dPressed = false;

// drawFunct
window.addEventListener("load", draw);

function draw() {
  if (rightPressed) {
    player.x += player.speed;
  } else if (leftPressed) {
    player.x += -player.speed;
  } else if (upPressed) {
    player.y += -player.speed;
  } else if (downPressed) {
    player.y += player.speed;
  }
  if (dPressed) {
    player2.x += player2.speed;
  } else if (aPressed) {
    player2.x += -player2.speed;
  } else if (wPressed) {
    player2.y += -player2.speed;
  } else if (sPressed) {
    player2.y += player2.speed;
  }
  // Wrap green player around edges of canvas

  if (player2.y > cnv.width) {
    player2.y = 0;
  } else if (player2.x > cnv.width) {
    player2.x = 0;
  } else if (player2.x + 25 < 0) {
    player2.x = 600;
  } else if (player2.y + 25 < 0) {
    player2.y = 600;
  }
  // Stop blue player at edges
  if (player.x < 0) {
    player.x = 0;
  } else if (player.x > 600) {
    player.x = 600;
  }
  if (player.y < 0) {
    player.y = 0;
  } else if (player.y > 600) {
    player.y = 600;
  }
  //   Draw a background
  ctx.fillStyle = "white ";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  // draw a square
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);
  // draw secondsquare
  ctx.fillStyle = player2.color;
  ctx.fillRect(player2.x, player2.y, player2.w, player2.h);
  // loop
  requestAnimationFrame(draw);
}
// event stufff(controlling how square moves)
document.addEventListener("keyup", keyupHandler);
document.addEventListener("keydown", keydownHandler);

document.addEventListener("keyup", keywHandler);
document.addEventListener("keydown", keysHandler);
// press mouse  and square moves

function keysHandler(event) {
  if (event.code === "ArrowLeft") {
    leftPressed = true;
  } else if (event.code === "ArrowRight") {
    rightPressed = true;
  } else if (event.code === "ArrowUp") {
    upPressed = true;
  } else if (event.code === "ArrowDown") {
    downPressed = true;
  }
}
function keywHandler(event) {
  if (event.code === "ArrowLeft") {
    leftPressed = false;
  } else if (event.code === "ArrowRight") {
    rightPressed = false;
  } else if (event.code === "ArrowUp") {
    upPressed = false;
  } else if (event.code === "ArrowDown") {
    downPressed = false;
  }
}
function keyupHandler(e) {
  if (e.code === "KeyA") {
    aPressed = false;
  } else if (e.code === "KeyD") {
    dPressed = false;
  } else if (e.code === "KeyW") {
    wPressed = false;
  } else if (e.code === "KeyS") {
    sPressed = false;
  }
}
function keydownHandler(e) {
  if (e.code === "KeyA") {
    aPressed = true;
  } else if (e.code === "KeyD") {
    dPressed = true;
  } else if (e.code === "KeyW") {
    wPressed = true;
  } else if (e.code === "KeyS") {
    sPressed = true;
  }
}
