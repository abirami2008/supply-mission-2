var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tub1,tub2,tub3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	tub1 = createSprite(300,611,20,100 )
	tub1.shapeColor = "red";

	tub2 = createSprite(378,670,150,20 )
	tub2.shapeColor = "red";

	tub3 = createSprite(450,611,20,100 )
	tub3.shapeColor = "red";



	engine = Engine.create();
	world = engine.world;


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:false});
	World.add(world, packageBody);
 
	
	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
 

  keyPressed();

  


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

  }
}



