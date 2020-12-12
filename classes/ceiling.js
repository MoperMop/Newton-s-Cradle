class Ceiling{
    constructor(x,y,width,height){
        var staticOption = {isStatic: true};
        this.ground = Bodies.rectangle(x,y,width,height,staticOption);
        World.add(world,this.ground);


        this.width = width;
        this.height = height;
        this.color = "gray";
    }
    display(){
        var position = this.ground.position


        rectMode(CENTER);
        fill(this.color);
        rect(position.x,position.y,this.width,this.height);
    }
}