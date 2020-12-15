class Ceiling{
    constructor(x,y,width,height){
        var staticOption = {isStatic: true};
        this.body = Bodies.rectangle(x,y,width,height,staticOption);
        World.add(world,this.body);


        this.width = width;
        this.height = height;
        this.color = "brown";
    }
    display(){
        var position = this.body.position


        rectMode(CENTER);
        fill(this.color);
        rect(position.x,position.y,this.width,this.height);
    }
}