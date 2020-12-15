class Chain{
    constructor(body1, body2, xOffset, yOffset){
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.xOffset, y:this.yOffset}
        };
        console.log(Constraint);
        this.constraint = Constraint.create(options);
        World.add(world, this.constraint);

        this.color = "gray";
    }
    display(){
        var A = this.constraint.bodyA.position;
        var B = this.constraint.bodyB.position;
        var bXOffset = B.x+this.xOffset;
        var bYOffset = B.y+this.yOffset;
        
        push();
         strokeWeight(5);
         stroke(this.color);
         line(A.x,A.y,bXOffset,bYOffset);
        pop();
    }
}