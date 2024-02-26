function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    setupBase()
    graphics.main=setupImage(display.type)
    if(graphics.main!=0){
        fill(150)
        rect(50+graphics.main.width/2,50+graphics.main.height/2,graphics.main.width,graphics.main.height)
        image(graphics.main,50+graphics.main.width/2,50+graphics.main.height/2)
    }
}