class Paper{
constructor(x, y){
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:1.0,
        density:1.2
    }
    this.image = loadImage("paperImage.png");
    this.body = Bodies.circle(x, y, 30, options);
    World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    //fill("white");
    image(this.image, pos.x, pos.y, 30, 30);
}

}