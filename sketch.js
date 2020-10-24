
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1;
var packageBody;

function preload()
{
	
}2

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	packageBody = Bodies.circle(width/2, 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	Engine.run(engine);

	paper = new Paper(230,380,25);
	dustbin1 = new Dustbin(650,650,200,20);
	dustbin2 = new Dustbin(540,605,20,100);
	dustbin3 = new Dustbin(760,605,20,100);
	ground = new Ground(400,670,800,10);

}


function draw() {
	rectMode(CENTER);
	background(0);
  
	paper.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	ground.display();

	drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85})
	}
}



