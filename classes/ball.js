class Ball{
    constructor(x,y,diameter){
        this.ball = Bodies.circle(x,y,diameter);
        World.add(world,this.ball);


        this.radius = diameter/2;
        this.color = "gray";
    }
    display(){
        var position = this.box.position; var angle = this.box.angle;

        push();
         ellipseMode(RADIUS);
         translate(position.x,position.y);
         fill(this.color);
         rotate(angle);
         ellipse(0,0,this.radius,this.radius);
        pop();
    }
}