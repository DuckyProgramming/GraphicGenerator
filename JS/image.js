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
            return layer
        case 31:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 32:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 33:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 34:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 35:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 36:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 37:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 38:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 39:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 40:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
    }
    return 0
}