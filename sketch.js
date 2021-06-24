
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500)

  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1 
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2;
  
  obstacleGroup=createGroup();
  foodGroup=createGroup();
  score=0
  
}


function draw() {
  
if(foodGroup.isTouching(monkey)){
  score=score+1
  foodGroup.destroyEach();  
}
  
  background(225)
  if(ground.x<200){
  ground.x=ground.width/2
  }
  
  if(keyDown("space")&& monkey.y >= 310){ 
   monkey.velocityY=-17
      }
  
  monkey.velocityY = monkey.velocityY +0.8
monkey.collide (ground);
  drawSprites();
  
  stroke("white")
textSize(20);
fill("white")
text("Score:"+score,300,50);

stroke("black")
textSize(20)
fill("black")
survivalTime=Math.ceil(frameCount/frameRate())
text("survival Time:"+survivalTime,100,50);    

  if(frameCount % 130 ===0){
    obstacle=createSprite(460,310,20,20)
    obstacle.x =Math.round(random(600,600))
    obstacle.velocityX=-6
    obstacle.addAnimation("obstacle",obstacleImage)
    obstacle.scale=0.2
    obstacle.collide=(ground)
    obstacleGroup.setlifetime=(100)
    
    obstacleGroup.add(obstacle);
  }
  
  if(frameCount %80 ===0){
    banana=createSprite(460,150,20,20)
    banana.y =Math.round(random(120,200))
    banana.velocityX=-6
    banana.addAnimation("banana",bananaImage)
    banana.scale=0.2
    foodGroup.setlifetime=(100)
    banana.scale=0.1
    foodGroup.add(banana);
   foodGroup.add(banana)
  }
  
  
}






