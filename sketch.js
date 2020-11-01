var PLAY = 1;
var END = 0;
var gameState = PLAY;


var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var ground;
var score = 0;
var survivalTime = 0;

function preload()
{ 
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  foodGroup = new Group();
  obstacleGroup = new Group();
 }



function setup() 
{
  createCanvas(500, 400);
  monkey = createSprite(110, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.19;
  
  ground = createSprite(400, 495, 900, 250);
  ground.velocityX = -4;
 }


function draw() 
{
  background("white");
  
  if(gameState === PLAY)
  {
    
  if(keyDown("space")){
    monkey.veocityY = -12;
  }
    
    monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
    
    
    
    stroke("black");
  textSize(20);
  fill("black");
  text("Score: " + score, 130, 20);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 100, 50);
    
   }
  
  ground.x = ground.width/2;
  console.log(ground.x);
 
   
  
  
  drawSprites();
  
  
 }

function food()
{
  
  if(World.frameCount%80===0)
  {
    banana = createSprite(400, 200, 20, 20);
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana = Math.round(random(120, 200));
    banana.velocityX = -4;
    foodGroup.add(banana);
   }
 }

function rock()
{
  
  if(World.frameCount%300===0)
  {
    obstacle = createSprite(400, 200, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle = Math.round(random(120, 200));
    obstacle.velocityX = -4;
    obstacleGroup.add(obstacle);
   }
 }

