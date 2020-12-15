class Ball{
    constructor(x,y,diameter){
        var options = {'restitution': 1.4};
        this.body = Bodies.circle(x,y,diameter/2,options);
        World.add(world,this.body);


        this.radius = diameter/2;
        this.color = 200;
    }
    display(){
        var position = this.body.position; var angle = this.body.angle;

        push();
         ellipseMode(RADIUS);
         translate(position.x,position.y);
         fill(this.color);
         rotate(angle);
         ellipse(0,0,this.radius,this.radius);
        pop();
    }
}