//Move the catcher with the left and right arrow keys to catch the falling objects. 

/* VARIABLES */
let catcher, fallingObject;
let canvasHeight = 400;
let canvasWidth = 400;
let score = 0; 

/* PRELOAD LOADS FILES */
function preload(){
  
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(canvasWidth,canvasHeight);
  
  //Create catcher 
  catcher = new Sprite(200,380,100,20);
  catcher.color = color(95,158,160);
  catcher.collider = 'kinematic';
  
  //Create falling object
  fallingObject = new Sprite(100,0,10);
  fallingObject.color = color(0,128,128);
  fallingObject.vel.y = 2; 
}

/* DRAW LOOP REPEATS */
function draw() {
  background(224,224,224);

  // Draw directions to screen
  // put up the score before any of the values are changed ( so at the start of
  // this draw loop ) 
  fill(0);
  textSize(12);
  text("Move the \ncatcher with the \nleft and right \narrow keys to \ncatch the falling \nobjects.", canvasWidth-100, 20);
  text("Score : " + score, 10, 10);
  
  
  //If fallingObject reaches bottom, move back to random position at top
  if(fallingObject.y >= canvasHeight){
    fallingObject.y = 0;
    fallingObject.x = random(0, canvasWidth);
    fallingObject.vel.y = random(1, 5);
    //mild challenge part : the score goes down 1 point if the falling object 
    // reaches the bottom and has to be reset 
    score = score -1; 
    
  }

  //Kb catcher : i cannot seem to make this work for some reason T^T 
  if(kb.pressing('left')){
    catcher.vel.x = - 2;
    //catcher.vel.x = -(catcher.vel);
  }else if(kb.pressing('right')){
    catcher.vel.x = 2;
    //catcher.vel.x = abs(catcher.vel.x);
  }else{
    catcher.vel.x = 0;
  }

  //Stop catcher at edges of screen
  if(catcher.x <= 50){
    catcher.x = 50;
  }else if(catcher.x >=350){
    catcher.x = 350;
  }//else{
    //text('This is an error, this case is not supposed to happen', 10, 10);
  //}
  
  //If fallingObject collides with catcher, move back to random position at top
  if(fallingObject.collides(catcher)){
    fallingObject.y = 0;
    fallingObject.x = random(0, canvasWidth-1 ); 
    fallingObject.vel.y = random(1,5);
    fallingObject.direction = 'down';
    score = score +1 ; 
  }

  //score loose or win states : ( meduium and spicy levels ) 
  //mine did not work for a while so my win states and loose states are a bit 
  // modified to fit the game that didn't work before 
  if(score <= -5){
    text("You loose !", 100, 200);
    score = 0;
    //resets the score and the falling object 
    fallingObject.y = 0;
    fallingObject.x = random(0, canvasWidth);
    fallingObject.vel.y = random(1, 5);
  }else if(score >= 5){
    //so if the score is bigger than 5, then the player wins in theory 
    text("You Win! !", 100, 200);
    //and the game restarts :) 
    score = 0;
    fallingObject.y = 0;
    fallingObject.x = random(0, canvasWidth);
    fallingObject.vel.y = random(1, 5);

  }
}