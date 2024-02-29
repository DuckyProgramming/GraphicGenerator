function setupImage(type){
    switch(type){
        case 1:
            layer=createGraphics(500,500)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.noFill()
            layer.strokeWeight(6)
            for(let a=0,la=360;a<la;a++){
                let b=layer.sin(a*10)*0.5+0.5
                layer.rotate(1)
                layer.stroke(
                    merge(255,206,b),
                    merge(166,116,b),
                    merge(151,108,b))
                layer.arc(0,300,600,600,-90,0)
            }
            layer.rotate(30)
            layer.stroke(40)
            layer.strokeWeight(5)
            layer.scale(0.85)
            layer.beginShape()
            layer.vertex(0,45)
            layer.bezierVertex(-30,-40,-55,-80,-65,-120)
            layer.bezierVertex(-65,-140,-65,-160,0,-210)
            layer.bezierVertex(65,-160,65,-140,65,-120)
            layer.bezierVertex(55,-80,30,-40,0,45)
            layer.endShape()
            layer.scale(1/0.85)
            layer.noStroke()
            for(let a=0,la=50;a<la;a++){
                layer.fill(
                    merge(192,96,a/la*3),
                    merge(244,151,a/la*3),
                    merge(252,187,a/la*3))
                layer.scale(0.85-a/la*0.6)
                layer.beginShape()
                layer.vertex(0,45)
                layer.bezierVertex(-30,-40,-55,-80,-65,-120)
                layer.bezierVertex(-65,-140,-65,-160,0,-210)
                layer.bezierVertex(65,-160,65,-140,65,-120)
                layer.bezierVertex(55,-80,30,-40,0,45)
                layer.endShape()
                layer.scale(1/(0.85-a/la*0.6))
            }
            sublayer=createGraphics(600,600)
            setupLayer(sublayer)
            sublayer.translate(sublayer.width/2,sublayer.height/2)
            for(let a=0,la=20;a<la;a++){
                if(a%10<5){
                    sublayer.noErase()
                    sublayer.fill(255,0.1)
                }else{
                    sublayer.erase(0.3)
                }
                sublayer.scale(0.85-a/la*0.85,0.85)
                sublayer.beginShape()
                sublayer.vertex(0,45)
                sublayer.bezierVertex(-30,-40,-55,-80,-65,-120)
                sublayer.bezierVertex(-65,-140,-65,-160,0,-210)
                sublayer.bezierVertex(65,-160,65,-140,65,-120)
                sublayer.bezierVertex(55,-80,30,-40,0,45)
                sublayer.endShape()
                sublayer.scale(1/(0.85-a/la*0.85),1/0.85)
            }
            sublayer.erase(0.5)
            for(let a=0,la=10;a<la;a++){
                sublayer.scale(0.85,(0.85-a/la*0.85))
                sublayer.beginShape()
                sublayer.vertex(0,45)
                sublayer.bezierVertex(-30,-40,-55,-80,-65,-120)
                sublayer.bezierVertex(-65,-140,-65,-160,0,-210)
                sublayer.bezierVertex(65,-160,65,-140,65,-120)
                sublayer.bezierVertex(55,-80,30,-40,0,45)
                sublayer.endShape()
                sublayer.scale(1/0.85,1/(0.85-a/la*0.85))
            }
            layer.image(sublayer,0,0)
            layer.rotate(-50)
            layer.stroke(40)
            layer.strokeWeight(5)
            layer.beginShape()
            layer.vertex(0,45)
            layer.bezierVertex(-30,-40,-55,-80,-65,-120)
            layer.bezierVertex(-65,-140,-65,-160,0,-210)
            layer.bezierVertex(65,-160,65,-140,65,-120)
            layer.bezierVertex(55,-80,30,-40,0,45)
            layer.endShape()
            layer.noStroke()
            for(let a=0,la=50;a<la;a++){
                layer.fill(
                    merge(192,96,a/la*3),
                    merge(244,151,a/la*3),
                    merge(252,187,a/la*3))
                layer.scale(1-a/la*0.6)
                layer.beginShape()
                layer.vertex(0,45)
                layer.bezierVertex(-30,-40,-55,-80,-65,-120)
                layer.bezierVertex(-65,-140,-65,-160,0,-210)
                layer.bezierVertex(65,-160,65,-140,65,-120)
                layer.bezierVertex(55,-80,30,-40,0,45)
                layer.endShape()
                layer.scale(1/(1-a/la*0.6))
            }
            sublayer=createGraphics(600,600)
            setupLayer(sublayer)
            sublayer.translate(sublayer.width/2,sublayer.height/2)
            for(let a=0,la=20;a<la;a++){
                if(a%10<5){
                    sublayer.noErase()
                    sublayer.fill(255,0.1)
                }else{
                    sublayer.erase(0.3)
                }
                sublayer.scale(1-a/la,1)
                sublayer.beginShape()
                sublayer.vertex(0,45)
                sublayer.bezierVertex(-30,-40,-55,-80,-65,-120)
                sublayer.bezierVertex(-65,-140,-65,-160,0,-210)
                sublayer.bezierVertex(65,-160,65,-140,65,-120)
                sublayer.bezierVertex(55,-80,30,-40,0,45)
                sublayer.endShape()
                sublayer.scale(1/(1-a/la),1)
            }
            sublayer.erase(0.5)
            for(let a=0,la=10;a<la;a++){
                sublayer.scale(1,(1-a/la))
                sublayer.beginShape()
                sublayer.vertex(0,45)
                sublayer.bezierVertex(-30,-40,-55,-80,-65,-120)
                sublayer.bezierVertex(-65,-140,-65,-160,0,-210)
                sublayer.bezierVertex(65,-160,65,-140,65,-120)
                sublayer.bezierVertex(55,-80,30,-40,0,45)
                sublayer.endShape()
                sublayer.scale(1,1/(1-a/la))
            }
            layer.image(sublayer,0,0)
            layer.rotate(145)
            layer.noFill()
            layer.stroke(40)
            layer.strokeWeight(5)
            layer.beginShape()
            layer.vertex(0,0)
            layer.bezierVertex(-45,-70,-45,-140,0,-180)
            layer.bezierVertex(45,-140,45,-70,0,0)
            layer.endShape()
            layer.noStroke()
            for(let a=0,la=20;a<la;a++){
                layer.fill(
                    merge(254,237,a/la),
                    merge(232,188,a/la),
                    merge(244,202,a/la))
                layer.scale(1-a/la*0.6)
                layer.beginShape()
                layer.vertex(0,0)
                layer.bezierVertex(-45,-70,-45,-140,0,-180)
                layer.bezierVertex(45,-140,45,-70,0,0)
                layer.endShape()
                layer.scale(1/(1-a/la*0.6))
            }
            layer.rotate(-25)
            layer.noFill()
            layer.stroke(40)
            layer.strokeWeight(5)
            layer.beginShape()
            layer.vertex(0,0)
            layer.bezierVertex(-45,-70,-45,-140,0,-210)
            layer.bezierVertex(45,-140,45,-70,0,0)
            layer.endShape()
            layer.noStroke()
            for(let a=0,la=20;a<la;a++){
                layer.fill(
                    merge(254,237,a/la),
                    merge(232,188,a/la),
                    merge(244,202,a/la))
                layer.scale(1-a/la*0.6)
                layer.beginShape()
                layer.vertex(0,0)
                layer.bezierVertex(-45,-70,-45,-140,0,-210)
                layer.bezierVertex(45,-140,45,-70,0,0)
                layer.endShape()
                layer.scale(1/(1-a/la*0.6))
            }
            layer.rotate(30)
            layer.noFill()
            layer.stroke(40)
            layer.strokeWeight(5)
            for(let b=0,lb=5;b<lb;b++){
                layer.rotate(72)
                layer.beginShape()
                layer.vertex(0,30)
                layer.bezierVertex(-45,-90,-45,-120,0,-120)
                layer.bezierVertex(45,-120,45,-90,0,30)
                layer.endShape()
            }
            layer.noStroke()
            for(let a=0,la=20;a<la;a++){
                layer.fill(
                    merge(255,255,a/la),
                    merge(255,154,a/la),
                    merge(255,196,a/la))
                for(let b=0,lb=5;b<lb;b++){
                    layer.rotate(72)
                    layer.scale(1-a/la*0.8,1-a/la*0.6)
                    layer.beginShape()
                    layer.vertex(0,30+a/la*30)
                    layer.bezierVertex(-45,-90,-45,-120,0,-120)
                    layer.bezierVertex(45,-120,45,-90,0,30+a/la*30)
                    layer.endShape()
                    layer.scale(1/(1-a/la*0.8),1/(1-a/la*0.6))
                }
            }
            layer.rotate(5)
            for(let a=0,la=20;a<la;a++){
                layer.fill(
                    merge(232,197,a/la*2),
                    merge(121,86,a/la*2),
                    merge(155,103,a/la*2))
                for(let b=0,lb=5;b<lb;b++){
                    layer.rotate(72)
                    layer.ellipse(0,-24*(1-a/la*0.5),12*(1-a/la*0.5),48*(1-a/la*0.5))
                }
            }
            layer.rotate(10)
            for(let a=0,la=20;a<la;a++){
                layer.fill(
                    merge(242,251,a/la*2),
                    merge(166,207,a/la*2),
                    merge(138,153,a/la*2))
                for(let b=0,lb=5;b<lb;b++){
                    layer.rotate(72)
                    layer.ellipse(0,-20*(1-a/la*0.9),10*(1-a/la*0.9),40*(1-a/la*0.9))
                }
            }
            return layer
        case 2:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(255,255,50)
            layer.triangle(-120,30,0,30,-60,30-60*sqrt(3))
            layer.triangle(120,-30,0,-30,60,-30+60*sqrt(3))
            layer.triangle(-90,45,-30,45,-60,45+30*sqrt(3))
            layer.triangle(90,-45,30,-45,60,-45-30*sqrt(3))
            return layer
        case 3:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(255,255,50)
            regTriangle(layer,0,-20,90,90,60)
            regTriangle(layer,0,80,45,45,0)
            regTriangle(layer,-50*sqrt(3),-70,45,45,0)
            regTriangle(layer,50*sqrt(3),-70,45,45,0)
            return layer
        case 4:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(255,255,50)
            regTriangle(layer,0,-35,50,150,0)
            regTriangle(layer,-70,40,50,150,60)
            regTriangle(layer,70,40,50,150,60)
            return layer
        case 5:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(100,255,50)
            regTriangle(layer,0,30,120,120,60)
            layer.erase(1,1)
            regTriangle(layer,0,30,90,90,60)
            layer.noErase()
            layer.fill(255,255,50)
            regTriangle(layer,0,30,60,60,60)
            return layer
        case 6:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(255,255,50)
            regTriangle(layer,0,30,120,120,60)
            layer.erase(1,1)
            regTriangle(layer,0,30,60,60,60)
            layer.noErase()
            regTriangle(layer,0,30,60,60,0)
            return layer
        case 7:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(150,255,150)
            layer.rect(0,0,250,250,25)
            layer.fill(0)
            layer.rect(0,0,20,180)
            layer.rect(-80,0,20,180)
            layer.rect(80,0,20,180)
            layer.rect(-40,-40,100,20)
            layer.rect(40,40,100,20)
            return layer
        case 8:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(200,40,40)
            layer.rect(-70,-100,120,60,20)
            layer.rect(-70,-80,120,20)
            layer.rect(70,-110,120,40,20)
            layer.rect(70,-100,120,20)
            layer.rect(-70,110,120,40,20)
            layer.rect(-70,100,120,20)
            layer.fill(80,120,80)
            layer.rect(70,-30,120,40,20)
            layer.rect(70,-40,120,20)
            layer.rect(-70,70,120,40)
            layer.fill(255)
            layer.rect(-70,-40,120,60,20)
            layer.rect(-70,-60,120,20)
            layer.rect(70,-70,120,40)
            layer.fill(255,200,0)
            layer.rect(-70,30,120,40,20)
            layer.rect(-70,40,120,20)
            layer.fill(150,100,200)
            layer.rect(70,70,120,120,20)
            layer.fill(50,100,200)
            layer.rect(70,70,120,40)
            layer.fill(200)
            layer.ellipse(0,0,80)
            layer.fill(80)
            layer.quad(0,-30,-30,0,0,30,30,0)
            return layer
        case 9:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            key=16
            key=(key>>>0).toString(2)
            layer.fill(0)
            layer.ellipse(0,0,160)
            for(let a=0,la=5;a<la;a++){
                if(key[key.length-1-a]=='1'){
                    layer.triangle(-40,-70,40,-70,0,-140)
                }
                layer.rotate(72)
            }
            layer.stroke(0)
            layer.strokeWeight(10)
            layer.noFill()
            layer.erase(1,1)
            layer.ellipse(0,0,170)
            for(let a=0,la=5;a<la;a++){
                layer.line(0,0,0,100)
                layer.rotate(72)
            }
            return layer
        case 10:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            key=60-32
            key=(key>>>0).toString(2)
            layer.fill(0)
            layer.ellipse(0,0,160)
            layer.fill(255)
            layer.ellipse(0,0,140)
            layer.fill(0)
            for(let a=0,la=5;a<la;a++){
                layer.rect(0,38,30,76)
                layer.rotate(72)
            }
            layer.stroke(0)
            layer.strokeWeight(10)
            layer.fill(255)
            for(let a=0,la=5;a<la;a++){
                if(key[key.length-1-a]=='1'){
                    layer.triangle(-30,-75,30,-75,0,-130)
                }
                layer.rotate(72)
            }
            layer.noFill()
            for(let a=0,la=5;a<la;a++){
                if(key[key.length-1-a]=='1'){
                    layer.arc(0,0,190,190,-102,-78)
                }
                layer.rotate(72)
            }
            layer.erase(1,1)
            layer.ellipse(0,0,170)
            for(let a=0,la=5;a<la;a++){
                layer.line(0,0,0,100)
                layer.rotate(72)
            }
            return layer
        case 11:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            key=94-64
            key=(key>>>0).toString(2)
            layer.fill(0)
            layer.ellipse(0,0,160)
            for(let a=0,la=5;a<la;a++){
                if(key[key.length-1-a]=='1'){
                    layer.triangle(-40,-70,40,-70,0,-140)
                }
                layer.rotate(72)
            }
            layer.stroke(0)
            layer.strokeWeight(10)
            layer.noFill()
            layer.erase(1,1)
            layer.ellipse(0,0,170)
            layer.ellipse(0,0,100)
            for(let a=0,la=5;a<la;a++){
                layer.line(0,0,0,100)
                layer.rotate(72)
            }
            return layer
        case 12:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            key=110-96
            key=(key>>>0).toString(2)
            layer.fill(0)
            layer.ellipse(0,0,160)
            layer.fill(255)
            layer.ellipse(0,0,140)
            layer.fill(0)
            layer.ellipse(0,0,130)
            layer.fill(255)
            layer.ellipse(0,0,70)
            layer.fill(0)
            for(let a=0,la=5;a<la;a++){
                layer.rect(0,38,30,76)
                layer.rotate(72)
            }
            layer.stroke(0)
            layer.strokeWeight(10)
            layer.fill(255)
            for(let a=0,la=5;a<la;a++){
                if(key[key.length-1-a]=='1'){
                    layer.triangle(-30,-75,30,-75,0,-130)
                }
                layer.rotate(72)
            }
            layer.noFill()
            for(let a=0,la=5;a<la;a++){
                if(key[key.length-1-a]=='1'){
                    layer.arc(0,0,190,190,-102,-78)
                }
                layer.rotate(72)
            }
            layer.erase(1,1)
            layer.ellipse(0,0,170)
            layer.ellipse(0,0,100)
            for(let a=0,la=5;a<la;a++){
                layer.line(0,0,0,100)
                layer.rotate(72)
            }
            return layer
        case 13:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(50)
            layer.rect(0,0,270,270,5)
            layer.fill(255,200,255)
            layer.rect(0,0,240,240,5)
            layer.stroke(0)
            layer.strokeWeight(10)
            layer.noFill()
            layer.ellipse(0,40,80)
            layer.line(-40,40,40,40)
            layer.line(0,0,0,-100)
            layer.line(0,0,40,-60)
            layer.line(-40,-60,40,-60)
            return layer
        case 14:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(50)
            layer.rect(0,0,270,270,5)
            layer.fill(255,200,255)
            layer.rect(0,0,240,240,5)
            layer.stroke(0)
            layer.strokeWeight(10)
            layer.noFill()
            layer.ellipse(0,-40,80)
            layer.line(-20*sqrt(2),-40-20*sqrt(2),20*sqrt(2),-40+20*sqrt(2))
            layer.line(-20*sqrt(2),-40+20*sqrt(2),-60,20)
            layer.line(0,80,-60,20)
            layer.line(0,80,60,20)
            layer.line(-20,40,-40,60)
            return layer
        case 15:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(50)
            layer.rect(0,0,270,270,5)
            layer.fill(255,200,255)
            layer.rect(0,0,240,240,5)
            layer.stroke(0)
            layer.strokeWeight(10)
            layer.noFill()
            layer.ellipse(0,0,80)
            layer.line(-40,0,40,0)
            layer.line(0,-40,0,40)
            layer.line(-20*sqrt(2),-20*sqrt(2),-60,-60)
            layer.line(20*sqrt(2),-20*sqrt(2),60,-60)
            layer.line(-20*sqrt(2),20*sqrt(2),-60,60)
            layer.line(20*sqrt(2),20*sqrt(2),60,60)
            layer.line(-60,-60,-30,-90)
            layer.line(60,-60,30,-90)
            layer.line(-30,-90,30,-90)
            layer.line(-60,60,-60,90)
            layer.line(60,60,60,90)
            layer.line(-60,60,-90,60)
            layer.line(60,60,90,60)
            return layer
        case 16:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(50)
            layer.rect(0,0,270,270,5)
            layer.fill(255,200,255)
            layer.rect(0,0,240,240,5)
            layer.stroke(0)
            layer.strokeWeight(10)
            layer.noFill()
            layer.ellipse(-40,0,80)
            layer.line(-40,0,-40-20*sqrt(2),-20*sqrt(2))
            layer.line(-40,0,-40-20*sqrt(2),20*sqrt(2))
            layer.line(0,0,40,-40)
            layer.line(0,0,40,40)
            layer.line(100,20,40,-40)
            layer.line(20,60,60,20)
            layer.line(40,-40,40,-80)
            return layer
        case 17:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(255,230,0)
            regPoly(layer,0,0,8,150,150,22.5)
            for(let a=0,la=4;a<la;a++){
                layer.triangle(0,0,-150*sin(22.5),-150*cos(22.5),150*sin(22.5),-150*cos(22.5))
                layer.rotate(90)
            }
            layer.fill(255,125,0)
            layer.rotate(45)
            for(let a=0,la=4;a<la;a++){
                layer.triangle(0,0,-150*sin(22.5),-150*cos(22.5),150*sin(22.5),-150*cos(22.5))
                layer.rotate(90)
            }
            layer.rotate(-45)
            layer.fill(150,255,0)
            layer.ellipse(0,0,200)
            for(let a=0,la=8;a<la;a++){
                layer.triangle(0,-120,-20,-95,20,-95)
                layer.rotate(45)
            }
            
            //key=69
            //key=(key>>>0).toString(6)
            key='+-'

            for(let a=0,la=key.length;a<la;a++){
                layer.push()
                layer.translate(-la*25+25+a*50,0)
                layer.rotate(45)
                layer.fill(240)
                layer.ellipse(0,0,40)
                layer.fill(0)
                switch(key[a]){
                    case '0':
                        layer.quad(-5,0,0,-10,5,0,0,10)
                    break
                    case '1':
                        layer.rect(0,0,25,5)
                    break
                    case '2':
                        layer.rect(0,0,25,5)
                        layer.rect(-10,0,5,20)
                    break
                    case '3':
                        layer.rect(0,0,25,5)
                        layer.rect(-10,0,5,20)
                        layer.rect(10,0,5,20)
                    break
                    case '4':
                        layer.rect(0,-5,15,5)
                        layer.rect(0,2.5,20,5)
                        layer.rect(0,0,5,25)
                    break
                    case '5':
                        layer.rect(0,0,5,5)
                        layer.rect(0,-7.5,20,5)
                        layer.rect(0,7.5,20,5)
                        layer.rect(-7.5,0,5,20)
                        layer.rect(7.5,0,5,20)
                    break
                    case '+':
                        layer.rotate(45)
                        layer.rect(0,0,25,5)
                        layer.rect(0,0,5,25)
                    break
                    case '-':
                        layer.rotate(45)
                        layer.rect(0,0,5,25)
                    break
                }
                layer.pop()
            }
            return layer
        case 18:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(255,230,0)
            regPoly(layer,0,0,6,150,150,30)
            for(let a=0,la=3;a<la;a++){
                layer.triangle(0,0,-150*sin(30),-150*cos(30),150*sin(30),-150*cos(30))
                layer.rotate(120)
            }
            layer.fill(255,125,0)
            layer.rotate(60)
            for(let a=0,la=3;a<la;a++){
                layer.triangle(0,0,-150*sin(30),-150*cos(30),150*sin(30),-150*cos(30))
                layer.rotate(120)
            }
            layer.rotate(-60)
            layer.fill(150,255,0)
            layer.ellipse(0,0,200)
            for(let a=0,la=8;a<la;a++){
                layer.triangle(0,-120,-20,-95,20,-95)
                layer.rotate(45)
            }

            /*layer.fill(160,200,240)
            layer.ellipse(0,50,80,30)
            for(let a=0,la=10;a<la;a++){
                layer.ellipse(40*cos(a*36),50+15*sin(a*36),32,12)
            }*/
            //airborne code

            /*layer.rotate(45)
            layer.fill(255,230,0)
            layer.rect(0,0,20,140)
            layer.rotate(-45)*/
            //cavalry code

            layer.fill(0,200,255)
            layer.quad(0,0,-80,-10,-80,-30)
            layer.quad(0,0,-80,10,-80,30)
            layer.quad(0,0,80,-10,80,-30)
            layer.quad(0,0,80,10,80,30)
            layer.ellipse(0,0,20)
            //support group code

            key=6
            key=(key>>>0).toString(6)

            /*layer.fill(80)
            layer.rect(0,0,key.length*50+20,60,30)*/
            //tank code

            /*layer.fill(160)
            layer.rect(0,-10,key.length*50+20,10,5)
            layer.rect(0,10,key.length*50+20,10,5)*/
            //mechanized code

            for(let a=0,la=key.length;a<la;a++){
                layer.push()
                layer.translate(-la*25+25+a*50,0)
                layer.rotate(45)
                layer.fill(240)
                layer.ellipse(0,0,40)
                layer.fill(0)
                switch(key[a]){
                    case '0':
                        layer.quad(-5,0,0,-10,5,0,0,10)
                    break
                    case '1':
                        layer.rect(0,0,25,5)
                    break
                    case '2':
                        layer.rect(0,0,25,5)
                        layer.rect(-10,0,5,20)
                    break
                    case '3':
                        layer.rect(0,0,25,5)
                        layer.rect(-10,0,5,20)
                        layer.rect(10,0,5,20)
                    break
                    case '4':
                        layer.rect(0,-5,15,5)
                        layer.rect(0,2.5,20,5)
                        layer.rect(0,0,5,25)
                    break
                    case '5':
                        layer.rect(0,0,5,5)
                        layer.rect(0,-7.5,20,5)
                        layer.rect(0,7.5,20,5)
                        layer.rect(-7.5,0,5,20)
                        layer.rect(7.5,0,5,20)
                    break
                }
                layer.pop()
            }
            return layer
        case 19:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(255,230,0)
            for(let a=0,la=4;a<la;a++){
                layer.arc(0,0,280,280,-22.5+a*90,22.5+a*90)
            }
            layer.fill(255,125,0)
            for(let a=0,la=4;a<la;a++){
                layer.arc(0,0,280,280,22.5+a*90,67.5+a*90)
            }
            layer.fill(150,255,0)
            layer.ellipse(0,0,200)
            for(let a=0,la=8;a<la;a++){
                layer.ellipse(0,-95,50,50)
                layer.rotate(45)
            }

            /*layer.fill(100,255,255)
            layer.quad(0,-100,-50,0,0,100,50,0)
            layer.fill(150,255,255)
            layer.quad(0,-70,-35,0,0,70,35,0)*/
            //diamond code

            /*layer.fill(160)
            layer.triangle(0,30,0,130,-40,110)
            layer.fill(120)
            layer.triangle(0,30,0,130,40,110)*/
            //mountain code

            /*layer.fill(120)
            layer.triangle(-10,40,-10,70,-40,55)
            layer.triangle(10,40,10,70,40,55)*/
            //backduck code

            /*layer.rotate(45)
            layer.fill(255,230,0)
            layer.rect(0,0,20,140)
            layer.rotate(-45)*/
            //cavalry code

            /*layer.rotate(45)
            layer.fill(255,125,0)
            layer.rect(0,0,90,10)
            layer.rect(-40,-30,10,50)
            layer.rect(40,30,10,50)
            layer.rotate(-45)*/
            //cavalry code

            /*layer.fill(120,120,240)
            layer.arc(0,0,120,120,0,90)
            layer.arc(0,0,120,120,-180,-90)
            layer.fill(0,240,240)
            layer.arc(0,0,120,120,-90,0)
            layer.arc(0,0,120,120,90,180)
            layer.fill(150,255,0)
            layer.ellipse(0,0,100)*/
            //police code

            /*layer.fill(80)
            for(let a=0,la=18;a<la;a++){
                layer.ellipse(80*sin(a*20),80*cos(a*20),10)
            }*/
            //shotgun code

            key=75
            key=(key>>>0).toString(6)
            //key='z'

            /*layer.fill(80)
            layer.rect(0,0,key.length*50+20,60,30)
            layer.fill(120)
            layer.rect(0,0,key.length*50+10,50,25)*/
            //light tank code

            /*layer.fill(120)
            layer.rect(key.length*-12.5+5,30,key.length*20-10,6,3)
            layer.rect(key.length*12.5-5,30,key.length*20-10,6,3)*/
            //motorized code

            layer.fill(200)
            layer.ellipse(key.length*25+10,-10,10)
            layer.ellipse(key.length*25+10,10,10)
            layer.ellipse(key.length*-25-10,-10,10)
            layer.ellipse(key.length*-25-10,10,10)
            layer.ellipse(key.length*25+5,-20,10)
            layer.ellipse(key.length*25+5,20,10)
            layer.ellipse(key.length*-25-5,-20,10)
            layer.ellipse(key.length*-25-5,20,10)
            //dispersal code

            for(let a=0,la=key.length;a<la;a++){
                layer.push()
                layer.translate(-la*25+25+a*50,0)
                layer.rotate(45)
                layer.fill(240)
                layer.ellipse(0,0,40)
                layer.fill(0)
                switch(key[a]){
                    case '0':
                        layer.quad(-5,0,0,-10,5,0,0,10)
                    break
                    case '1':
                        layer.rect(0,0,25,5)
                    break
                    case '2':
                        layer.rect(0,0,25,5)
                        layer.rect(-10,0,5,20)
                    break
                    case '3':
                        layer.rect(0,0,25,5)
                        layer.rect(-10,0,5,20)
                        layer.rect(10,0,5,20)
                    break
                    case '4':
                        layer.rect(0,-5,15,5)
                        layer.rect(0,2.5,20,5)
                        layer.rect(0,0,5,25)
                    break
                    case '5':
                        layer.rect(0,0,5,5)
                        layer.rect(0,-7.5,20,5)
                        layer.rect(0,7.5,20,5)
                        layer.rect(-7.5,0,5,20)
                        layer.rect(7.5,0,5,20)
                    break
                    case 'z':
                        layer.rect(0,0,21,13)
                        layer.rect(0,0,13,21)
                        layer.rect(0,0,25,8)
                        layer.rect(0,0,8,25)
                    break
                }
                layer.pop()
            }
            return layer
        case 20:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(255,0,230)
            regPoly(layer,0,0,8,150,150,22.5)
            for(let a=0,la=4;a<la;a++){
                layer.triangle(0,0,-150*sin(22.5),-150*cos(22.5),150*sin(22.5),-150*cos(22.5))
                layer.rotate(90)
            }
            layer.fill(255,0,125)
            layer.rotate(45)
            for(let a=0,la=4;a<la;a++){
                layer.triangle(0,0,-150*sin(22.5),-150*cos(22.5),150*sin(22.5),-150*cos(22.5))
                layer.rotate(90)
            }
            layer.rotate(-45)
            layer.fill(150,0,0)
            layer.ellipse(0,0,200)
            for(let a=0,la=8;a<la;a++){
                layer.triangle(0,-120,-20,-95,20,-95)
                layer.rotate(45)
            }
            layer.fill(200,0,100)
            layer.ellipse(0,0,160)
            layer.rotate(22.5)
            for(let a=0,la=8;a<la;a++){
                layer.triangle(0,-96,-16,-76,16,-76)
                layer.rotate(45)
            }
            layer.rotate(-22.5)
            key=6
            key=(key>>>0).toString(6)
            for(let a=0,la=key.length;a<la;a++){
                layer.push()
                layer.translate(-la*25+25+a*50,0)
                layer.rotate(45)
                layer.fill(0)
                layer.ellipse(0,0,40)
                layer.fill(240)
                switch(key[a]){
                    case '0':
                        layer.quad(-5,0,0,-10,5,0,0,10)
                    break
                    case '1':
                        layer.rect(0,0,25,5)
                    break
                    case '2':
                        layer.rect(0,0,25,5)
                        layer.rect(-10,0,5,20)
                    break
                    case '3':
                        layer.rect(0,0,25,5)
                        layer.rect(-10,0,5,20)
                        layer.rect(10,0,5,20)
                    break
                    case '4':
                        layer.rect(0,-5,15,5)
                        layer.rect(0,2.5,20,5)
                        layer.rect(0,0,5,25)
                    break
                    case '5':
                        layer.rect(0,0,5,5)
                        layer.rect(0,-7.5,20,5)
                        layer.rect(0,7.5,20,5)
                        layer.rect(-7.5,0,5,20)
                        layer.rect(7.5,0,5,20)
                    break
                }
                layer.pop()
            }
            return layer
        case 21:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(255,0,230)
            regPoly(layer,0,0,6,150,150,30)
            for(let a=0,la=3;a<la;a++){
                layer.triangle(0,0,-150*sin(30),-150*cos(30),150*sin(30),-150*cos(30))
                layer.rotate(120)
            }
            layer.fill(255,0,125)
            layer.rotate(60)
            for(let a=0,la=3;a<la;a++){
                layer.triangle(0,0,-150*sin(30),-150*cos(30),150*sin(30),-150*cos(30))
                layer.rotate(120)
            }
            layer.rotate(-60)
            layer.fill(150,0,0)
            layer.ellipse(0,0,200)
            for(let a=0,la=8;a<la;a++){
                layer.triangle(0,-120,-20,-95,20,-95)
                layer.rotate(45)
            }
            layer.fill(200,0,100)
            layer.ellipse(0,0,160)
            layer.rotate(22.5)
            for(let a=0,la=8;a<la;a++){
                layer.triangle(0,-96,-16,-76,16,-76)
                layer.rotate(45)
            }
            layer.rotate(-22.5)
            key=23
            key=(key>>>0).toString(6)
            for(let a=0,la=key.length;a<la;a++){
                layer.push()
                layer.translate(-la*25+25+a*50,0)
                layer.rotate(45)
                layer.fill(0)
                layer.ellipse(0,0,40)
                layer.fill(240)
                switch(key[a]){
                    case '0':
                        layer.quad(-5,0,0,-10,5,0,0,10)
                    break
                    case '1':
                        layer.rect(0,0,25,5)
                    break
                    case '2':
                        layer.rect(0,0,25,5)
                        layer.rect(-10,0,5,20)
                    break
                    case '3':
                        layer.rect(0,0,25,5)
                        layer.rect(-10,0,5,20)
                        layer.rect(10,0,5,20)
                    break
                    case '4':
                        layer.rect(0,-5,15,5)
                        layer.rect(0,2.5,20,5)
                        layer.rect(0,0,5,25)
                    break
                    case '5':
                        layer.rect(0,0,5,5)
                        layer.rect(0,-7.5,20,5)
                        layer.rect(0,7.5,20,5)
                        layer.rect(-7.5,0,5,20)
                        layer.rect(7.5,0,5,20)
                    break
                }
                layer.pop()
            }
            return layer
        case 22:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(255,0,230)
            for(let a=0,la=4;a<la;a++){
                layer.arc(0,0,280,280,-22.5+a*90,22.5+a*90)
            }
            layer.fill(255,0,125)
            for(let a=0,la=4;a<la;a++){
                layer.arc(0,0,280,280,22.5+a*90,67.5+a*90)
            }
            layer.fill(150,0,0)
            layer.ellipse(0,0,200)
            for(let a=0,la=8;a<la;a++){
                layer.triangle(0,-120,-20,-95,20,-95)
                layer.rotate(45)
            }
            layer.fill(200,0,100)
            layer.ellipse(0,0,160)
            layer.rotate(22.5)
            for(let a=0,la=8;a<la;a++){
                layer.triangle(0,-96,-16,-76,16,-76)
                layer.rotate(45)
            }
            layer.rotate(-22.5)
            key=90
            key=(key>>>0).toString(6)
            for(let a=0,la=key.length;a<la;a++){
                layer.push()
                layer.translate(-la*25+25+a*50,0)
                layer.rotate(45)
                layer.fill(0)
                layer.ellipse(0,0,40)
                layer.fill(240)
                switch(key[a]){
                    case '0':
                        layer.quad(-5,0,0,-10,5,0,0,10)
                    break
                    case '1':
                        layer.rect(0,0,25,5)
                    break
                    case '2':
                        layer.rect(0,0,25,5)
                        layer.rect(-10,0,5,20)
                    break
                    case '3':
                        layer.rect(0,0,25,5)
                        layer.rect(-10,0,5,20)
                        layer.rect(10,0,5,20)
                    break
                    case '4':
                        layer.rect(0,-5,15,5)
                        layer.rect(0,2.5,20,5)
                        layer.rect(0,0,5,25)
                    break
                    case '5':
                        layer.rect(0,0,5,5)
                        layer.rect(0,-7.5,20,5)
                        layer.rect(0,7.5,20,5)
                        layer.rect(-7.5,0,5,20)
                        layer.rect(7.5,0,5,20)
                    break
                }
                layer.pop()
            }
            return layer
        case 23:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(255,230,0)
            for(let a=0,la=3;a<la;a++){
                layer.arc(0,0,280,280,-60+a*120,a*120)
            }
            layer.fill(255,125,0)
            for(let a=0,la=3;a<la;a++){
                layer.arc(0,0,280,280,a*120,60+a*120)
            }
            layer.fill(150,255,0)
            layer.ellipse(0,0,200)
            for(let a=0,la=8;a<la;a++){
                layer.ellipse(0,-95,50,50)
                layer.rotate(45)
            }

            /*layer.fill(100,255,255)
            layer.quad(0,-100,-50,0,0,100,50,0)
            layer.fill(150,255,255)
            layer.quad(0,-70,-35,0,0,70,35,0)*/
            //diamond code

            /*layer.fill(160,200,240)
            layer.ellipse(0,50,80,30)
            for(let a=0,la=10;a<la;a++){
                layer.ellipse(40*cos(a*36),50+15*sin(a*36),32,12)
            }*/
            //airborne code

            /*layer.fill(0,240,240)
            layer.arc(0,60,60,60,45,225)
            layer.fill(240,0,0)
            layer.arc(0,60,60,60,-135,45)
            layer.fill(0,120,0)
            layer.ellipse(0,60,50)
            layer.fill(60)
            layer.quad(0,40,-10,70,0,75,10,70)*/
            //antitank code
            
            /*layer.fill(0,0,200)
            layer.quad(-35,35,-25,55,-35,75,-45,55)
            layer.quad(-20,30,-5,55,-20,80,-35,55)
            layer.quad(0,30,15,55,0,80,-15,55)
            layer.quad(20,30,35,55,20,80,5,55)
            layer.quad(35,35,25,55,35,75,45,55)*/
            //amphibious code

            /*layer.fill(80)
            layer.rect(-60,0,10,130)
            layer.rect(0,-60,130,10)
            layer.rect(0,60,130,10)*/
            //border guard code

            /*layer.stroke(40)
            layer.strokeWeight(5)
            layer.noFill()
            layer.ellipse(0,0,150)
            layer.ellipse(0,0,100,150)
            layer.ellipse(0,0,150,100)
            layer.noStroke()*/
            //fortress sphere code

            key=8
            key=(key>>>0).toString(6)

            /*layer.fill(80)
            layer.rect(0,0,key.length*50+20,60,30)*/
            //tank code

            /*layer.fill(80)
            layer.rect(0,0,key.length*50+10,60,5)
            layer.fill(150,255,0)
            layer.rect(0,0,key.length*50,50,5)*/
            //defense zone code

            /*layer.fill(120)
            layer.rect(key.length*-12.5+5,30,key.length*20-10,6,3)
            layer.rect(key.length*12.5-5,30,key.length*20-10,6,3)*/
            //motorized code

            /*layer.fill(120)
            layer.rect(key.length*25-5,30,6,6,2)
            layer.rect(key.length*25-15,30,6,6,2)
            layer.rect(key.length*25-25,30,6,6,2)
            layer.triangle(key.length*25-25,36,key.length*25-5,36,key.length*25-15,42)*/
            //motorcycle code

            layer.fill(120)
            layer.rect(0,0,key.length*50+10,50,25)
            layer.fill(160)
            layer.rect(-20,40,15,6,3)
            layer.rect(20,40,15,6,3)
            layer.rect(-40,40,15,6,3)
            layer.rect(40,40,15,6,3)
            //motorized code

            for(let a=0,la=key.length;a<la;a++){
                layer.push()
                layer.translate(-la*25+25+a*50,0)
                layer.rotate(45)
                layer.fill(240)
                layer.ellipse(0,0,40)
                layer.fill(0)
                switch(key[a]){
                    case '0':
                        layer.quad(-5,0,0,-10,5,0,0,10)
                    break
                    case '1':
                        layer.rect(0,0,25,5)
                    break
                    case '2':
                        layer.rect(0,0,25,5)
                        layer.rect(-10,0,5,20)
                    break
                    case '3':
                        layer.rect(0,0,25,5)
                        layer.rect(-10,0,5,20)
                        layer.rect(10,0,5,20)
                    break
                    case '4':
                        layer.rect(0,-5,15,5)
                        layer.rect(0,2.5,20,5)
                        layer.rect(0,0,5,25)
                    break
                    case '5':
                        layer.rect(0,0,5,5)
                        layer.rect(0,-7.5,20,5)
                        layer.rect(0,7.5,20,5)
                        layer.rect(-7.5,0,5,20)
                        layer.rect(7.5,0,5,20)
                    break
                }
                layer.pop()
            }
            return layer
        case 24:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(255,230,0)
            regPoly(layer,0,0,10,150,150,18)
            for(let a=0,la=5;a<la;a++){
                layer.triangle(0,0,-150*sin(18),-150*cos(18),150*sin(18),-150*cos(18))
                layer.rotate(72)
            }
            layer.fill(255,125,0)
            layer.rotate(36)
            for(let a=0,la=5;a<la;a++){
                layer.triangle(0,0,-150*sin(18),-150*cos(18),150*sin(18),-150*cos(18))
                layer.rotate(72)
            }
            layer.rotate(-36)
            layer.fill(150,255,0)
            layer.ellipse(0,0,200)
            for(let a=0,la=8;a<la;a++){
                layer.triangle(0,-120,-20,-95,20,-95)
                layer.rotate(45)
            }
            layer.fill(240)
            layer.quad(-80,0,0,-80,0,80,80,0)
            layer.fill(160,200,240)
            layer.quad(-80,0,0,80,0,-80,80,0)
            layer.fill(240)
            layer.quad(-60,0,0,60,0,-60,60,0)
            layer.fill(160,200,240)
            layer.quad(-60,0,0,-60,0,60,60,0)
            return layer
        case 25:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(0,100,200)
            layer.arc(0,0,270,270,-180,0)
            layer.fill(240)
            layer.arc(0,0,270,270,0,180)
            layer.fill(120,40,40)
            layer.ellipse(0,0,60)
            layer.fill(40)
            //layer.rect(0,0,10,120)
            //layer.quad(-40,-60,-30,-60,40,60,30,60)
            //layer.quad(-40,60,-30,60,40,-60,30,-60)
            //layer.rect(-20,0,10,120)
            //layer.rect(20,0,10,120)
            //layer.rect(0,-60,100,10)
            //layer.rect(0,60,100,10)
            layer.rect(0,0,140,10)
            layer.rect(-70,0,10,60)
            layer.rect(70,0,10,60)
            layer.quad(-75,-63,-75,-50,75,63,75,50)
            return layer
        case 26:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(200,0,40)
            layer.ellipse(0,0,270)
            layer.fill(250,200,20)
            layer.ellipse(0,0,240)
            layer.fill(0,40,120)
            layer.ellipse(0,0,210)
            layer.fill(240)
            layer.ellipse(0,0,180)

            /*layer.stroke(80,120,160)
            layer.strokeWeight(10)
            layer.line(25,-40,25,40)
            layer.line(-30,-40,10,40)
            layer.line(10,-40,-30,40)*/

            /*layer.fill(240,240,0)
            layer.arc(0,0,120,120,30,210)
            layer.fill(120,240,240)
            layer.arc(0,0,120,120,-150,30)*/
            //cavalry corps

            return layer
        case 27:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(200,0,40)
            regPoly(layer,0,0,6,145,145,30)
            layer.fill(250,200,20)
            regPoly(layer,0,0,6,125,125,30)
            layer.fill(0,40,120)
            regPoly(layer,0,0,6,105,105,30)
            layer.fill(240)
            regPoly(layer,0,0,6,85,85,30)

            layer.stroke(80,120,160)
            layer.strokeWeight(10)
            layer.line(-25,-40,-25,40)
            layer.line(30,-40,10,40)
            layer.line(-10,-40,10,40)

            return layer
        case 28:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(200,0,40)
            regPoly(layer,0,0,8,145,145,0)
            layer.fill(250,200,20)
            regPoly(layer,0,0,8,125,125,0)
            layer.fill(0,40,120)
            regPoly(layer,0,0,8,105,105,0)
            layer.fill(240)
            regPoly(layer,0,0,8,85,85,0)

            //layer.scale(0.8)

            /*layer.fill(240,240,0)
            layer.arc(0,0,120,120,30,210)
            layer.fill(120,240,240)
            layer.arc(0,0,120,120,-150,30)*/
            //cavalry division

            layer.fill(100)
            layer.arc(0,0,140,140,0,180)
            layer.fill(120)
            layer.arc(0,0,124,124,100,280)
            layer.fill(140)
            layer.arc(0,0,106,106,200,380)
            layer.fill(160)
            layer.arc(0,0,86,86,300,480)
            layer.fill(180)
            layer.arc(0,0,64,64,400,580)
            layer.fill(200)
            layer.arc(0,0,40,40,500,680)
            //tank division

            layer.stroke(80,120,160)
            layer.strokeWeight(10)
            
            //layer.line(-75,-40,-35,40)
            //layer.line(-35,-40,-75,40)
            
            //layer.line(-20,-40,0,40)
            //layer.line(20,-40,0,40)
            //layer.line(35,-40,35,40)
            //layer.line(55,-40,55,40)
            //layer.line(75,-40,75,40)

            /*layer.line(0,-40,0,40)
            layer.line(-55,-40,-15,40)
            layer.line(-15,-40,-55,40)
            layer.line(55,-40,15,40)
            layer.line(15,-40,55,40)*/

            /*layer.line(-40,-40,-20,40)
            layer.line(0,-40,-20,40)
            layer.line(20,-40,20,40)
            layer.line(40,-40,40,40)*/

            layer.line(0,-40,0,40)
            
            return layer
        case 29:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(200,0,40)
            regPoly(layer,0,0,12,145,145,0)
            layer.fill(250,200,20)
            regPoly(layer,0,0,12,125,125,0)
            layer.fill(0,40,120)
            regPoly(layer,0,0,12,105,105,0)
            layer.fill(240)
            regPoly(layer,0,0,12,85,85,0)

            layer.fill(120)
            layer.rect(-30,0,20,120)
            layer.rect(30,0,20,120)
            layer.rect(0,-30,120,20)
            layer.rect(0,30,120,20)

            layer.stroke(80,120,160)
            layer.strokeWeight(10)
            layer.line(-10,-40,-10,40)
            layer.line(10,-40,10,40)

            return layer
        case 30:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            //layer.fill(240,240,80)
            layer.fill(240,80,80)
            layer.ellipse(0,0,240)
            //layer.fill(160,160,0)
            layer.fill(160,0,0)
            for(let a=0,la=4;a<la;a++){
                layer.arc(0,0,240,240,-15+a*90,15+a*90)
            }
            layer.fill(255)
            layer.quad(150,-120,150,-75,-150,120,-150,75)
            //layer.quad(-150,-120,-150,-75,150,120,150,75)

            return layer
        case 31:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            //layer.fill(240,240,80)
            layer.fill(240,80,80)
            layer.ellipse(0,0,240)
            layer.fill(255)
            //layer.rotate(60)
            layer.rotate(-20)
            layer.quad(-140,0,0,-10,140,0,0,10)
            layer.rotate(-10)
            layer.quad(-160,0,0,-20,160,0,0,20)
            layer.rotate(-10)
            layer.quad(-140,0,0,-10,140,0,0,10)

            return layer
        case 32:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(240,240,80)
            layer.ellipse(0,0,240)
            layer.fill(255)
            //layer.rotate(-30)
            layer.rotate(30)
            layer.rect(0,0,400,20)
            for(let a=0,la=13;a<la;a++){
                layer.rect(-165+a*30,0,12,48)
            }

            return layer
        case 33:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(0,140,70)
            layer.rect(-100,0,100,300)
            layer.fill(250,250,250)
            layer.rect(0,0,100,300)
            layer.fill(200,40,40)
            layer.rect(100,0,100,300)

            /*layer.rotate(45)
            layer.fill(0,100,255)
            layer.rect(0,0,50,300)
            layer.fill(255,50,50)
            layer.rect(0,0,10,300)
            layer.rect(0,0,300,10)*/
            //army of the po

            /*layer.fill(120)
            layer.rect(0,0,180,80,40)
            for(let a=0,la=5;a<la;a++){
                layer.rect(-50+(a+1)*100/6,-45,10,10)
                layer.rect(-50+(a+1)*100/6,45,10,10)
            }

            layer.translate(50,0)
            for(let a=0,la=9;a<la;a++){
                layer.rect(0,-43,10,14)
                layer.rotate(22.5)
            }
            layer.rotate(-202.5)

            layer.translate(-100,0)
            for(let a=0,la=9;a<la;a++){
                layer.rect(0,43,10,14)
                layer.rotate(22.5)
            }
            layer.rotate(-202.5)
            layer.translate(50,0)

            layer.fill(80)
            layer.rect(0,0,160,60,30)*/
            //armored corps

            layer.erase(1,1)
            layer.stroke(0)
            layer.strokeWeight(100)
            layer.noFill()
            layer.ellipse(0,0,360)

            /*layer.noStroke()
            layer.noErase()
            layer.fill(80)
            layer.ellipse(0,0,180)

            sublayer=createGraphics(200,200)
            setupLayer(sublayer)
            sublayer.translate(sublayer.width/2,sublayer.height/2)

            sublayer.fill(250)
            sublayer.rect(0,0,200,200)
            sublayer.fill(0,150,255)
            sublayer.rect(0,-40,30,10)
            sublayer.rect(-10,-30,10,30)
            sublayer.rect(10,-30,10,30)
            sublayer.rect(-105,-20,190,10)
            sublayer.rect(105,-20,190,10)

            sublayer.rect(0,0,200,10)
            sublayer.rect(0,20,200,10)

            sublayer.erase(1,1)
            sublayer.stroke(0)
            sublayer.strokeWeight(80)
            sublayer.noFill()
            sublayer.ellipse(0,0,240)

            layer.image(sublayer,0,0)*/
            //17th army corps

            layer.noStroke()
            layer.noErase()
            layer.fill(80)
            layer.ellipse(0,0,180)

            layer.fill(255,50,50)
            layer.arc(0,0,160,160,-180,0)
            layer.fill(40)
            layer.arc(0,0,160,160,0,180)
            layer.fill(255,200,0)
            layer.ellipse(0,0,40)
            layer.fill(0)
            for(let a=0,la=4;a<la;a++){
                layer.quad(0,0,25,35,40,40,35,25)
                layer.rotate(90)
            }

            return layer
        case 34:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(0,100,200)
            layer.quad(-10,-10,130,-130,10,10,-130,130)
            //elite

            layer.fill(0,0,200)
            layer.beginShape()
            layer.vertex(120,120)
            layer.vertex(-10,120)
            layer.vertex(-120,10)
            layer.vertex(-120,-120)
            layer.vertex(10,-120)
            layer.vertex(120,-10)
            layer.endShape()
            
            layer.fill(150,0,200)
            layer.beginShape()
            layer.vertex(140,140)
            layer.vertex(40,140)
            layer.vertex(-140,-40)
            layer.vertex(-140,-140)
            layer.vertex(-40,-140)
            layer.vertex(140,40)
            layer.endShape()
            
            layer.fill(200,0,150)
            layer.beginShape()
            layer.vertex(140,140)
            layer.vertex(80,140)
            layer.vertex(-140,-80)
            layer.vertex(-140,-140)
            layer.vertex(-80,-140)
            layer.vertex(140,80)
            layer.endShape()

            layer.fill(0,100,200)
            layer.quad(-5,5,130,130,5,-5,-130,-130)
            //elite

            layer.fill(255,100,255)
            for(let a=0,la=1;a<la;a++){
                layer.ellipse(-la*10+10+a*20,-la*10+10+a*20,20)
            }

            return layer
        case 35:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.rotate(45)

            layer.fill(0,0,200)
            layer.rect(0,0,300,140,70)
            for(let a=0,la=8;a<la;a++){
                layer.triangle(-80+a*20,-70,-60+a*20,-70,-70+a*20,-75)
                layer.triangle(-80+a*20,70,-60+a*20,70,-70+a*20,75)
            }
            
            layer.fill(150,0,200)
            layer.rect(0,0,360,100,50)
            for(let a=0,la=13;a<la;a++){
                layer.triangle(-130+a*20,-50,-110+a*20,-50,-120+a*20,-55)
                layer.triangle(-130+a*20,50,-110+a*20,50,-120+a*20,55)
            }
            
            layer.fill(200,0,150)
            layer.rect(0,0,380,60,30)
            for(let a=0,la=16;a<la;a++){
                layer.triangle(-160+a*20,-30,-140+a*20,-30,-150+a*20,-35)
                layer.triangle(-160+a*20,30,-140+a*20,30,-150+a*20,35)
            }

            layer.rotate(-45)
            layer.fill(255,100,255)
            for(let a=0,la=4;a<la;a++){
                layer.ellipse(-la*10+10+a*20,-la*10+10+a*20,20)
            }

            return layer
        case 36:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            let sizescale=3
            //0-army group
            //1-army
            //2-corps
            //3-division
            //4-brigade
            let numerical=2
            let classes=[13]
            //0-SOF
            //1-supported
            //2-merged
            //3-metric
            //4-mixed metric
            //5-engineer
            //6-backtofront
            //7-armored car
            //8-elite tank
            //9-militia
            //10-star
            //11-motorcycle
            //12-partial motorized
            //13-MSB

            layer.fill(60)
            layer.rect(0,0,280,10)
            for(let a=0,la=sizescale;a<la;a++){
                layer.rect(125-a*20,0,10,50)
            }
            for(let a=0,la=numerical;a<la;a++){
                layer.ellipse(125-sizescale*20-a*20,-20,15)
            }
            let bar=0
            for(let a=0,la=classes.length;a<la;a++){
                switch(classes[a]){
                    case 0:
                        layer.rect(-125+bar,-20,30,10)
                        layer.rect(-125+bar,-40,30,10)
                        layer.rect(-125+bar,-60,30,10)
                        layer.rect(-135+bar,-50,10,30)
                        layer.rect(-115+bar,-30,10,30)

                        layer.rect(-85+bar,-20,30,10)
                        layer.rect(-85+bar,-60,30,10)
                        layer.rect(-95+bar,-40,10,50)
                        layer.rect(-75+bar,-40,10,50)

                        layer.rect(-45+bar,-40,30,10)
                        layer.rect(-45+bar,-60,30,10)
                        layer.rect(-55+bar,-40,10,50)
                    break
                    case 1:
                        layer.rect(-135+bar,-30,10,30)
                        layer.rect(-120+bar,-40,10,50)
                        layer.rect(-105+bar,-30,10,30)
                    break
                    case 2:
                        layer.rect(-115+bar,-25,10,80)
                        layer.rect(-115+bar,-20,50,10)
                        layer.rect(-115+bar,-35,30,10)
                        layer.rect(-115+bar,-50,50,10)
                    break
                    case 3:
                        layer.rect(-115+bar,-20,50,10)
                        layer.rect(-115+bar,-35,30,10)
                        layer.rect(-115+bar,-50,50,10)
                        bar+=60
                    break
                    case 4:
                        layer.rect(-95+bar,-20,50,10)
                        layer.rect(-95+bar,-35,30,10)
                        layer.rect(-95+bar,-50,50,10)
                        layer.rect(-135+bar,-35,10,40)
                        layer.rect(-55+bar,-35,10,40)
                    break
                    case 5:
                        layer.rect(-135+bar,-30,10,30)
                        layer.rect(-115+bar,-30,10,30)
                        layer.rect(-95+bar,-30,10,30)
                        layer.rect(-115+bar,-40,50,10)
                    break
                    case 6:
                        layer.rect(-135+bar,-40,10,50)
                        layer.rect(-120+bar,-40,10,30)
                        layer.rect(-105+bar,-40,10,10)
                        layer.rect(-90+bar,-40,10,30)
                        layer.rect(-75+bar,-40,10,50)
                    break
                    case 7:
                        layer.rect(-95+bar,-60,10,30)
                        layer.rect(-135+bar,-60,10,30)
                        layer.rect(-115+bar,-50,50,10)
                        layer.rect(-115+bar,-70,50,10)
                        layer.rect(-115+bar,-60,10,50)
                        layer.ellipse(-135+bar,-20,15)
                        layer.ellipse(-115+bar,-20,15)
                        layer.ellipse(-95+bar,-20,15)
                    break
                    case 8:
                        layer.rect(-95+bar,-30,10,30)
                        layer.rect(-135+bar,-30,10,30)
                        layer.rect(-115+bar,-20,50,10)
                        layer.rect(-115+bar,-40,50,10)
                        layer.rect(-115+bar,-55,50,10)
                        layer.rect(-115+bar,-70,30,10)
                    break
                    case 9:
                        layer.rect(-110+bar,-20,30,10)
                        layer.rect(-110+bar,-35,60,10)
                        layer.rect(-110+bar,-50,40,10)
                        layer.rect(-110+bar,-65,10,10)
                    break
                    case 10:
                        layer.rect(-115+bar,-35,50,10)
                        layer.rect(-125+bar,-20,10,10)
                        layer.rect(-125+bar,-50,10,10)
                        layer.rect(-105+bar,-20,10,10)
                        layer.rect(-105+bar,-50,10,10)
                    break
                    case 11:
                        layer.rect(-135+bar,-30,10,30)
                        layer.rect(-115+bar,-40,50,10)
                        layer.rect(-95+bar,-50,10,30)
                        layer.ellipse(-115+bar,-20,15)
                    break
                    case 12:
                        layer.ellipse(-135+bar,-20,15)
                        layer.ellipse(-115+bar,-40,15)
                        layer.rect(-115+bar,-20,10,10)
                    break
                    case 13:
                        layer.ellipse(-125+bar,-20,15)
                        layer.ellipse(-105+bar,-20,15)
                        layer.ellipse(-135+bar,-37.5,15)
                        layer.ellipse(-115+bar,-37.5,15)
                        layer.ellipse(-95+bar,-37.5,15)
                        layer.ellipse(-125+bar,-55,15)
                        layer.ellipse(-105+bar,-55,15)
                    break
                }
            }


            return layer
        case 37:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(0)
            layer.rect(0,-60,200,40)
            layer.arc(0,-80,200,60,-180,0)
            layer.arc(0,-40,200,320,0,180)
            layer.fill(240)
            layer.rect(0,-60,195,40)
            layer.arc(0,-80,195,55,-180,0)
            layer.arc(0,-40,195,315,0,180)
            layer.fill(40)

            layer.beginShape()
            layer.vertex(-60,-60)
            layer.vertex(-50,-50)
            layer.vertex(-60,-40)
            layer.vertex(60,-40)
            layer.vertex(50,-50)
            layer.vertex(60,-60)
            layer.endShape()

            layer.beginShape()
            layer.vertex(-40,-20)
            layer.vertex(-30,-10)
            layer.vertex(-40,0)
            layer.vertex(40,0)
            layer.vertex(30,-10)
            layer.vertex(40,-20)
            layer.endShape()

            layer.beginShape()
            layer.vertex(-60,20)
            layer.vertex(-50,30)
            layer.vertex(-60,40)
            layer.vertex(60,40)
            layer.vertex(50,30)
            layer.vertex(60,20)
            layer.endShape()

            return layer
        case 38:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(0)
            layer.rect(0,-50,200,80)
            layer.arc(0,-90,200,40,-180,0)
            layer.arc(0,-10,200,280,0,180)
            layer.fill(240)
            layer.rect(0,-50,195,80)
            layer.arc(0,-90,195,35,-180,0)
            layer.arc(0,-10,195,275,0,180)

            /*layer.noFill()
            layer.stroke(0)
            layer.strokeWeight(20)
            layer.strokeCap(PROJECT)
            layer.arc(-50,0,100,100,-90,90)
            layer.arc(50,0,100,100,90,270)
            layer.line(-55,-50,-55,50)
            layer.line(55,-50,55,50)
            layer.line(-55,0,55,0)
            layer.stroke(255)
            layer.strokeWeight(15)
            layer.arc(-50,0,100,100,-90,90)
            layer.arc(50,0,100,100,90,270)
            layer.line(-55,-50,-55,50)
            layer.line(55,-50,55,50)
            layer.line(-55,0,55,0)*/
            //950

            /*layer.fill(0)
            layer.ellipse(50,50,30)
            layer.ellipse(50,-50,30)
            layer.ellipse(-50,50,30)
            layer.rect(0,50,80,20)
            layer.rect(50,0,20,80)
            layer.rect(15,-50,50,20)
            layer.rect(-50,15,20,50)
            layer.triangle(-10,-70,-10,-30,-40,-50)
            layer.triangle(-70,-10,-30,-10,-50,-40)
            layer.fill(255)
            layer.ellipse(50,50,25)
            layer.ellipse(50,-50,25)
            layer.ellipse(-50,50,25)
            layer.rect(0,50,80,15)
            layer.rect(50,0,15,80)
            layer.rect(10,-50,60,15)
            layer.rect(-50,10,15,60)
            layer.triangle(-12.5,-65,-12.5,-35,-36,-50)
            layer.triangle(-65,-12.5,-35,-12.5,-50,-36)*/
            //521

            return layer
        case 39:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            /*layer.stroke(0)
            layer.strokeWeight(20)
            layer.noFill()
            layer.strokeCap(PROJECT)
            layer.arc(110,-60,120,120,90,270)
            layer.arc(110,60,120,120,90,270)
            layer.arc(-110,-60,120,120,-90,90)
            layer.arc(-110,60,120,120,-90,90)
            layer.line(0,-100,0,100)*/
            //313

            layer.fill(0)
            layer.quad(-32,-90,-10,-90,-53,60,-75,60)
            layer.quad(88,-90,110,-90,67,60,45,60)

            layer.stroke(0)
            layer.strokeWeight(20)
            layer.noFill()
            layer.strokeCap(PROJECT)
            layer.arc(-60,60,120,120,0,180)
            layer.arc(60,60,120,120,0,180)

            layer.line(-100,-100,-20,-100)
            layer.line(100,-100,20,-100)

            //773

            return layer
        case 40:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(0)
            layer.triangle(-50,-50,50,-50,0,-140)
            layer.triangle(-50,-50,-50,50,-140,0)
            layer.triangle(-50,50,50,50,0,140)
            layer.triangle(50,-50,50,50,140,0)
            layer.quad(0,-45,-45,0,0,45,45,0)
            layer.fill(255)
            layer.triangle(-45,-53,45,-53,0,-135)
            layer.triangle(-45,53,45,53,0,135)
            layer.quad(0,-41,-41,0,0,41,41,0)
            layer.ellipse(-80,0,20)
            layer.ellipse(80,0,20)
            layer.fill(0)
            layer.ellipse(0,0,20)
            layer.ellipse(0,-80,20)
            layer.ellipse(0,80,20)

            return layer
        case 41:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 42:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 43:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 44:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 45:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 46:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 47:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 48:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 49:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 50:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 51:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 52:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 53:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 54:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 55:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 56:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 57:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 58:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 59:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 60:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
    }
    return 0
}