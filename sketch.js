var tigerImage,tiger;
var ground,invisibleGround;
var alien,alienGroup,alienImage;


function preload(){
    tigerImage =   loadAnimation("tigersprite.png","tigersprite2.png","tigersprite3.png");
    alienImage = loadImage("alienImage1.png");
}

function setup() {
    createCanvas(400,200);

    tiger = createSprite(50,180,20,50);
    tiger.addAnimation("running", tigerImage);

    ground = createSprite(200,180,600,20);
    ground.x=ground.width/2;
    console.log(ground.x);

    alienGroup = new Group();
     

    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false;


 
}

function draw() {
background(250);

if (ground.x < 0){
    ground.x = ground.width/2;
  }

tiger.collide(invisibleGround);

 spawnObstacles();
 drawSprites();
}

function spawnObstacles(){
    if (frameCount % 300 === 0)
     {
      var alien  = createSprite(600,250,40,10);
      alien.addImage(alienImage);
      alien.scale = 0.1;
      alien.velocityX = -3;
      alien.depth = alien.depth + 1
      alien.y = random(120,500);
      alien.lifetime = 180;
      alienGroup.add(alien);
     }
  }