/* VARIABLES */
//eye and pupil width and heigh variables 
let eyeWidth = 20;
let eyeHeight = 30;
let pupilWidth = 8;
let pupilHeight = 10;
//variables setting the colors, so in theory if I wanted to change all the 
// black at once to another color, I could do it by simply changing this 1 variable 
let white = 255;
let black = 0; 

//toggle challenge variable : we start by setting it to false
let toggle = false; 

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 
  //sets the background color
  background(219,209,209); 
}

/* DRAW LOOP REPEATS */
function draw() {
  //set the angles to degrees ( not radians ) for elipses and arcs 
  // set the rectangles to spawn/ create in the center of the canvas 
  angleMode(DEGREES); 
  rectMode(CENTER);
  
// body, and arms, filled in and on 'first layer' of drawing 
  fill(black,black,black);
  ellipse(200, 250, 160, 160); 
  
  fill(white,white,white);
  ellipse(200, 250, 130, 155);  
//feet
  fill(255,153,51);
  ellipse(170, 310, 40, 60);  
  ellipse(230, 310, 40, 60);  

// face : ( "2nd" layer, these are written later bc they should appear "ontop " of body) 
  fill(black,black,black);
  ellipse(200, 150, 80, 80);  
//mouth
  fill(white,white,white);
  arc(200,185,37,27,180,0);

//beak 
  fill(255,153,51);
  arc(200,178,30,35,0,180);

  
//eyes 
  //if statement, using toggle mechanic 
  // if the variable toggle is currently set to true ( so not its original state) 
  // then, this means that the mouse has been pressed, and thus the penguin (Tux) closes
  // his eyes 
  if(toggle == true){
    //eyes closed, if the mouse is pressed and toggle is equal to true 
    fill(black,black,black);
    ellipse(200, 150, 80, 40);
    
  } else if(toggle == false){ 
  // else, if toggle is set to false then this means that the mouse has either been pressed
    // an equal amount of times or 0 times, so Tux keeps his eyes open 
    fill(white,white,white);
    ellipse(180, 160, eyeWidth, eyeHeight); 
    ellipse(220, 160, eyeWidth, eyeHeight); 
  
//pupils
    fill(black,black,black);
    ellipse(180, 165, pupilWidth, pupilHeight); 
    ellipse(220, 165, pupilWidth, pupilHeight);
  }else{
    //this shouldn't appear ever, but it is always good to cover your bases 
    text("this is an error, \n this text should not be here", 10, 50); 
  }
  
//text instructions here  
  textSize(15);
  fill(255,153,51);
  text("Click on Tux to make him blink! \nClick again to make him open his eyes! ", 10, 20);
  text("Interactive Avatar project, June 2024", 100, 380);
}

/* FUNCTIONS */ 
//this is for the challenge level of the project, this function mousePressed
// changes the value of toggle once it is used - which bassically lets us 
// make sure that toggle does not stay the same and gives us the option to 
// click again to open or close Tux's eyes 
function mousePressed(){  
  toggle = !toggle;
  return toggle;
  //all it does is set the variable toggle to the opposite of its current value 
  // true or false, and then returns it as a value of the function 
}