class Drop{
    constructor(x,y){

        var options = {
            'friction' : 0.1,
            'restitution':0.2,
            'isStatic' : false
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body);
    }

    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,5)})
        }
    }

    display(){
        var pos = this.body.position
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,10,10)

    }
     

    
}