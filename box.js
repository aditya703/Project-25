class Box{
    constructor(){
        var options = {
            isStatic:true
        }
        this.width = width;
        this.height = height;
        this.rightEdge = Bodies.rectangle(700, 350, 10, 100, options);
        this.image = loadImage("dustbinImage.png");
        this.bottombody = Bodies.rectangle(600, 350, 0, 20, options);
        World.add(world, this.bottombody);
        World.add(world, this.rightEdge);

    }
    display(){
        var pos = this.bottombody.position;
        //fill("white");
        image(this.image, pos.x, pos.y, 100, 100);
    }
    
    }