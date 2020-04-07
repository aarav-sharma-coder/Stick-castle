const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var engine, world;
var block,block1,block2,block3;
var block4,block5;
var block6, block7;
var block8,block9,block10;
var block11,block12,block13;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;

  ground = new Ground(400,780,1200,30);
  block= new Block(400,750,200,200);
  block1=new Block(400,650,120,170);
  block2= new Block(400,600,150,15);
  block3= new Block(400, 550,95,90);
  block4 = new Block(215,680,180,250);
  block5 = new Block(555,680,180,250);
  block6 = new Block(50,700,40,460);
  block7= new Block(725,700,40,460);
  block8 = new Block(525,585,50,50);
  block9 = new Block(615,585,50,50);
  block10 = new Block(570,555,170,20);
  block11 = new Block(155,585,50,50);
  block12 = new Block(250,585,50,50);
  block13 = new Block(205,555,170,20);
}

function draw() {
  background(0);  
  Engine.update(engine);
  
ground.display();
block.display();
block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 
  triangle(300,300,400,150,500,300)
}