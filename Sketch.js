var theif, police, coin;
var rectangle1,rectangle2,rectangle3,rectangle4,rectangle5,rectangle6,rectangle7,rectangle8,rectangle9,rectangle10,
rectangle11,rectangle12,rectangle13,rectangle14,rectangle15,rectangle16,rectangle17,rectangle18,rectangle19,rectangle20,
rectangle21,rectangle22,rectangle23,rectangle24,rectangle25,rectangle26,rectangle27,rectangle28,rectangle29,rectangle30,
rectangle31,rectangle32,rectangle33,rectangle34,rectangle35,rectangle36,rectangle37,rectangle38,rectangle39
var life1,life2,life3;
// var gameState = 1;
var titlepic;
var button1, button1Img;

function preload(){
    theifImage = loadImage("Images/theif.png");
    policeImage1 = loadImage("Images/police.png");
    policeImage2 = loadImage("Images/police.png");
    policeImage3 = loadImage("Images/police.png");
    policeImage4 = loadImage("Images/police.png");
    coinImage = loadImage("Images/coin.png");
    heart = loadImage("Images/Heart.png");
   // titlepicImage = loadImage("Images/titlepic.gif")
}

function setup(){

  theif = createSprite(5,16,112,12);
theif.addImage("theifImage",theifImage);
theif.scale  = 0.2;
//thief.debug = true;

life1 = new Life(139,108,10,10);
life2 = new Life(111,210,10,10);
life3 = new Life(15,358,10,10);

police1 = createSprite(163,124,112,12);
police1.addImage("police.png",policeImage1);
police1.scale  = 0.06;
police1.velocityY = 2;
police1.velocityX = 10;

police2 = createSprite(42,40,112,12);
police2.addImage("police.png",policeImage2);
police2.scale  = 0.06;
police2.velocityY = 2;
police2.velocityX = 7;

police3 = createSprite(42,40,112,12);
police3.addImage("police.png",policeImage3);
police3.scale  = 0.06;
police3.velocityY = 2;
police3.velocityX = 7;

police4 = createSprite(42,40,112,12);
police4.addImage("police.png",policeImage4);
police4.scale  = 0.06;
police4.velocityY = 2;
police4.velocityX = 7;

}


