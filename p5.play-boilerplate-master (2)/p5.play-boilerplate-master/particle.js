class practicle{
    constructor(x,y,width,height){
 var options={
     isStatic:false
 }       
 this.body=Bodies.rectangle(x,y,width,height,options);
 this.width=50
 this.height=60;
 World.add(world,this.body);
 }
 display(){
     var pos=this.body.position;
     rectMode(CENTER);
     Fill('red');
 rect(pos.x,pos.y,this.width,this.height);

    }
};