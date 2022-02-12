class PAPER{
    constructor(x,y,width,height){
        var  options={
            isStatic: false,
            'Restitution': 20,
            'Friction': 0,
            'density':60
        }
        this.image = loadImage("paper.png")
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        image(this.image,pos.x, pos.y, this.width, this.height);
      }
   
    }

   