function draw() {
  background("orange");
  text(mouseX+","+ mouseY,350,10);
 
  life1.display();
  life2.display();
  life3.display();

  theif.velocityY = 0;
  theif.velocityX = 0;
 edges = createEdgeSprites();
  theif.bounceOff(edges);
  textFont("Arial");

    
  if(keyDown(UP_ARROW)) {
    theif.velocityX = 0;
    theif.velocityY = -20;
  }
  
  if(keyDown(DOWN_ARROW)) {
    theif.velocityX = 0;
    theif.velocityY = 20;
  }
  
  if(keyDown(LEFT_ARROW)) {
    theif.velocityX = -20;
    theif.velocityY = 0;
  }
  
  if(keyDown(RIGHT_ARROW)) {
    theif.velocityX = 20;
    theif.velocityY = 0;
  }


  /*
  if (gameState === 0){
titlepic = createSprite(200,200);
titlepic.addImage(titlepicImage);
titlepic.scale = 1
button1 = createSprite(300,150,50,50)

if (mousePressedOver(button1)){
  gameState = 1;
}
  }

  */

 sprites_of_the_game();

//titlepic.destroy();
  
  
  
  
if (theif.bounceOff(rectangle39))
{ 
  textSize(50);
  text("YOU WIN", 50,200);
  textFont("Times New Roman");
}

theif.bounceOff(rectangle1);
theif.bounceOff(rectangle2);
theif.bounceOff(rectangle3);
theif.bounceOff(rectangle4);
theif.bounceOff(rectangle5);
theif.bounceOff(rectangle6);
theif.bounceOff(rectangle7);
theif.bounceOff(rectangle8);
theif.bounceOff(rectangle9);
theif.bounceOff(rectangle10);
theif.bounceOff(rectangle11);
theif.bounceOff(rectangle12);
theif.bounceOff(rectangle13);
theif.bounceOff(rectangle14);
theif.bounceOff(rectangle15);
theif.bounceOff(rectangle16);
theif.bounceOff(rectangle17);
theif.bounceOff(rectangle18);
theif.bounceOff(rectangle19);
theif.bounceOff(rectangle20);
theif.bounceOff(rectangle21);
theif.bounceOff(rectangle22);
theif.bounceOff(rectangle23);
theif.bounceOff(rectangle24);
theif.bounceOff(rectangle25);
theif.bounceOff(rectangle26);
theif.bounceOff(rectangle27);
theif.bounceOff(rectangle28);
theif.bounceOff(rectangle29);
theif.bounceOff(rectangle30);
theif.bounceOff(rectangle31);
theif.bounceOff(rectangle32);
theif.bounceOff(rectangle33);
theif.bounceOff(rectangle34);
theif.bounceOff(rectangle35);
theif.bounceOff(rectangle36);
theif.bounceOff(rectangle37);
theif.bounceOff(rectangle38);
theif.bounceOff(rectangle39);



 
police1.bounceOff(rectangle1);
police1.bounceOff(rectangle2);
police1.bounceOff(rectangle3);
police1.bounceOff(rectangle4);
police1.bounceOff(rectangle5);
police1.bounceOff(rectangle6);
police1.bounceOff(rectangle7);
police1.bounceOff(rectangle8);
police1.bounceOff(rectangle9);
police1.bounceOff(rectangle10);
police1.bounceOff(rectangle11);
police1.bounceOff(rectangle12);
police1.bounceOff(rectangle13);
police1.bounceOff(rectangle14);
police1.bounceOff(rectangle15);
police1.bounceOff(rectangle16);
police1.bounceOff(rectangle17);
police1.bounceOff(rectangle18);
police1.bounceOff(rectangle19);
police1.bounceOff(rectangle20);
police1.bounceOff(rectangle21);
police1.bounceOff(rectangle22);
police1.bounceOff(rectangle23);
police1.bounceOff(rectangle24);
police1.bounceOff(rectangle25);
police1.bounceOff(rectangle26);
police1.bounceOff(rectangle27);
police1.bounceOff(rectangle28);
police1.bounceOff(rectangle29);
police1.bounceOff(rectangle30);
police1.bounceOff(rectangle31);
police1.bounceOff(rectangle32);
police1.bounceOff(rectangle33);
police1.bounceOff(rectangle34);
police1.bounceOff(rectangle35);
police1.bounceOff(rectangle36);
police1.bounceOff(rectangle37);
police1.bounceOff(rectangle38);
police1.bounceOff(rectangle39);




police2.bounceOff(rectangle1);
police2.bounceOff(rectangle2);
police2.bounceOff(rectangle3);
police2.bounceOff(rectangle4);
police2.bounceOff(rectangle5);
police2.bounceOff(rectangle6);
police2.bounceOff(rectangle7);
police2.bounceOff(rectangle8);
police2.bounceOff(rectangle9);
police2.bounceOff(rectangle10);
police2.bounceOff(rectangle11);
police2.bounceOff(rectangle12);
police2.bounceOff(rectangle13);
police2.bounceOff(rectangle14);
police2.bounceOff(rectangle15);
police2.bounceOff(rectangle16);
police2.bounceOff(rectangle17);
police2.bounceOff(rectangle18);
police2.bounceOff(rectangle19);
police2.bounceOff(rectangle20);
police2.bounceOff(rectangle21);
police2.bounceOff(rectangle22);
police2.bounceOff(rectangle23);
police2.bounceOff(rectangle24);
police2.bounceOff(rectangle25);
police2.bounceOff(rectangle26);
police2.bounceOff(rectangle27);
police2.bounceOff(rectangle28);
police2.bounceOff(rectangle29);
police2.bounceOff(rectangle30);
police2.bounceOff(rectangle31);
police2.bounceOff(rectangle32);
police2.bounceOff(rectangle33);
police2.bounceOff(rectangle34);
police2.bounceOff(rectangle35);
police2.bounceOff(rectangle36);
police2.bounceOff(rectangle37);
police2.bounceOff(rectangle38);
police2.bounceOff(rectangle39);




police3.bounceOff(rectangle1);
police3.bounceOff(rectangle2);
police3.bounceOff(rectangle3);
police3.bounceOff(rectangle4);
police3.bounceOff(rectangle5);
police3.bounceOff(rectangle6);
police3.bounceOff(rectangle7);
police3.bounceOff(rectangle8);
police3.bounceOff(rectangle9);
police3.bounceOff(rectangle10);
police3.bounceOff(rectangle11);
police3.bounceOff(rectangle12);
police3.bounceOff(rectangle13);
police3.bounceOff(rectangle14);
police3.bounceOff(rectangle15);
police3.bounceOff(rectangle16);
police3.bounceOff(rectangle17);
police3.bounceOff(rectangle18);
police3.bounceOff(rectangle19);
police3.bounceOff(rectangle20);
police3.bounceOff(rectangle21);
police3.bounceOff(rectangle22);
police3.bounceOff(rectangle23);
police3.bounceOff(rectangle24);
police3.bounceOff(rectangle25);
police3.bounceOff(rectangle26);
police3.bounceOff(rectangle27);
police3.bounceOff(rectangle28);
police3.bounceOff(rectangle29);
police3.bounceOff(rectangle30);
police3.bounceOff(rectangle31);
police3.bounceOff(rectangle32);
police3.bounceOff(rectangle33);
police3.bounceOff(rectangle34);
police3.bounceOff(rectangle35);
police3.bounceOff(rectangle36);
police3.bounceOff(rectangle37);
police3.bounceOff(rectangle38);
police3.bounceOff(rectangle39);



police4.bounceOff(rectangle1);
police4.bounceOff(rectangle2);
police4.bounceOff(rectangle3);
police4.bounceOff(rectangle4);
police4.bounceOff(rectangle5);
police4.bounceOff(rectangle6);
police4.bounceOff(rectangle7);
police4.bounceOff(rectangle8);
police4.bounceOff(rectangle9);
police4.bounceOff(rectangle10);
police4.bounceOff(rectangle11);
police4.bounceOff(rectangle12);
police4.bounceOff(rectangle13);
police4.bounceOff(rectangle14);
police4.bounceOff(rectangle15);
police4.bounceOff(rectangle16);
police4.bounceOff(rectangle17);
police4.bounceOff(rectangle18);
police4.bounceOff(rectangle19);
police4.bounceOff(rectangle20);
police4.bounceOff(rectangle21);
police4.bounceOff(rectangle22);
police4.bounceOff(rectangle23);
police4.bounceOff(rectangle24);
police4.bounceOff(rectangle25);
police4.bounceOff(rectangle26);
police4.bounceOff(rectangle27);
police4.bounceOff(rectangle28);
police4.bounceOff(rectangle29);
police4.bounceOff(rectangle30);
police4.bounceOff(rectangle31);
police4.bounceOff(rectangle32);
police4.bounceOff(rectangle33);
police4.bounceOff(rectangle34);
police4.bounceOff(rectangle35);
police4.bounceOff(rectangle36);
police4.bounceOff(rectangle37);
police4.bounceOff(rectangle38);
police4.bounceOff(rectangle39);

 drawSprites();
}

