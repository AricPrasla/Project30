const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var G1, Stand1, Stand2;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  G1 = new Ground(450,height,900,20);
  Stand1 = new Stand(390,300,250,10);
  Stand2 = new Stand(700,200,250,10);
  
  b0 = new Block(300,275,30,40);
  b1 = new Block(330,275,30,40);
  b2 = new Block(360,275,30,40);
  b3 = new Block(390,275,30,40);
  b4 = new Block(420,275,30,40);
  b5 = new Block(450,275,30,40);
  b6 = new Block(480,275,30,40);

  b7 = new Block(330,235,30,40);
  b8 = new Block(360,235,30,40);
  b9 = new Block(390,235,30,40);
  b10 = new Block(420,235,30,40);
  b11 = new Block(450,235,30,40);
 
  b12 = new Block(360,195,30,40);
  b13 = new Block(390,195,30,40);
  b14 = new Block(420,195,30,40);

  b15 = new Block(390,155,30,40);

  c1 = new Block(640,175,30,40);
  c2 = new Block(670,175,30,40);
  c3 = new Block(700,175,30,40);
  c4 = new Block(730,175,30,40);
  c5 = new Block(760,175,30,40);

  c6 = new Block(670,135,30,40);
  c7 = new Block(700,135,30,40);
  c8 = new Block(730,135,30,40);

  c9 = new Block(700,95,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  Sling = new Slingshot(this.ball,{x:100, y:200});

}

function draw() {
  background("grey");  
  Engine.update(engine);
  fill("brown");
  G1.display();
  fill("yellow");
  Stand1.display();
  Stand2.display();
  fill("green");
  b0.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  fill("blue");
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  fill("pink");
  b12.display();
  b13.display();
  b14.display();
  fill("orange");
  b15.display();
  fill("red");

  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  fill("purple");
  c6.display();
  c7.display();
  c8.display();
  fill("lightblue");
  c9.display();
  ellipse(ball.position.x,ball.position.y,40,40)
  Sling.display();

  drawSprites();
  
}
function mouseDragged(){ 
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY}); 
} 
function mouseReleased(){ 
  Sling.fly(); }