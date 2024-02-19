function keyPressed(){
    switch(key){
        case 'q':
            if(graphics.main!=0&&saving.progress==0){
                saving.progress=1
            }
        break
        case 'w':
            if(graphics.main!=0&&saving.progress==1){
                saving.progress=2
            }
        break
        case 'e':
            if(graphics.main!=0&&saving.progress==2){
                save(graphics.main)
            }
        break
    }
}