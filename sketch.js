const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;


function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;
	

	ceiling = new Ceiling(400,25,800,50);

	ball1 = new Ball(200,400,100);
	ball2 = new Ball(300,400,100);
	ball3 = new Ball(400,400,100);
	ball4 = new Ball(700,337.5,100);

	chain1 = new Chain(ball1.body,ceiling.body,-200,ceiling.height/2);
	chain2 = new Chain(ball2.body,ceiling.body,-100,ceiling.height/2);
	chain3 = new Chain(ball3.body,ceiling.body,0,ceiling.height/2);
	chain4 = new Chain(ball4.body,ceiling.body,100,ceiling.height/2);


	Engine.run(engine);
}


function draw() {
    background("lightblue");


	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();

	ceiling.display();
	
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
}



