const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world

var  bg;
var s1;
var s2,s3,s4,s5,s6,s7,s8,s9,s10;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  s1=new snow(25,30,10,10)
  s2=new snow(15,20,70,70)
  s3=new snow(30,35,10,10)
  s4=new snow(120,40,70,70)
  s5=new snow(145,50,10,10)
  s6=new snow(770,60,70,70)
  s7=new snow(200,65,10,10)
  s8=new snow(350,20,70,70)
  s9=new snow(80,35,10,10)
  s10=new snow(150,55,70,70)

}
function preload(){
bg = loadImage("snow3.jpg")
}

function draw() {
  Engine.update(engine)
  background(bg); 
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display()
  s6.display();
  s7.display();
  s8.display();
  s9.display();
  s10.display();
  drawSprites();

}