const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var polygon, rope ,polygonImage
function preload(){
polygonImage = loadImage("polygon.png");

}

function setup(){
createCanvas(900,400);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
 //rectMode(CENTER);

 //ground = new Ground(200,200,5,15);
  box1 = new Box(300, 275, 30, 40);
  box2 = new Box(330, 275, 30, 40);
  box3 = new Box(360, 275, 30, 40);
  box4 = new Box(390, 275, 30, 40);
  box5 = new Box(420, 275, 30, 40);
  box6 = new Box(450, 275, 30, 40);
  box7 = new Box(480, 275, 30, 40);
  box8 = new Box(330, 235, 30, 40);
  box9 = new Box(360, 235, 30, 40);
  box10 = new Box(390, 235, 30, 40);
  box11 = new Box(420, 235, 30, 40);
  box12 = new Box(450, 235, 30, 40);
  box13 = new Box(360, 195, 30, 40);
  box14 = new Box(390, 195, 30, 40);
  box15 = new Box(420, 195, 30, 40);
  box16 = new Box(390, 155, 30, 40);
  /*box17 = new Box(700, 155, 30, 40);
  box18 = new Box(700, 155, 30, 40);
  box19 = new Box(700, 235, 30, 40);
  box20 = new Box(700, 235, 30, 40);
*/
ground1 = new Ground(700,200,200,20);
ground2 = new Ground2(380,350,270,10);


polygon = Bodies.circle(50,200,20);
World.add(world,polygon);
rope = new Rope(this.polygon,{x:100,y:200});
}

function draw(){
 background("skyblue");
  //Engine.update(engine);
  
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
 
  ground1.display();
  
imageMode(CENTER);
image(polygonImage,polygon.position.x,polygon.position.y,40,40);
rope.display();
}


function mouseDragged(){
Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }


function mouseReleased(){
  rope.fly();
 }
 function keyPressed(){
  if(keyCode === 32){
//Matter.Body.setPosition(polygon.body,{x:200,y:50});
 rope.attach(polygon.body);
  }
}
