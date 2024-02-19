function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    graphics.main=setupImage(display.type)
    if(graphics.main!=0){
        image(graphics.main,50,50)
    }
}