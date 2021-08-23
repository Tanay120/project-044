var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var player1;
var pinkCG;
var oppPinkImg;
var player2;
var oppYellowImg;
var yellowCG;
var bellSound;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("Road.png");
  mainRacerImg1 = loadAnimation("runner1.png","runner2.png");
  mainRacerImg2= loadAnimation("mainPlayer3.png");
  
  oppPinkImg=loadAnimation("opponent1.png","opponent2.png");
  
  oppYellowImg=loadAnimation("opponent4.png","opponent5.png");
  
  bellSound=loadSound("bell.mp3")
}

function setup(){
  
createCanvas(500,300);
  
pinkCG=new Group();
yellowCG=new Group(); 
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=1;
  
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
    
  //if(mainCyclist.isTouching(player1)){
    // gameState = END;
  //}
    
  //if(mainCyclist.isTouching(player2)){
   //  gameState = END;
  //}  
  
  distance = distance + Math.round(getFrameRate()/50);
    
    //path.velocityX = (6 +2*distance/200);
    
    
    
  var select_oppPlayer = Math.round(random(1,2));   
  if(World.frameCount % 150 == 0) {
      bellSound.play();
    if (select_oppPlayer == 1) {
      pinkCyclists();
    } else {
      yellowCyclists();
    } 
  }
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    
 }
 
 //if(gameState === END){
   
 //}
  
}

function pinkCyclists(){
  player1 =createSprite(500,Math.round(random(50,250),10,10));
  player1.scale=0.06;
  player1.addAnimation("opponentPlayer1",oppPinkImg);
  player1.setLifetime=170;
  pinkCG.add(player1);
  player1.velocityX= -(6+2*distance/150);
}

function yellowCyclists(){
  player2 =createSprite(500,Math.round(random(50,250),10,10));
  player2.scale=0.06;
  player2.addAnimation("opponentPlayer2",oppYellowImg);
  player2.setLifetime=170;
  yellowCG.add(player2);
  player2.velocityX=-5;
  player2.velocityX= -(6+2*distance/150);
}
