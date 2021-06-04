const Engine=Matter.Engine;
const World=Matter.World;
const Contraint =Matter.Constraint;
const Bodies=matter.Bodies;

var practicles,plinko,divisions,ground;




function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);
var particles=[];
var plinko=[];
var division=[];
var divisionHeight=300;


}

function draw() {
  background(255,255,255); 
  for(var k=0;k<=innerWidth;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  } 
  drawSprites();
}