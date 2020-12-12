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
        this.chain = Constraint.create(options);
        World.add(world, this.chain);

        this.color = "gray";
    }
    display(){
        var A = this.chain.bodyA.position;
        var B = this.chain.bodyB.position;
        var bXOffset = B.x+this.xOffset;
        var bYOffset = B.y+this.yOffset;

        strokeWeight(3.258);
        stroke(this.color);
        line(A.x,A.y,bXOffset,bYOffset);
    }
}