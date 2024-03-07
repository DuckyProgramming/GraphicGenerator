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

            /*layer.fill(100)
            for(let a=0,la=8;a<la;a++){
                layer.ellipse(0,-95,60)
                layer.rotate(45)
            }*/
            //breakthrough artillery code

            layer.fill(150,255,0)
            for(let a=0,la=8;a<la;a++){
                layer.ellipse(0,-95,50,50)
                layer.rotate(45)
            }

            /*layer.fill(100)
            for(let a=0,la=8;a<la;a++){
                layer.arc(0,0,204,204,-15+a*45,15+a*45)
            }*/
            //breakthrough artillery code

            layer.fill(150,255,0)
            layer.ellipse(0,0,200)

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

            /*layer.fill(0,200,255)
            layer.quad(0,0,-80,-10,-80,-30)
            layer.quad(0,0,-80,10,-80,30)
            layer.quad(0,0,80,-10,80,-30)
            layer.quad(0,0,80,10,80,30)
            layer.ellipse(0,0,20)*/
            //support group code

            key=2
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

            /*layer.fill(100)
            for(let a=0,la=8;a<la;a++){
                layer.ellipse(0,-95,60)
                layer.rotate(45)
            }*/
            //breakthrough artillery code

            layer.fill(150,255,0)
            for(let a=0,la=8;a<la;a++){
                layer.ellipse(0,-95,50,50)
                layer.rotate(45)
            }

            /*layer.fill(100)
            for(let a=0,la=8;a<la;a++){
                layer.arc(0,0,204,204,-15+a*45,15+a*45)
            }*/
            //breakthrough artillery code

            /*for(let a=0,la=8;a<la;a++){
                layer.fill(180,60,30)
                layer.triangle(0,-115,-10,-95,10,-95)
                layer.fill(240,90,60)
                layer.triangle(0,-115,-5,-95,5,-95)
                layer.fill(120,30,0)
                layer.ellipse(0,-114,4)
                layer.rotate(45)
            }*/
            //mortar code

            layer.fill(150,255,0)
            layer.ellipse(0,0,200)

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

            key=3
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

            /*layer.fill(200)
            layer.ellipse(key.length*25+10,-10,10)
            layer.ellipse(key.length*25+10,10,10)
            layer.ellipse(key.length*-25-10,-10,10)
            layer.ellipse(key.length*-25-10,10,10)
            layer.ellipse(key.length*25+5,-20,10)
            layer.ellipse(key.length*25+5,20,10)
            layer.ellipse(key.length*-25-5,-20,10)
            layer.ellipse(key.length*-25-5,20,10)*/
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

            /*layer.fill(120)
            layer.rect(0,0,key.length*50+10,50,25)
            layer.fill(160)
            layer.rect(-20,40,15,6,3)
            layer.rect(20,40,15,6,3)
            layer.rect(-40,40,15,6,3)
            layer.rect(40,40,15,6,3)*/
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
            //layer.rect(0,0,140,10)
            //layer.rect(-70,0,10,60)
            //layer.rect(70,0,10,60)
            //layer.quad(-75,-63,-75,-50,75,63,75,50)

            layer.rect(0,0,10,180)
            layer.rect(0,85,120,10)
            layer.quad(-40,0,-40,-10,40,-50,40,-40)
            layer.quad(40,0,40,-10,-40,-50,-40,-40)

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

            /*layer.fill(255)
            layer.stroke(0)
            layer.strokeWeight(2)
            layer.beginShape()
            layer.vertex(-15,-62.5)
            layer.vertex(-15,-90)
            layer.vertex(-30,-90)
            layer.vertex(-30,-10)
            layer.vertex(-15,-10)
            layer.vertex(-15,-37.5)
            layer.vertex(12.5,-10)
            layer.vertex(32.5,-10)
            layer.vertex(-7.5,-50)
            layer.vertex(32.5,-90)
            layer.vertex(12.5,-90)
            layer.endShape(CLOSE)

            layer.beginShape()
            layer.vertex(17.5,90)
            layer.vertex(35,90)
            layer.vertex(10,50)
            layer.vertex(35,10)
            layer.vertex(17.5,10)
            layer.vertex(0,37.5)
            layer.vertex(-17.5,10)
            layer.vertex(-35,10)
            layer.vertex(-10,50)
            layer.vertex(-35,90)
            layer.vertex(-17.5,90)
            layer.vertex(0,62.5)
            layer.endShape(CLOSE)*/
            //810

            /*layer.fill(0)
            layer.rect(0,-60,120,14)
            layer.rect(0,0,120,14)
            layer.rect(0,60,120,14)
            layer.rect(-53,-72,14,35)
            layer.rect(-53,-12,14,35)
            layer.rect(-53,48,14,35)
            layer.rect(53,-48,14,35)
            layer.rect(53,12,14,35)
            layer.rect(53,72,14,35)
            layer.rect(0,-60,14,42)
            layer.rect(0,0,14,42)
            layer.rect(0,60,14,42)

            layer.fill(0,255,50)
            layer.rect(0,-60,116,10)
            layer.rect(-53,-72,10,31)
            layer.rect(53,-48,10,31)
            layer.rect(0,-60,10,38)

            layer.fill(0,150,200)
            layer.rect(0,0,116,10)
            layer.rect(-53,-12,10,31)
            layer.rect(53,12,10,31)
            layer.rect(0,0,10,38)

            layer.fill(50,0,255)
            layer.rect(0,60,116,10)
            layer.rect(-53,48,10,31)
            layer.rect(53,72,10,31)
            layer.rect(0,60,10,38)*/
            //165

            /*layer.fill(0)
            layer.rect(-30,-10,25,120)
            layer.rect(30,10,25,120)
            layer.ellipse(-30,50,40)
            layer.ellipse(30,-50,40)
            layer.translate(-30,50)
            for(let a=0,la=10;a<la;a++){
                layer.triangle(-18,-6,-18,6,-30,0)
                layer.rotate(36)
            }
            layer.translate(60,-100)
            for(let a=0,la=10;a<la;a++){
                layer.triangle(-18,-6,-18,6,-30,0)
                layer.rotate(36)
            }*/
            //274

            /*layer.noFill()
            layer.stroke(0)
            layer.strokeWeight(3)
            layer.ellipse(0,0,65,65)
            layer.ellipse(0,0,90,90)
            layer.quad(0,0,10,90,0,80,-10,90)
            layer.quad(0,0,10,-90,0,-80,-10,-90)*/
            //326

            /*layer.stroke(0)
            layer.strokeWeight(3)
            layer.fill(150,255,150)
            layer.arc(-65,60,270,270,-24,0)
            layer.line(-65,60,70,60)
            layer.line(-65,60,-65+cos(24)*135,60-sin(24)*135)
            layer.fill(255,200,200)
            layer.arc(-69,54,270,270,-57,-33)
            layer.line(-69,54,-69+cos(33)*135,54-sin(33)*135)
            layer.line(-69,54,-69+cos(57)*135,54-sin(57)*135)
            layer.fill(150,255,255)
            layer.arc(-75,50,270,270,-90,-66)
            layer.line(-75,50,-75,-85)
            layer.line(-75,50,-75+cos(66)*135,50-sin(66)*135)*/
            //545

            /*layer.fill(0)
            layer.ellipse(25,80,36)
            layer.ellipse(-50,5,36)
            layer.ellipse(25,-70,36)
            layer.rect(25,50,24,60)
            layer.triangle(5,20,45,20,25,-10)
            layer.stroke(0)
            layer.strokeWeight(24)
            layer.line(25,80,-50,5)
            layer.line(25,-70,-50,5)
            layer.noStroke()
            layer.fill(255)
            layer.ellipse(25,80,31)
            layer.ellipse(-50,5,31)
            layer.ellipse(25,-70,31)
            layer.rect(25,47,19,66)
            layer.triangle(10,17.5,40,17.5,25,-5.5)
            layer.stroke(255)
            layer.strokeWeight(19)
            layer.line(25,80,-50,5)
            layer.line(25,-70,-50,5)*/
            //551

            /*layer.translate(-70,60)
            layer.rotate(-7.5)
            for(let a=0,la=6;a<la;a++){
                layer.fill(0)
                layer.triangle(0,0,135,15,135,-15)
                layer.arc(135,0,30,30,-90,90)
                layer.fill(255)
                layer.triangle(20,0,135,13,135,-13)
                layer.arc(135,0,26,26,-90,90)              
                layer.fill(95,175,20)
                layer.arc(135,0,26,26,-90,90)
                for(let b=0,lb=30;b<lb;b++){
                    layer.fill(95+b*8,175+b*4,20+b*23.5/2)
                    layer.quad(
                        136-b*2,-13+b*26/115,
                        136-b*2,13-b*26/115,
                        133-b*2,13-(b+1)*26/115,
                        133-b*2,-13+(b+1)*26/115
                    )
                }
                layer.rotate(-15)
            }*/
            //601

            /*layer.stroke(0)
            layer.strokeWeight(4)
            layer.fill(255)
            layer.textSize(200)
            layer.text('&',0,20)*/
            //738
            
            /*layer.stroke(0)
            layer.strokeWeight(4)
            layer.fill(255)
            layer.textSize(160)
            layer.text('@',0,0)*/
            //748

            /*layer.strokeCap(PROJECT)
            layer.noFill()

            layer.stroke(0)
            layer.strokeWeight(20)
            layer.line(0,-80,0,80)
            layer.arc(-10,-30,100,100,-135,-90)
            layer.arc(-10,30,100,100,-135,-90)
            layer.arc(-10,90,100,100,-135,-90)
            layer.arc(10,-90,100,100,45,90)
            layer.arc(10,-30,100,100,45,90)
            layer.arc(10,30,100,100,45,90)

            layer.stroke(200,255,100)
            layer.strokeWeight(16)
            layer.line(0,-80,0,80)
            layer.arc(-10,-30,100,100,-135,-90)
            layer.arc(-10,30,100,100,-135,-90)
            layer.arc(-10,90,100,100,-135,-90)
            layer.arc(10,-90,100,100,45,90)
            layer.arc(10,-30,100,100,45,90)
            layer.arc(10,30,100,100,45,90)*/
            //761

            /*layer.fill(100)
            layer.rect(0,-50,195,80)
            layer.arc(0,-90,195,35,-180,0)
            layer.arc(0,-10,195,275,0,180)
            layer.fill(200,50,50)
            layer.arc(0,-90,195,35,-180,80)
            layer.rect(-196/7*3,-50,196/7,80)
            layer.rect(-196/7*2,-30,196/7,120)
            layer.rect(-196/7,-50,196/7,80)
            layer.rect(0,-70,196/7,40)
            layer.rect(196/7,-50,196/7,80)
            layer.rect(196/7*2,-30,196/7,120)
            layer.rect(196/7*3,-50,196/7,80)*/
            //918

            /*layer.fill(255,150,0)
            layer.quad(-40,-30,-40,-40,20,-80,20,-70)
            layer.quad(-40,-30,-25,-30,20,-60,20,-75)

            layer.quad(-10,-20,20,-40,20,-20,-10,0)
            layer.quad(-10,20,20,0,20,20,-10,40)
            layer.quad(-10,60,20,40,20,60,-10,80)
            layer.triangle(5,90,20,80,20,100)

            layer.stroke(0)
            layer.strokeWeight(3)
            layer.noFill()
            layer.beginShape()
            layer.vertex(-10,80)
            layer.vertex(20,100)
            layer.vertex(20,-80)
            layer.vertex(-40,-40)
            layer.vertex(-40,-30)
            layer.vertex(-10,-30)
            layer.endShape(CLOSE)*/
            //262

            /*layer.fill(0)
            for(let b=0,lb=5;b<lb;b++){
                for(let a=0,la=3-b%2;a<la;a++){
                    if(a==1||b!=4){
                        layer.push()
                        layer.translate(-60+a*60+b%2*30,-70+b*40)
                        layer.rect(0,0,4,40)
                        layer.rect(0,0,40,4)
                        layer.rotate(45)
                        layer.rect(0,0,3,30)
                        layer.rect(0,0,30,3)
                        layer.pop()
                    }
                }
            }*/
            //1553

            /*layer.rotate(-15)
            layer.stroke(0)
            layer.strokeWeight(3)
            layer.noFill()
            layer.beginShape()
            layer.vertex(-25,-80)
            layer.vertex(-25,-70)
            layer.vertex(-15,-65)
            for(let a=0,la=8;a<la;a++){
                layer.vertex(-15+15*(a+0.4)/(la+1),-65+165*(a+0.4)/(la+1))
                layer.vertex(-15+15*(a+0.6)/(la+1)-6.6,-65+165*(a+0.6)/(la+1)-0.6)
                layer.vertex(-15+15*(a+0.8)/(la+1),-65+165*(a+0.8)/(la+1))
            }
            layer.vertex(0,100)
            for(let a=0,la=8;a<la;a++){
                layer.vertex(15*(a+1.2)/(la+1),100-165*(a+1.2)/(la+1))
                layer.vertex(15*(a+1.4)/(la+1)+6.6,100-165*(a+1.4)/(la+1)-0.6)
                layer.vertex(15*(a+1.6)/(la+1),100-165*(a+1.6)/(la+1))
            }
            layer.vertex(15,-65)
            layer.vertex(25,-70)
            layer.vertex(25,-80)
            layer.endShape(CLOSE)*/
            //282

            /*layer.fill(80,0,160)
            layer.stroke(0)
            layer.strokeWeight(2)
            layer.beginShape()
            for(let a=0,la=36;a<la;a++){
                if(a%2==0){
                    layer.vertex(sin(a/la*360)*80,cos(a/la*360)*80)
                    layer.vertex(sin((a+0.3)/la*360)*70,cos((a+0.3)/la*360)*70)
                }else{
                    layer.bezierVertex(
                        sin((a-0.2)/la*360)*75,cos((a-0.2)/la*360)*75,
                        sin((a+0.2)/la*360)*75,cos((a+0.2)/la*360)*75,
                        sin((a+0.7)/la*360)*70,cos((a+0.7)/la*360)*70
                    )
                }
            }
            layer.endShape()

            layer.fill(255)
            layer.noStroke()
            for(let a=0,la=18;a<la;a++){
                layer.ellipse(0,-60,5)
                layer.rotate(360/la)
            }
            for(let a=0,la=6;a<la;a++){
                layer.ellipse(0,-45,7)
                layer.ellipse(7,-43,4)
                layer.ellipse(-7,-43,4)
                layer.rotate(360/la)
            }*/
            //390

            /*sublayer=createGraphics(300,300)
            setupLayer(sublayer)
            sublayer.translate(sublayer.width/2,sublayer.height/2)
            sublayer.stroke(0)
            sublayer.strokeWeight(3)
            sublayer.noFill()
            sublayer.ellipse(0,0,60,60)
            sublayer.ellipse(0,0,120,120)
            sublayer.ellipse(0,0,180,180)
            sublayer.rotate(15)
            sublayer.noStroke()
            sublayer.fill(0)
            sublayer.erase(1,1)
            sublayer.ellipse(0,20,160,50)
            sublayer.stroke(0)
            sublayer.noFill()
            sublayer.noErase()
            sublayer.arc(-40,0,80,60,5,175)
            sublayer.arc(-40,0,80,40,5,175)
            sublayer.arc(40,0,80,60,5,175)
            sublayer.arc(40,0,80,40,5,175)
            layer.image(sublayer,0,0)*/
            //211

            /*layer.stroke(0)
            layer.strokeWeight(3)
            layer.noFill()
            layer.rect(0,-75,100,40,5)
            layer.rect(0,20,60,60,5)
            layer.line(27,-7,-27,47)
            layer.line(0,-10,-30,20)
            layer.line(30,20,0,50)
            layer.ellipse(-50,20,10)
            layer.ellipse(50,20,10)
            layer.fill(0)
            layer.noStroke()
            layer.textFont('times new roman')
            layer.textSize(30)
            layer.text('233',0,-75)*/
            //Nr.

            /*layer.stroke(0)
            layer.strokeWeight(3)
            layer.noFill()
            layer.rect(0,-75,100,40,5)
            layer.ellipse(-25,20,10)
            layer.ellipse(-5,20,10)
            layer.ellipse(20,20,20)
            layer.fill(0)
            layer.noStroke()
            layer.textFont('times new roman')
            layer.textSize(30)
            layer.text('611',0,-75)*/
            //zbV

            /*layer.fill(40,160,80)
            layer.rect(0,-20,195,20)
            layer.arc(0,-10,195,275,0,180)
            layer.fill(0)
            layer.beginShape()
            layer.vertex(-100,-10)
            for(let a=0,la=5;a<la;a++){
                layer.bezierVertex(-90+a*40,-10,-90+a*40,0,-80+a*40,0)
                layer.bezierVertex(-70+a*40,0,-70+a*40,-10,-60+a*40,-10)
            }
            layer.vertex(100,-50)
            for(let a=0,la=5;a<la;a++){
                layer.bezierVertex(90-a*40,-50,90-a*40,-40,80-a*40,-40)
                layer.bezierVertex(70-a*40,-40,70-a*40,-50,60-a*40,-50)
            }
            layer.endShape()
            layer.fill(0,100,200)
            layer.beginShape()
            layer.vertex(-97.5,-12.5)
            for(let a=0,la=5;a<la;a++){
                layer.bezierVertex(-90+a*40,-12.5,-90+a*40,-2.5,-80+a*40,-2.5)
                layer.bezierVertex(-70+a*40,-2.5,-70+a*40,-12.5,constrain(-60+a*40,-97.5,97.5),-12.5)
            }
            layer.vertex(97.5,-47.5)
            for(let a=0,la=5;a<la;a++){
                layer.bezierVertex(90-a*40,-47.5,90-a*40,-37.5,80-a*40,-37.5)
                layer.bezierVertex(70-a*40,-37.5,70-a*40,-47.6,constrain(60-a*40,-97.5,97.5),-47.5)
            }
            layer.endShape()*/
            //donau

            /*layer.stroke(0)
            layer.strokeWeight(30)
            layer.strokeCap(PROJECT)
            layer.noFill()
            layer.line(-75,-25,75,-25)
            layer.arc(35,-25,80,150,0,180)
            layer.stroke(255)
            layer.strokeWeight(25)
            layer.line(-75,-25,75,-25)
            layer.arc(35,-25,80,150,0,180)
            layer.noStroke()
            layer.fill(255,125,0)
            layer.rect(35,-25,20,25)
            layer.rect(-35,-25,20,25)*/
            //202stb

            /*layer.fill(0)
            for(let a=0,la=4;a<la;a++){
                layer.quad(-20,-50,-30,-60,30,-60,20,-50)
                layer.rotate(90)
            }
            layer.ellipse(0,0,10)
            //layer.quad(-30,-30,-40,-30,-80,-80,-30,-40)
            layer.rect(-30,20,10)
            layer.rect(-30,0,10)
            layer.rect(-30,-20,10)*/
            //gnw,gne,ck

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

            /*layer.fill(0)
            layer.quad(-32,-90,-10,-90,-53,60,-75,60)
            layer.quad(88,-90,110,-90,67,60,45,60)

            layer.stroke(0)
            layer.strokeWeight(20)
            layer.noFill()
            layer.strokeCap(PROJECT)
            layer.arc(-60,60,120,120,0,180)
            layer.arc(60,60,120,120,0,180)

            layer.line(-100,-100,-20,-100)
            layer.line(100,-100,20,-100)*/
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

            for(let a=0,la=6;a<la;a++){
                layer.fill([255,0][a%2],[255,200][a%2],[255,240][a%2])
                layer.arc(0,0,280,280,0,60)
                layer.fill([255,0][1-a%2],[255,200][1-a%2],[255,240][1-a%2])
                layer.quad(40,0,60,0,30,30*sqrt(3),20,20*sqrt(3))
                layer.rotate(30)
                layer.quad(65,0,95,-15,125,0,95,15)
                layer.rotate(30)
            }
            return layer
        case 42:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(0)
            layer.quad(0,-140,-140,0,0,140,140,0)
            layer.fill(50,150,0)
            layer.quad(0,-135,-135,0,0,135,135,0)
            layer.stroke(255,200,0)
            layer.noFill()
            layer.strokeWeight(15)
            layer.strokeCap(PROJECT)
            layer.strokeJoin(BEVEL)
            layer.beginShape()
            layer.vertex(25,-75)
            layer.vertex(0,-100)
            layer.vertex(-100,0)
            layer.vertex(0,100)
            layer.vertex(100,0)
            layer.vertex(75,-25)
            layer.endShape()
            layer.beginShape()
            layer.vertex(-20,-40)
            layer.vertex(0,-60)
            layer.vertex(0,60)
            layer.vertex(20,40)
            layer.endShape()
            layer.beginShape()
            layer.vertex(-40,-20)
            layer.vertex(-60,0)
            layer.vertex(60,0)
            layer.vertex(40,20)
            layer.endShape()

            return layer
        case 43:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(0)
            layer.ellipse(0,0,275,275)
            layer.fill(175,255,125)
            layer.arc(0,1,270,270,-135,-45)
            layer.arc(0,-1,270,270,45,135)
            layer.fill(255,150,150)
            layer.arc(-1,0,270,270,-45,45)
            layer.arc(1,0,270,270,135,225)
            layer.fill(0)
            layer.ellipse(0,0,215,215)
            layer.rotate(45)
            layer.fill(175,255,125)
            layer.arc(0,1,210,210,-135,-45)
            layer.arc(0,-1,210,210,45,135)
            layer.fill(255,150,150)
            layer.arc(-1,0,210,210,-45,45)
            layer.arc(1,0,210,210,135,225)
            layer.fill(0)
            layer.ellipse(0,0,155,155)
            layer.rotate(45)
            layer.fill(175,255,125)
            layer.arc(0,1,150,150,-135,-45)
            layer.arc(0,-1,150,150,45,135)
            layer.fill(255,150,150)
            layer.arc(-1,0,150,150,-45,45)
            layer.arc(1,0,150,150,135,225)

            return layer
        case 44:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            for(let a=0,la=6;a<la;a++){
                layer.fill([240,150][a%2],[240,255][a%2],[240,255][a%2])
                layer.arc(0,1,270,270,-135,-45)
                layer.fill([240,150][1-a%2],[240,255][1-a%2],[240,255][1-a%2])
                layer.quad(-30,-30,0,0,30,-30,0,-60)
                layer.quad(-30,-90,0,-60,30,-90,0,-120)
                layer.quad(-30,-150,0,-120,30,-150,0,-180)
                
                layer.quad(-90,-90,-60,-60,-30,-90,-60,-120)
                layer.quad(90,-90,60,-60,30,-90,60,-120)

                layer.fill([240,150][a%2],[240,255][a%2],[240,255][a%2])
                layer.quad(-20,-30,0,-10,20,-30,0,-50)
                layer.quad(-20,-90,0,-70,20,-90,0,-110)
                layer.quad(-20,-150,0,-130,20,-150,0,-170)

                layer.quad(-80,-90,-60,-70,-40,-90,-60,-110)
                layer.quad(80,-90,60,-70,40,-90,60,-110)

                layer.rotate(90)
            }
            layer.stroke(0)
            layer.strokeWeight(100)
            layer.noFill()
            layer.erase(1,1)
            layer.ellipse(0,0,370)
            layer.strokeWeight(2)
            layer.noErase()
            layer.ellipse(0,0,270,270)

            return layer
        case 45:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(0)
            layer.ellipse(0,0,275)
            layer.fill(255)
            layer.ellipse(0,0,270)
            layer.fill(225,25,25)
            layer.quad(0,-80,-80,0,0,80,80,0)
            layer.ellipse(-40,-40,80*sqrt(2),80*sqrt(2))
            layer.ellipse(40,-40,80*sqrt(2),80*sqrt(2))
            layer.ellipse(-40,40,80*sqrt(2),80*sqrt(2))
            layer.rect(30,30,100,100,20)

            return layer
        case 46:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(255,200,0)
            layer.ellipse(0,0,280)
            layer.erase(1,1)
            layer.ellipse(35,-35,200)
            layer.noErase()
            layer.ellipse(60,-60,40)
            layer.translate(60,-60)
            for(let a=0,la=10;a<la;a++){
                layer.triangle(-4,-18,4,-18,0,-36-a%2*12)
                layer.rotate(36)
            }

            return layer
        case 47:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.rotate(-5)
            layer.fill(0)
            layer.rect(0,-80,200,20)
            layer.arc(0,-90,200,60,-180,0)
            layer.arc(0,-70,200,400,0,180)
            layer.fill(240)
            layer.rect(0,-80,195,20)
            layer.arc(0,-90,195,55,-180,0)
            layer.arc(0,-70,195,395,0,180)
            layer.fill(240,40,40)
            layer.rect(0,-80,185,20)
            layer.arc(0,-90,185,45,-180,0)
            layer.arc(0,-70,185,385,0,180)
            layer.rotate(15)
            layer.fill(240)
            layer.rect(0,0,12,150,3)
            layer.translate(0,-45)
            layer.rotate(15)
            layer.rect(0,0,90,12,3)
            layer.rotate(-30)
            layer.rect(0,0,90,12,3)

            return layerz
        case 48:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(240)
            layer.rect(0,-50,195,80)
            layer.arc(0,-90,195,35,-180,0)
            layer.arc(0,-10,195,275,0,180)

            sublayer=createGraphics(300,300)
            setupLayer(sublayer)
            sublayer.translate(sublayer.width/2,sublayer.height/2)

            sublayer.fill(0)
            sublayer.rect(0,-50,200,80)
            sublayer.arc(0,-90,200,40,-180,0)
            sublayer.arc(0,-10,200,280,0,180)
            sublayer.erase(1,1)
            sublayer.rect(0,-50,195,80)
            sublayer.arc(0,-90,195,35,-180,0)
            sublayer.arc(0,-10,195,275,0,180)

            layer.fill(250,25,25)
            layer.quad(100,-120,100,-100,-100,-60,-100,-80)
            layer.quad(100,-85,100,-65,-100,-25,-100,-45)
            layer.quad(100,-50,100,-30,-100,10,-100,-10)
            layer.fill(0)
            layer.quad(100,10,100,30,-100,70,-100,50)
            layer.quad(100,45,100,65,-100,105,-100,85)
            layer.quad(100,80,100,100,-100,140,-100,120)

            layer.stroke(0)
            layer.strokeWeight(100)
            layer.noFill()
            layer.erase(1,1)
            layer.arc(0,-90,330,140,-180,0)
            layer.arc(0,-10,300,380,0,180)

            layer.image(sublayer,0,0)

            return layer
        case 49:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(0)
            layer.ellipse(0,0,280)
            layer.erase(1,1)
            layer.ellipse(40,-40,200)
            layer.noErase()
            layer.fill(225,25,25)
            layer.ellipse(80,-80,100)
            layer.erase(1,1)
            layer.stroke(0)
            layer.strokeWeight(100)
            layer.noFill()
            layer.ellipse(0,0,380)

            return layer
        case 50:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.stroke(255,225,0)
            layer.strokeWeight(20)
            layer.strokeCap(PROJECT)
            layer.line(120,-120,50,-120)
            layer.line(120,-120,120,-50)

            //layer.line(60,-60,-10,-60)
            //layer.line(60,-60,60,10)
            layer.line(0,0,-70,0)
            layer.line(0,0,0,70)

            layer.line(110,-110,-60,60)
            layer.line(-60,60,-130,60)
            layer.line(-60,60,-60,130)

            return layer
        case 51:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.scale(1,-1)
            layer.stroke(255,200,0)
            layer.strokeWeight(1)
            layer.strokeCap(PROJECT)
            layer.fill(255,200,0)

            layer.quad(140,140,40,140,10,110,110,110)
            layer.quad(140,140,140,40,110,10,110,110)
            layer.quad(-140,-140,-40,-140,-10,-110,-110,-110)
            layer.quad(-140,-140,-140,-40,-110,-10,-110,-110)

            layer.strokeWeight(30)
            layer.line(120,120,-120,-120)
            layer.line(60,-20,-20,60)
            layer.line(20,-60,-60,20)

            return layer
        case 52:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.stroke(255,200,0)
            layer.strokeWeight(30)
            layer.strokeCap(PROJECT)
            layer.noFill()

            layer.beginShape()

            layer.vertex(-120,-30)
            layer.vertex(-20,-130)
            layer.vertex(130,-130)
            layer.vertex(130,20)
            layer.vertex(30,120)

            layer.endShape()

            layer.triangle(40,-40,10,50,-50,-10)

            return layer
        case 53:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.stroke(255,200,0)
            layer.strokeWeight(30)
            layer.strokeCap(PROJECT)
            layer.noFill()

            layer.beginShape()

            layer.vertex(-120,-60)
            layer.vertex(-60,-120)
            layer.vertex(60,-120)
            layer.vertex(120,-60)

            layer.endShape()

            layer.beginShape()

            layer.vertex(-90,-30)
            layer.vertex(-40,-80)
            layer.vertex(40,-80)
            layer.vertex(90,-30)

            layer.endShape()

            layer.line(0,-120,0,120)
            layer.line(-40,40,40,40)

            return layer
        case 54:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.fill(255,0,230)
            for(let a=0,la=3;a<la;a++){
                layer.arc(0,0,280,280,-60+a*120,a*120)
            }
            layer.fill(255,0,125)
            for(let a=0,la=3;a<la;a++){
                layer.arc(0,0,280,280,a*120,60+a*120)
            }

            layer.fill(150,0,0)
            for(let a=0,la=8;a<la;a++){
                layer.ellipse(0,-95,50,50)
                layer.rotate(45)
            }

            for(let a=0,la=8;a<la;a++){
                layer.fill(180,60,90)
                layer.triangle(0,-115,-10,-95,10,-95)
                layer.fill(240,90,180)
                layer.triangle(0,-115,-5,-95,5,-95)
                layer.fill(240,120,180)
                layer.ellipse(0,-114,4)
                layer.rotate(45)
            }
            //mortar code

            layer.fill(150,0,0)
            layer.ellipse(0,0,200)

            key=11
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
        case 55:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(255,200,0)
            layer.rect(-80,-40,120,120,10)
            layer.rect(80,-40,120,120,10)
            layer.rect(0,30,120,120,10)
            layer.rect(0,10,140,120)

            layer.erase(1,1)
            layer.rect(0,-50,40,40,10)
            layer.rect(-80,50,40,60,10)
            layer.rect(80,50,40,60,10)

            layer.rect(-80,-40,30,30,5)
            layer.rect(80,-40,30,30,5)
            layer.rect(0,30,30,30,5)

            return layer
        case 56:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(0,125,255)
            layer.ellipse(0,0,270,270)
            layer.fill(255)
            layer.textFont('times new roman')
            layer.textSize(40)
            layer.text('I',0,-103)
            layer.fill(240)
            layer.ellipse(0,0,170,170)
            layer.fill(240,220,40)
            for(let a=0,la=12;a<=la;a++){
                regPoly(layer,110*cos(-45+270*a/la),110*sin(-45+270*a/la),6,6,6,45-270*a/la)
            }
            layer.fill(0)
            layer.rect(0,-40,60,30,5)
            layer.rect(0,15,15,90,5)

            return layer
        case 57:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(225,200,0)
            layer.ellipse(0,0,270,270)
            layer.fill(255)
            layer.textFont('times new roman')
            layer.textSize(40)
            layer.text('VII',0,-103)
            layer.fill(240)
            layer.ellipse(0,0,170,170)
            layer.fill(240,220,40)
            for(let a=0,la=12;a<=la;a++){
                regPoly(layer,110*cos(-45+270*a/la),110*sin(-45+270*a/la),6,6,6,45-270*a/la)
            }
            layer.fill(0)
            layer.ellipse(0,0,60)
            layer.quad(-30,-60,-45,0,-30,60,-15,0)
            layer.quad(30,-60,45,0,30,60,15,0)

            return layer
        case 58:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(0,140,190)
            layer.ellipse(0,0,270,270)
            layer.fill(255)
            layer.textFont('times new roman')
            layer.textSize(40)
            layer.text('XII',0,-103)
            layer.fill(240)
            layer.ellipse(0,0,170,170)
            layer.fill(240,220,40)
            for(let a=0,la=12;a<=la;a++){
                regPoly(layer,110*cos(-45+270*a/la),110*sin(-45+270*a/la),6,6,6,45-270*a/la)
            }
            layer.fill(0)
            layer.quad(0,-25,-10,-50,0,-75,10,-50)
            layer.rect(0,15,5,100,5)

            return layer
        case 59:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(200,40,40)
            layer.ellipse(0,0,270,270)
            layer.fill(255)
            layer.textFont('times new roman')
            layer.textSize(40)
            layer.text('XIV',0,-103)
            layer.fill(240)
            layer.ellipse(0,0,170,170)
            layer.fill(240,220,40)
            for(let a=0,la=12;a<=la;a++){
                regPoly(layer,110*cos(-45+270*a/la),110*sin(-45+270*a/la),6,6,6,45-270*a/la)
            }
            layer.noFill()
            layer.stroke(0)
            layer.translate(0,65)
            layer.rotate(-67.5)
            for(let a=0,la=3;a<la;a++){
                layer.strokeWeight(10)
                layer.arc(60,0,120,120,-180,-90)
                layer.strokeWeight(8)
                layer.ellipse(72,-60,20,20)
                layer.triangle(70,-75,74,-75,72,-85)
                layer.rotate(30)
            }

            return layer
        case 60:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(40,0,80)
            layer.ellipse(0,0,270,270)
            layer.fill(255)
            layer.textFont('times new roman')
            layer.textSize(40)
            layer.text('XVIII',0,-103)
            layer.fill(240)
            layer.ellipse(0,0,170,170)
            layer.fill(240,220,40)
            for(let a=0,la=12;a<=la;a++){
                regPoly(layer,110*cos(-45+270*a/la),110*sin(-45+270*a/la),6,6,6,45-270*a/la)
            }
            layer.fill(0)
            layer.rect(-15,-40,36,24,5)
            layer.rect(15,-40,36,24,5)
            layer.rect(-25,-40,24,36,5)
            layer.rect(25,-40,24,36,5)
            layer.rect(0,5,12,120,5)

            return layer
        case 61:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(40,160,100)
            layer.ellipse(0,0,270,270)
            layer.fill(255)
            layer.textFont('times new roman')
            layer.textSize(40)
            layer.text('XX',0,-103)
            layer.fill(240)
            layer.ellipse(0,0,170,170)
            layer.fill(240,220,40)
            for(let a=0,la=12;a<=la;a++){
                regPoly(layer,110*cos(-45+270*a/la),110*sin(-45+270*a/la),6,6,6,45-270*a/la)
            }
            layer.fill(0)
            layer.rect(-30,5,12,130,5)
            layer.beginShape()
            layer.vertex(-30,-55)
            layer.bezierVertex(-15,-55,0,-35,15,-35)
            layer.bezierVertex(30,-35,45,-45,60,-45)
            layer.vertex(60,15)
            layer.bezierVertex(45,15,30,25,15,25)
            layer.bezierVertex(0,25,-15,5,-30,5)
            layer.endShape()

            return layer
        case 62:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.stroke(0)
            layer.strokeWeight(4)
            layer.fill(255)

            layer.beginShape()
            layer.vertex(-140,-70)
            layer.vertex(-140,70)
            layer.vertex(0,140)
            layer.vertex(140,70)
            layer.vertex(140,-70)
            layer.vertex(0,-140)
            layer.endShape(CLOSE)

            layer.line(-140,-70,140,70)
            layer.line(-140,70,140,-70)
            layer.line(-140,70,140,70)
            layer.line(-50,-25,0,-50)
            layer.line(50,-25,0,-50)
            layer.line(-50,70,0,95)
            layer.line(50,70,0,95)

            return layer
        case 63:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(255)
            layer.ellipse(0,0,275)
            layer.fill(255,200,200)
            for(let a=0,la=1;a<la;a++){
                layer.rect(-la*10+a*20+10,0,12,275)
            }

            /*layer.rect(-50,0,10,200)
            layer.rect(50,0,10,200)
            layer.rect(0,-50,200,10)
            layer.rect(0,50,200,10)*/

            /*for(let a=0,la=3;a<la;a++){
                layer.rect(-la*10+a*20+10,0,12,200-abs(1-a)*20)
            }*/
            //regiment

            /*layer.rotate(-6)
            layer.quad(0,-138,-10,0,0,138,10,0)
            layer.rotate(12)
            layer.quad(0,-138,-10,0,0,138,10,0)
            layer.rotate(-6)*/
            //detachment
            
            layer.fill(255,150,150)

            for(let a=0,la=8;a<la;a++){
                layer.arc(-105,0,50,50,-12+360*(a+0.5)/la,12+360*(a+0.5)/la)
                layer.arc(105,0,50,50,-12+360*(a+0.5)/la,12+360*(a+0.5)/la)
            }
            for(let a=0,la=16;a<la;a++){
                layer.arc(0,0,140,140,-6+360*(a+0.5)/la,6+360*(a+0.5)/la)
            }

            /*layer.ellipse(-80,-80,10)
            layer.ellipse(80,-80,10)
            layer.ellipse(-80,80,10)
            layer.ellipse(80,80,10)*/
            //mixed

            /*layer.arc(-60,90,60,20,0,180)
            layer.ellipse(-80,90,20,10)
            layer.ellipse(-60,90,20,10)
            layer.ellipse(-40,90,20,10)
            layer.arc(60,90,60,20,0,180)
            layer.ellipse(80,90,20,10)
            layer.ellipse(60,90,20,10)
            layer.ellipse(40,90,20,10)*/
            //landing

            /*layer.rect(0,105,70,20,10)
            for(let a=0,la=8;a<la;a++){
                layer.arc(-25,105,30,30,-12+360*(a+0.5)/la,12+360*(a+0.5)/la)
                layer.arc(0,105,30,30,-12+360*(a+0.5)/la,12+360*(a+0.5)/la)
                layer.arc(25,105,30,30,-12+360*(a+0.5)/la,12+360*(a+0.5)/la)
            }*/
            //tank

            layer.ellipse(0,0,90)

            layer.stroke(255,150,150)
            layer.strokeWeight(4)
            layer.noFill()
            layer.rotate(-36)
            for(let a=0,la=5;a<la;a++){
                layer.bezier(0,a*30,-15,10+a*30,-15,20+a*30,0,30+a*30)
                layer.bezier(0,a*30,15,10+a*30,15,20+a*30,0,30+a*30)
            }
            layer.rotate(36)

            layer.translate(105,0)
            layer.scale(0.5)
            layer.rotate(-36)
            for(let a=0,la=4;a<la;a++){
                layer.bezier(0,a*30,-15,10+a*30,-15,20+a*30,0,30+a*30)
                layer.bezier(0,a*30,15,10+a*30,15,20+a*30,0,30+a*30)
            }
            layer.rotate(36)
            layer.scale(2)

            layer.translate(-210,0)
            layer.scale(0.5)
            layer.rotate(-36)
            for(let a=0,la=12;a<la;a++){
                layer.bezier(0,a*30,-15,10+a*30,-15,20+a*30,0,30+a*30)
                layer.bezier(0,a*30,15,10+a*30,15,20+a*30,0,30+a*30)
            }
            layer.rotate(36)
            layer.scale(2)
            layer.translate(105,0)

            layer.fill(0)
            layer.textSize(100)
            layer.textSize(60)
            //layer.textSize(50)

            //layer.text('治',0,0)
            //layer.text('桜',0,0)
            //layer.text('陽',0,0)
            //layer.text('俊',0,0)
            //layer.text('房',0,0)
            //layer.text('山陽',0,0)

            //layer.text('那智',0,0)

            //layer.text('杉',0,0)
            //layer.text('国',0,0)
            //layer.text('沼',0,0)
            //layer.text('海',0,0)
            //layer.text('護州',0,0)
            //layer.text('安芸',0,0)
            //layer.text('総武',0,0)
            //layer.text('大国',0,0)
            //layer.text('高師',0,0)
            //layer.text('剣山',0,0)
            //layer.text('那智',0,0)

            //layer.text('西方',0,0)

            //layer.text('桐',0,0)
            //layer.text('東京湾',0,0)

            layer.textSize(20)

            //layer.text('16',0,125)
            //layer.text('20',0,125)
            //layer.text('40',0,125)
            //layer.text('50',0,125)
            //layer.text('ATB',0,125)
            //layer.text('59',0,125)
            
            //layer.text('NLG',0,125)

            //layer.text('8',0,125)
            //layer.text('25',0,125)
            //layer.text('38',0,125)
            //layer.text('48',0,125)
            //layer.text('146',0,125)
            //layer.text('205',0,125)
            //layer.text('230',0,125)
            //layer.text('231',0,125)
            //layer.text('303',0,125)
            //layer.text('344',0,125)
            //layer.text('354',0,125)

            //layer.text('2',0,125)
            
            layer.textSize(60)
            layer.text('10',0,0)
            //layer.text('択捉',0,0)
            //layer.text('坂口',0,0)
            //layer.text('夏月',0,0)

            layer.stroke(0)
            layer.strokeWeight(2.5)
            layer.noFill()
            layer.ellipse(0,0,277.5)

            layer.erase(1,1)
            layer.strokeWeight(100)
            layer.ellipse(0,0,380)

            return layer
        case 64:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(255)
            regPoly(layer,0,0,6,275/2,275/2,0)
            layer.fill(255,150,150)
            for(let a=0,la=16;a<la;a++){
                layer.arc(0,0,140,140,-6+360*(a+0.5)/la,6+360*(a+0.5)/la)
            }
            layer.ellipse(0,0,90)
            for(let a=0,la=6;a<la;a++){
                layer.triangle(120,-34,120,-26,100,-30)
                layer.triangle(120,34,120,26,100,30)
                for(let b=0,lb=16;b<lb;b++){
                    layer.arc(100,0,30,30,-6+360*(b+0.5)/lb,6+360*(b+0.5)/lb)
                }
                layer.rotate(360/la)
            }

            layer.fill(0)
            layer.textSize(60)
            layer.text('11',0,0)

            layer.stroke(0)
            layer.strokeWeight(2.5)
            layer.noFill()
            regPoly(layer,0,0,6,277.5/2,277.5/2,0)

            layer.erase(1,1)
            layer.strokeWeight(100)
            regPoly(layer,0,0,6,200,200,0)

            return layer
        case 65:
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

            /*layer.stroke(0)
            layer.strokeWeight(2)
            layer.fill(250)
            layer.rotate(15)
            for(let a=0,la=5;a<la;a++){
                layer.beginShape()
                layer.vertex(0,0)
                layer.bezierVertex(30,70,15,70,12,65)
                layer.bezierVertex(8,90,-8,90,-12,65)
                layer.bezierVertex(-15,70,-30,70,0,0)
                layer.endShape(CLOSE)
                layer.rotate(72)
            }
            layer.noStroke()
            for(let a=0,la=15;a<la;a++){
                for(let b=0,lb=5;b<lb;b++){
                    layer.scale(0.95-a*0.05)
                    layer.fill(250,250-a*5,250-a*2.5)
                    layer.beginShape()
                    layer.vertex(0,5)
                    layer.bezierVertex(30,70,15,70,12,65)
                    layer.bezierVertex(8,90,-8,90,-12,65)
                    layer.bezierVertex(-15,70,-30,70,0,5)
                    layer.endShape(CLOSE)
                    layer.rotate(72)
                    layer.scale(1/(0.95-a*0.05))
                }
            }
            layer.stroke(0)
            layer.fill(255,225,50)
            layer.strokeWeight(1)
            layer.rotate(15)
            for(let a=0,la=7;a<la;a++){
                b=random(12,15)
                layer.rect(0,b,3,b*2)
                layer.ellipse(0,b*2,6,9)
                layer.rotate(360/la)
            }
            layer.noStroke()
            layer.ellipse(0,0,6)*/
            //6 ad

            /*layer.stroke(0)
            layer.strokeWeight(2)

            layer.arc(0,0,40*sqrt(2),40*sqrt(2),135,225)
            layer.arc(0,0,100*sqrt(2),100*sqrt(2),-45,45)

            layer.beginShape()
            for(let a=0,la=11;a<la;a++){
                let b=random(30,36)
                layer.vertex(-20+sin((a+0.5)/la*360)*b,-20+cos((a+0.5)/la*360)*b)
            }
            layer.endShape(CLOSE)

            layer.beginShape()
            for(let a=0,la=8;a<la;a++){
                let b=random(15,18)
                layer.vertex(50+sin((a+0.5)/la*360)*b,50+cos((a+0.5)/la*360)*b)
            }
            layer.endShape(CLOSE)*/
            //6pc

            /*layer.fill(250,225,175)
            layer.stroke(0)
            layer.strokeWeight(2)
            layer.translate(0,-150)
            for(let a=0,la=3;a<la;a++){
                let c=floor(random(0,2))*60-30
                let d=random(-10,10)
                layer.push()
                layer.rotate(-10+floor(a/2)*30)
                layer.translate(0,80+(a%2)*100+floor(a/2)*30)
                layer.rotate(d)
                layer.line(0,0,0,70)
                layer.ellipse(0,70,5)
                layer.rotate(-d)
                for(let b=0,lb=3;b<lb;b++){
                    layer.rotate([0,c,c*-2][b])
                    layer.beginShape()
                    layer.vertex(0,0)
                    layer.bezierVertex(10,10,20,30,0,50)
                    layer.bezierVertex(-20,30,-10,10,0,0)
                    layer.endShape()
                }
                layer.pop()
            }*/
            //31ad

            /*layer.stroke(0)
            layer.strokeWeight(2)
            layer.arc(0,0,100,100,0,180)
            layer.line(-50,0,50,0)
            regPoly(layer,-25,-25/3*sqrt(3)-2,3,50/3*sqrt(3)-4,50/3*sqrt(3)-4,60)
            regPoly(layer,25,-25/3*sqrt(3)-2,3,50/3*sqrt(3)-4,50/3*sqrt(3)-4,60)
            regPoly(layer,0,-50/3*sqrt(3)-4,3,50/3*sqrt(3)-4,50/3*sqrt(3)-4,0)*/
            //281

            /*layer.stroke(0)
            layer.strokeWeight(3)
            layer.triangle(-40,-80,40,-80,0,0)
            layer.triangle(-40,80,40,80,0,0)
            layer.triangle(-32,-75,32,-75,0,-10)
            layer.ellipse(0,55,30)
            layer.ellipse(0,55,20)
            layer.ellipse(0,-55,20)*/
            //890

            /*layer.stroke(0)
            layer.strokeWeight(2)
            layer.fill(240,220,20)
            for(let a=0,la=18;a<la;a++){
                let b=random(15,35)+a%2*10
                layer.rect(0,b,4,b*2)
                layer.ellipse(0,b*2,12)
                layer.rotate(20)
            }
            layer.ellipse(0,0,36)*/
            //325

            return layer
        case 66:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            /*layer.fill(255)
            layer.rect(0,-50,300,200)
            layer.fill(19,73,145)
            layer.rect(0,100,300,100)*/
            //aizkraukle

            /*layer.fill(14,25,93)
            layer.rect(0,-90,300,120)
            layer.fill(255)
            layer.rect(0,0,300,60)
            layer.fill(241,188,108)
            layer.rect(0,90,300,120)*/
            //pavilosta

            /*layer.fill(0,66,28)
            layer.rect(0,-90,300,120)
            layer.rect(0,90,300,120)
            layer.fill(238,45,36)
            layer.rect(0,0,300,60)*/
            //talsi

            layer.noFill()
            layer.stroke(100)
            layer.strokeWeight(3)
            for(let a=0,la=20;a<la;a++){
                layer.ellipse(-150+300*a/la,-150+300*a/la,20)
                layer.ellipse(-150+300*a/la,150-300*a/la,20)
            }
            layer.quad(0,-30,-30,0,0,30,30,0)
            layer.quad(0,-12,-12,0,0,12,12,0)
            layer.noFill()

            layer.erase(1,1)
            layer.stroke(0)
            layer.strokeWeight(100)
            layer.ellipse(0,0,400,400)

            return layer
        case 67:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.scale(1.5)
            layer.stroke(0)
            layer.strokeWeight(12)
            layer.strokeCap(PROJECT)
            layer.noFill()
            layer.line(0,-75,0,75)
            layer.line(-75,0,75,0)
            layer.rect(0,0,100)
            layer.strokeWeight(11.5)
            layer.line(-50,-50,-72,-72)
            layer.line(50,-50,72,-72)
            layer.line(-50,50,-72,72)
            layer.line(50,50,72,72)
            layer.stroke(255)
            layer.strokeWeight(8)
            layer.line(0,-75,0,75)
            layer.line(-75,0,75,0)
            layer.rect(0,0,100)
            layer.line(-50,-50,-72,-72)
            layer.line(50,-50,72,-72)
            layer.line(-50,50,-72,72)
            layer.line(50,50,72,72)

            return layer
        case 68:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.stroke(0)
            layer.strokeWeight(3)
            layer.strokeCap(PROJECT)
            regPoly(layer,0,0,5,140,140,36)
            for(let a=0,la=5;a<la;a++){
                layer.ellipse(sin(360*a/la)*80,-cos(360*a/la)*80,80)
            }

            return layer
        case 69:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            for(let a=0,la=300;a<la;a++){
                layer.fill(50,150+a/la*100,200)
                layer.rect(0,a+0.5-150,300,1)
            }

            sublayer=createGraphics(300,300)
            setupLayer(sublayer)
            sublayer.translate(sublayer.width/2,sublayer.height/2)

            sublayer.fill(255)
            /*for(let a=0,la=36;a<la;a++){
                let b=55+a%2*10
                sublayer.rect(0,b,2,b*2)
                sublayer.rotate(360/la)
            }*/
            /*sublayer.erase(1,1)
            regPoly(sublayer,0,0,3,105,84,60)
            sublayer.noErase()
            regPoly(sublayer,0,0,3,100,80,60)
            sublayer.erase(1,1)
            regPoly(sublayer,0,0,3,80,64,60)
            sublayer.noErase()
            regPoly(sublayer,0,0,3,70,56,60)
            sublayer.erase(1,1)
            regPoly(sublayer,0,0,3,65,52,60)
            for(let a=0,la=4;a<la;a++){
                sublayer.triangle(-21,-9,-9,-21,-36,-36)
                sublayer.rotate(90)
            }
            for(let a=0,la=4;a<la;a++){
                sublayer.quad(0,15,-9,20,0,72,9,20)
                sublayer.rotate(90)
            }
            sublayer.noErase()
            for(let a=0,la=4;a<la;a++){
                sublayer.triangle(-15,-6,-6,-15,-30,-30)
                sublayer.rotate(90)
            }
            sublayer.erase(1,1)
            sublayer.ellipse(0,0,40)
            sublayer.noErase()
            sublayer.ellipse(0,0,35)
            for(let a=0,la=4;a<la;a++){
                sublayer.quad(0,15,-5,20,0,60,5,20)
                sublayer.rotate(90)
            }*/

            /*sublayer.translate(0,50)
            for(let a=0,la=4;a<la;a++){
                sublayer.triangle(-15,-6,-6,-15,-30,-30)
                sublayer.rotate(90)
            }
            sublayer.erase(1,1)
            sublayer.ellipse(0,0,40)
            sublayer.noErase()
            sublayer.ellipse(0,0,35)
            for(let a=0,la=4;a<la;a++){
                sublayer.quad(0,15,-5,20,0,60,5,20)
                sublayer.rotate(90)
            }*/

            /*sublayer.rect(0,-120,20,6,3)
            sublayer.rect(0,-80,20,6,3)
            sublayer.rect(0,-100,6,40,3)*/
            //1

            /*sublayer.rect(0,-120,30,6,3)
            sublayer.rect(0,-80,30,6,3)
            sublayer.rect(-5,-100,6,40,3)
            sublayer.rect(5,-100,6,40,3)*/
            //2

            /*sublayer.rect(0,-120,40,6,3)
            sublayer.rect(0,-80,20,6,3)
            sublayer.translate(-6,-100)
            sublayer.rotate(-15)
            sublayer.rect(0,0,6,40,3)
            sublayer.rotate(15)
            sublayer.translate(12,0)
            sublayer.rotate(15)
            sublayer.rect(0,0,6,40,3)
            sublayer.rotate(-15)*/
            //5

            regPoly(sublayer,0,0,3,100,80,0)
            sublayer.erase(1,1)
            regPoly(sublayer,0,0,3,80,64,0)
            sublayer.noErase()
            regPoly(sublayer,0,0,3,70,56,0)
            sublayer.erase(1,1)
            regPoly(sublayer,0,0,3,65,52,0)

            sublayer.noErase()
            regPoly(sublayer,0,0,3,100,80,60)
            sublayer.erase(1,1)
            regPoly(sublayer,0,0,3,80,64,60)
            sublayer.noErase()
            regPoly(sublayer,0,0,3,70,56,60)
            sublayer.erase(1,1)
            regPoly(sublayer,0,0,3,65,52,60)

            sublayer.noErase()
            sublayer.textFont('Bahnschrift')
            sublayer.textSize(30)
            sublayer.text('456',0,5)

            layer.image(sublayer,0,0)

            layer.noFill()
            layer.erase(1,1)
            layer.stroke(0)
            layer.strokeWeight(100)
            layer.ellipse(0,0,400,400)

            return layer
        case 70:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.scale(1.2)
            layer.stroke(200,175,50)
            layer.strokeWeight(15)
            layer.strokeCap(PROJECT)
            for(let a=0,la=2;a<la;a++){
                layer.line(0,-20,-40,20)
                layer.line(0,60,-40,20)
                layer.line(0,60,60,0)
                layer.line(80,20,60,0)
                layer.line(80,20,0,100)
                layer.line(-100,0,0,100)
                layer.rotate(180)
            }

            return layer
        case 71:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.stroke(200,175,50)
            layer.strokeWeight(15)
            layer.strokeCap(PROJECT)
            layer.noFill()
            layer.beginShape()
            layer.vertex(-60,-100)
            layer.vertex(-120,-40)
            layer.vertex(0,120)
            layer.vertex(120,-40)
            layer.vertex(60,-100)
            layer.endShape(CLOSE)
            layer.line(-115,-40,-65,-40)
            layer.line(115,-40,65,-40)
            layer.line(-15,-40,15,-40)
            layer.line(-40,-20,0,115)
            layer.line(40,-20,0,115)
            layer.quad(-40,-20,-60,-40,-40,-60,-20,-40)
            layer.quad(40,-20,60,-40,40,-60,20,-40)

            layer.noStroke()
            layer.fill(200,175,50)
            layer.textFont('simsun')
            layer.textSize(30)
            layer.text('421',0,-70)

            return layer
        case 72:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.stroke(200,175,50)
            layer.strokeWeight(10)
            layer.strokeCap(PROJECT)
            layer.noFill()
            layer.quad(0,-120,-120,0,0,120,120,0)
            for(let a=0,la=4;a<la;a++){
                layer.rotate(90)
                layer.quad(0,-90,-15,-75,0,-60,15,-75)
                layer.line(0,-60,-15,-45)
                layer.line(0,-60,15,-45)
                layer.line(120,30,30,120)
                layer.quad(45,45-1,45-1,45,45,45+1,45+1,45)
            }

            layer.noStroke()
            layer.fill(200,175,50)
            layer.textFont('simsun')
            layer.textSize(30)
            layer.text('38',0,0)

            return layer
        case 73:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.push()
            layer.rotate(30)
            layer.translate(0,20)

            layer.fill(150,225,255)
            layer.arc(0,0,200,200,0,180)
            layer.arc(0,1,200,20,-180,0)

            layer.triangle(-100,0,-70,0,-85,-70)
            layer.triangle(100,0,70,0,85,-90)
            
            layer.triangle(-50,0,-20,0,-35,-60)
            layer.triangle(40,0,10,0,25,-50)

            diamond(layer,50,-80,30,120)
            diamond(layer,-60,-70,20,80)
            diamond(layer,-5,-110,35,140)
            layer.pop()

            layer.noStroke()
            layer.fill(255)
            layer.ellipse(-25,67,55)
            
            //layer.ellipse(-40,30,10)
            layer.ellipse(-25,30,10)
            //layer.ellipse(-10,30,10)
            
            //layer.ellipse(-32.5,30,10)
            //layer.ellipse(-17.5,30,10)

            layer.rect(10,67,5,20)
            layer.rect(17.5,59.5,20,5)
            layer.rect(17.5,74.5,20,5)
            
            layer.fill(0)
            layer.textFont('sitka')
            layer.textSize(40)
            layer.text('19',-25,70)

            return layer
        case 74:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(40,60,160)
            layer.ellipse(0,0,280)
            layer.fill(180,190,200)
            layer.rotate(45)

            layer.rect(0,-120,60,10)
            layer.rect(0,-100,80,10)
            layer.rect(0,-80,100,10)
            layer.rect(-120,0,10,60)
            layer.rect(-100,0,10,80)
            layer.rect(-80,0,10,100)
            
            layer.rect(80,0,10,120)
            layer.rect(0,80,120,10)

            layer.rect(100,-35,10,50)
            layer.rect(-35,100,50,10)
            layer.rect(100,35,10,50)
            layer.rect(35,100,50,10)

            /*layer.rect(0,-40,90,10)
            layer.rect(-40,0,10,90)
            layer.rect(0,40,90,10)
            layer.rect(40,0,10,90)
            layer.rect(-10,20,70,10)
            layer.rect(20,-10,10,70)
            layer.ellipse(-10,-10,20)*/

            layer.rotate(-45)

            layer.translate(-42,0)
            layer.rotate(-20)
            layer.rect(0,0,10,80)
            layer.rotate(20)
            layer.translate(28,0)
            layer.rotate(20)
            layer.rect(0,0,10,80)
            layer.rotate(-20)
            layer.translate(-14,0)
            layer.ellipse(0,38,10)
            layer.rect(42,3,10,80)
            layer.rect(60,3,10,80)
            layer.rect(78,3,10,80)

            return layer
        case 75:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            
            for(let a=0,la=300;a<la;a++){
                layer.fill(100+a/la*75,200+a/la*25,255)
                layer.rect(0,a+0.5-150,300,1)
            }

            layer.rotate(-15)
            for(let a=0,la=50;a<=la;a++){
                let b=50-abs(a*4%100-50)
                layer.fill(175+a/la*80,50+a/la*25,0)
                layer.rect(-b,a+0.5-25,200-b*2,2)
            }
            layer.rotate(15)

            layer.erase(1,1)
            layer.stroke(0)
            layer.strokeWeight(100)
            layer.noFill()
            regPoly(layer,0,0,8,200,200,22.5)

            return layer
        case 76:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            
            for(let a=0,la=300;a<la;a++){
                layer.fill(150+a/la*75,200+a/la*25,255)
                layer.rect(0,a+0.5-150,300,1)
            }

            layer.rotate(-15)
            for(let a=0,la=50;a<=la;a++){
                layer.fill(225+a/la*25,225+a/la*25,a/la*50)
                layer.beginShape()
                layer.vertex(0,-100)
                layer.vertex(-30*(1-a/la),25-10*a/la)
                layer.vertex(-5*(1-a/la),15)
                layer.vertex(0,100)
                layer.vertex(30*(1-a/la),-25+10*a/la)
                layer.vertex(5*(1-a/la),-15)
                layer.endShape()
            }
            layer.rotate(15)

            layer.erase(1,1)
            layer.stroke(0)
            layer.strokeWeight(100)
            layer.noFill()
            regPoly(layer,0,0,8,200,200,22.5)

            return layer
        case 77:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            
            for(let a=0,la=300;a<la;a++){
                layer.fill(150+a/la*75,100+a/la*50,125+a/la*75)
                layer.rect(0,a+0.5-150,300,1)
            }

            layer.rotate(-15)
            for(let a=0,la=50;a<=la;a++){
                layer.fill(75+a/la*75,25+a/la*25,25+a/la*25)
                layer.ellipse(0,0,120*(1-a/la),120*(1-a/la))
                layer.quad(0,0,-30*sqrt(2)*(1-a/la),-30*sqrt(2)*(1-a/la),0,-60*sqrt(2)*(1-a/la),30*sqrt(2)*(1-a/la),-30*sqrt(2)*(1-a/la))
            }
            layer.rotate(15)

            layer.erase(1,1)
            layer.stroke(0)
            layer.strokeWeight(100)
            layer.noFill()
            regPoly(layer,0,0,8,200,200,22.5)

            return layer
        case 78:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            
            for(let a=0,la=300;a<la;a++){
                layer.fill(255,100+a/la*100,50+a/la*25)
                layer.rect(0,a+0.5-150,300,1)
            }

            layer.rotate(-15)
            for(let a=0,la=50;a<=la;a++){
                layer.fill(225+a/la*25,225+a/la*25,a/la*50,0.05-a/la*0.05)
                layer.scale(1-a/la,1)
                layer.ellipse(0,0,120,120)
                layer.arc(0,0,180,180,-120+30*a/la,-60-30*a/la)
                layer.arc(0,0,180,180,60+30*a/la,120-30*a/la)
                layer.scale(1/(1-a/la),1)
            }
            layer.rotate(15)

            layer.erase(1,1)
            layer.stroke(0)
            layer.strokeWeight(100)
            layer.noFill()
            regPoly(layer,0,0,8,200,200,22.5)

            
            return layer
        case 79:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            key=55-32
            key=(key>>>0).toString(2)
            layer.fill(100,100,100)
            layer.ellipse(0,0,160)
            layer.fill(50,150,250)
            layer.ellipse(0,0,140)
            layer.fill(100,100,100)
            for(let a=0,la=5;a<la;a++){
                layer.rect(0,38,30,76)
                layer.rotate(72)
            }
            layer.stroke(100,100,100)
            layer.strokeWeight(10)
            layer.fill(50,150,250)
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
        case 80:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            layer.stroke(0)
            layer.strokeWeight(1)
            layer.fill(255,200,25)
            for(let a=0,la=32;a<la;a++){
                let b=100+(a%4==0?10:0)+(a%8==0?20:0)
                layer.quad(0,0,
                    sin(360*(a-0.5)/la)*90,cos(360*(a-0.5)/la)*90,
                    sin(360*a/la)*b,cos(360*a/la)*b,
                    sin(360*(a+0.5)/la)*90,cos(360*(a+0.5)/la)*90
                )
            }
            layer.ellipse(0,0,70)
            layer.ellipse(0,0,60)
            layer.ellipse(0,0,50)
            sublayer=createGraphics(40,40)
            setupLayer(sublayer)
            sublayer.translate(sublayer.width/2,sublayer.height/2)
            sublayer.fill(217,16,35)
            sublayer.rect(-40/3,0,40/3,40)
            sublayer.rect(40/3,0,40/3,40)
            sublayer.fill(255)
            sublayer.rect(0,0,40/3,40)
            sublayer.erase(1,1)
            sublayer.stroke(0)
            sublayer.strokeWeight(20)
            sublayer.noFill()
            sublayer.ellipse(0,0,55)
            layer.image(sublayer,0,0)
            return layer
        case 81:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(0,0,130)
            layer.rect(0,-40,160,160)
            layer.arc(0,40,160,160,0,180)
            layer.fill(200,150,100)
            layer.rect(0,-35,140,150)
            layer.arc(0,40,140,140,0,180)
            layer.fill(0,0,130)
            layer.rect(0,-32.5,130,145)
            layer.arc(0,40,130,130,0,180)
            layer.fill(200,150,100)
            layer.rect(0,0,80,100,5)
            layer.rect(-30,-20,20,80,5)
            layer.rect(0,-20,20,80,5)
            layer.rect(30,-20,20,80,5)

            return layer
        case 82:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.stroke(255,200,0)
            layer.strokeWeight(30)
            layer.strokeCap(PROJECT)
            layer.noFill()
            layer.ellipse(0,0,250,250)
            layer.line(-25,-120,-25,120)
            layer.line(25,-120,25,120)

            return layer
        case 83:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.stroke(255,200,0)
            layer.strokeWeight(25)
            layer.strokeCap(PROJECT)
            layer.noFill()
            
            layer.beginShape()
            layer.vertex(-110,120)
            layer.vertex(-90,80)
            layer.vertex(-50,70)
            layer.vertex(-30,50)
            layer.vertex(30,50)
            layer.vertex(50,70)
            layer.vertex(90,80)
            layer.vertex(110,120)
            layer.endShape()
            
            /*layer.line(0,30,0,-120)
            layer.line(-40,-80,40,-80)
            layer.line(-60,-30,60,-30)*/
            //232

            /*layer.line(-70,-80,70,-80)
            layer.line(0,-80,-60,10)
            layer.line(0,-80,60,10)
            layer.line(0,30,0,-120)*/
            //832

            layer.line(0,30,0,-90)
            layer.arc(-30,-100,60,60,-270,0)
            layer.line(-20,-30,20,-30)
            layer.line(-20,0,20,0)
            
            //833

            return layer
        case 84:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.stroke(255,200,0)
            layer.strokeWeight(25)
            layer.strokeCap(PROJECT)
            layer.noFill()

            /*layer.beginShape()
            layer.vertex(-120,-120)
            layer.vertex(-40,-120)
            layer.vertex(40,120)
            layer.vertex(120,120)
            layer.endShape()
            layer.line(-80,-120,-80,-40)
            layer.line(80,120,80,40)*/
            //235ftb

            /*layer.beginShape()
            layer.vertex(-20,120)
            layer.vertex(-20,-120)
            layer.vertex(-80,-80)
            layer.vertex(-80,80)
            layer.endShape()
            layer.beginShape()
            layer.vertex(20,-120)
            layer.vertex(20,120)
            layer.vertex(80,80)
            layer.vertex(80,-80)
            layer.endShape()
            layer.line(-120,0,120,0)*/
            //10tbzbv

            /*layer.line(0,-120,0,120)
            layer.arc(-120,80,240,240,-90,0)
            layer.arc(120,80,240,240,-180,-90)
            layer.arc(-80,100,160,160,-90,0)
            layer.arc(80,100,160,160,-180,-90)
            layer.arc(-5,-60,120,120,-225,-135)
            layer.arc(5,-60,120,120,-45,45)*/
            //tbv

            /*layer.beginShape()
            layer.vertex(20,-120)
            layer.vertex(-100,-120)
            layer.vertex(-20,0)
            layer.vertex(-100,120)
            layer.vertex(20,120)
            layer.endShape()
            layer.beginShape()
            layer.vertex(60,-80)
            layer.vertex(-20,-80)
            layer.vertex(30,0)
            layer.vertex(-20,80)
            layer.vertex(60,80)
            layer.endShape()
            layer.line(-120,0,120,0)*/
            //285ctg

            /*layer.arc(-60,80,120,80,15,180)
            layer.arc(60,80,120,80,0,165)
            layer.beginShape()
            layer.vertex(0,80)
            layer.vertex(20,-20)
            layer.vertex(-20,0)
            layer.vertex(0,-100)
            layer.endShape()*/
            //mtges

            /*layer.line(-120,-80,-120,120)
            layer.line(-120,-120,120,-120)
            layer.line(80,120,-120,120)
            layer.line(120,120,120,-120)
            layer.line(0,-120,0,80)
            layer.line(-80,0,120,0)
            layer.strokeCap(ROUND)
            layer.ellipse(60,-60,10)*/
            //2103atd

            /*layer.strokeWeight(20)
            layer.stroke(255,25,25)
            layer.line(0,-120,0,120)
            layer.strokeWeight(10)
            regPoly(layer,0,25,3,120,120,60)
            regPoly(layer,0,30,5,50,50,36)*/
            //6ltrd

            return layer
        case 85:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(255)
            layer.ellipse(0,0,300)
            for(let a=0,la=48;a<la;a++){
                layer.fill(206-a%2*135,41+a%2*71,57+a%2*23)
                layer.triangle(-10,-150,10,-150,0,-120)
                layer.rotate(360/la)
            }

            layer.fill(120)
            for(let a=0,la=3;a<la;a++){
                layer.ellipse(sin(30+a*15)*100,cos(30+a*15)*100,20)
            }

            /*layer.fill(120)
            layer.ellipse(0,0,150)
            for(let a=0,la=10;a<la;a++){
                layer.quad(-20,-70,20,-70,10,-90,-10,-90)
                layer.rotate(360/la)
            }*/
            //tank

            layer.textFont('nirmala ui')
            layer.fill(0)
            layer.textSize(150)
            layer.text('4',0,10)

            layer.erase(1,1)
            layer.stroke(0)
            layer.strokeWeight(100)
            layer.noFill()
            layer.ellipse(0,0,400)

            return layer
        case 86:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(0)
            layer.rect(0,-50,200,80)
            layer.arc(0,-90,200,40,-180,0)
            layer.arc(0,-10,200,280,0,180)
            layer.fill(240,40,40)
            layer.rect(0,-50,195,80)
            layer.arc(0,-90,195,35,-180,0)
            layer.arc(0,-10,195,275,0,180)
            
            /*layer.fill(0)
            layer.rect(0,-36,108,36,7.5)
            layer.rect(0,36,108,36,7.5)
            layer.rect(0,0,36,180,7.5)
            layer.fill(255,200,0)
            layer.rect(0,-36,103,31,5)
            layer.rect(0,36,103,31,5)
            layer.rect(0,0,31,175,5)*/

            /*layer.fill(0)
            layer.ellipse(-20,-60,50,50)
            layer.ellipse(40,0,50,50)
            layer.ellipse(-20,60,50,50)
            layer.rect(-20,0,30,120)
            layer.rect(20,0,60,30)
            layer.fill(255,200,0)
            layer.ellipse(-20,-60,45)
            layer.ellipse(40,0,45)
            layer.ellipse(-20,60,45)
            layer.rect(-20,0,25,120)
            layer.rect(20,0,60,25)*/

            layer.fill(0)
            layer.rect(1,-45,2,80)
            layer.rect(1,45,2,80)
            layer.rect(-6,0,2,80)
            layer.arc(2,-45,80,80,-90,90)
            layer.arc(2,45,80,80,-90,90)
            layer.arc(-7,0,80,80,-270,-90)
            layer.fill(255,200,0)
            layer.arc(2,-45,76,76,-90,90)
            layer.arc(2,45,76,76,-90,90)
            layer.arc(-7,0,76,76,-270,-90)

            return layer
        case 87:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            let preColors=[[53,14,235],[67,50,174],[102,83,210],[110,173,240],[57,255,255]]
            for(let a=0,la=360;a<la;a++){
                let b=floor(a/la*15)%5
                let c=a%(la/15)
                let d=(b+1)%5
                let e=(la/15)
                layer.fill(
                    merge(preColors[b][0],preColors[d][0],c/e),
                    merge(preColors[b][1],preColors[d][1],c/e),
                    merge(preColors[b][2],preColors[d][2],c/e)
                )
                layer.triangle(0,0,
                    (125+15*sin(a*5))*sin(a),(125+15*sin(a*5))*cos(a),
                    (125+15*sin(a*5+10))*sin(a+2),(125+15*sin(a*5+10))*cos(a+2)
                )
            }
            layer.fill(200)
            layer.ellipse(0,0,100)

            /*layer.fill(160)
            layer.triangle(0,-24,0,36,-20,6)
            layer.fill(180)
            layer.triangle(0,-24,0,36,20,6)*/
            //mountain

            layer.fill(50,150,255)
            for(let a=0,la=0;a<la;a++){
                let b=5-la*5+a*10
                layer.quad(b,-44,b-3,-36,b,-28,b+3,-36)
            }
            for(let a=0,la=2;a<la;a++){
                let b=5-la*5+a*10
                layer.triangle(b,-44,b-3,-30,b+3,-30)
            }
            layer.fill(100,0,150)
            layer.textSize(50)
            layer.textFont('lucida')
            //layer.text('5',0,6)

            /*layer.stroke(100,50,200)
            layer.strokeWeight(3)
            layer.noFill()
            layer.ellipse(0,-7,30)
            layer.ellipse(0,23,30)
            layer.ellipse(-15,8,30)
            layer.ellipse(15,8,30)*/
            //command

            layer.translate(0,5)
            layer.stroke(100,50,200)
            layer.strokeWeight(3)
            layer.noFill()
            layer.ellipse(0,0,6)
            regPoly(layer,0,0,5,30,30,36)
            for(let a=0,la=5;a<la;a++){
                layer.triangle(0,-22.5,-5,-15,5,-15)
                layer.rotate(72)
            }
            //kotetsu

            /*layer.translate(0,5)
            layer.stroke(100,50,200)
            layer.strokeWeight(3)
            layer.noFill()
            for(let a=0,la=5;a<la;a++){
                layer.triangle(0,0,-5,-20,5,-20)
                layer.rotate(72)
            }*/
            //kuki

            return layer
        case 88:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(0)
            layer.ellipse(0,0,280)
            layer.fill(255)
            layer.ellipse(0,0,275)

            /*layer.fill(225,50,50)
            layer.arc(0,0,225,225,90,270)
            layer.fill(25)
            layer.arc(0,0,225,225,-90,90)
            layer.fill(255)
            layer.ellipse(0,0,125)
            layer.fill(0)
            layer.triangle(30,5,5,30,-25,-25)*/
            //9vrb

            /*layer.fill(0,100,0)
            layer.triangle(-120,0,-60,30,0,0)
            layer.triangle(120,0,60,-30,0,0)
            layer.triangle(0,-120,30,-60,0,0)
            layer.triangle(0,120,-30,60,0,0)
            layer.ellipse(0,0,30)
            layer.ellipse(60,-60,30)
            layer.ellipse(-60,60,30)*/
            //15vrb

            /*layer.noFill()
            layer.stroke(120)
            layer.strokeWeight(30)
            layer.strokeCap(PROJECT)
            layer.line(0,-100,0,100)
            layer.arc(-40,0,80,80,0,180)
            layer.arc(40,60,80,80,-180,0)
            layer.stroke(250)
            layer.strokeWeight(10)
            layer.line(0,-100,0,100)
            layer.arc(-40,0,80,80,0,180)
            layer.arc(40,60,80,80,-180,0)*/
            //300svrb

            /*layer.fill(0)
            layer.quad(-80,0,0,-80,80,0,0,80)
            for(let a=0,la=8;a<la;a++){
                layer.triangle(-10,-65+a%2*10,10,-65+a%2*10,0,-100+a%2*10)
                layer.rotate(45)
            }
            layer.fill(255,255,50)
            layer.quad(-77,0,0,-77,77,0,0,77)
            for(let a=0,la=8;a<la;a++){
                layer.triangle(-10,-57+a%2*10,10,-57+a%2*10,0,-92+a%2*10)
                layer.rotate(45)
            }
            layer.fill(0)
            layer.quad(-50,0,0,-50,50,0,0,50)
            layer.fill(255,255,150)
            layer.quad(-47,0,0,-47,47,0,0,47)*/
            //642sb

            /*layer.rotate(15)
            layer.fill(0)
            layer.rect(0,0,55,245)
            layer.fill(255)
            layer.rect(0,0,50,240)
            layer.fill(255,150,0)
            for(let a=0,la=5;a<la;a++){
                layer.quad(-25,-120+a*40,25,-80+a*40,25,-60+a*40,-25,-100+a*40)
            }
            layer.triangle(0,-120,25,-120,25,-100)
            layer.quad(0,120,25,120,-25,80,-25,100)
            layer.rotate(90)
            layer.fill(0)
            layer.rect(0,0,55,245)
            layer.fill(255)
            layer.rect(0,0,50,240)
            layer.fill(255,150,0)
            for(let a=0,la=5;a<la;a++){
                layer.quad(-25,-120+a*40,25,-80+a*40,25,-60+a*40,-25,-100+a*40)
            }
            layer.triangle(0,-120,25,-120,25,-100)
            layer.quad(0,120,25,120,-25,80,-25,100)*/
            //tbj sb

            /*layer.noFill()
            layer.stroke(40)
            layer.strokeWeight(30)
            layer.strokeCap(PROJECT)
            layer.beginShape()
            layer.vertex(-100,0)
            layer.vertex(-60,-80)
            layer.vertex(40,-80)
            layer.vertex(-40,80)
            layer.vertex(60,80)
            layer.vertex(100,0)
            layer.endShape(CLOSE)
            layer.stroke(250)
            layer.strokeWeight(25)
            layer.strokeCap(PROJECT)
            layer.beginShape()
            layer.vertex(-100,0)
            layer.vertex(-60,-80)
            layer.vertex(40,-80)
            layer.vertex(-40,80)
            layer.vertex(60,80)
            layer.vertex(100,0)
            layer.endShape(CLOSE)*/
            //140abzbv

            /*layer.noFill()
            layer.stroke(40)
            layer.strokeWeight(25)
            layer.strokeCap(PROJECT)
            layer.triangle(0,0,-40,-100,40,-100)
            layer.triangle(0,0,-40,100,40,100)
            layer.line(-80,-65,80,-65)
            layer.line(-80,65,80,65)
            layer.stroke(250)
            layer.strokeWeight(20)
            layer.triangle(0,0,-40,-100,40,-100)
            layer.triangle(0,0,-40,100,40,100)
            layer.line(-80,-65,80,-65)
            layer.line(-80,65,80,65)*/
            //388vab

            /*layer.noFill()
            layer.stroke(40)
            layer.strokeWeight(25)
            layer.strokeCap(PROJECT)
            layer.strokeJoin(ROUND)
            layer.quad(0,120,-90,-80,0,-10,90,-80)
            layer.triangle(-80,60,80,60,0,-100)
            layer.stroke(250)
            layer.strokeWeight(20)
            layer.quad(0,120,-90,-80,0,-10,90,-80)
            layer.triangle(-80,60,80,60,0,-100)*/
            //410vab

            /*layer.fill(0)
            layer.rect(-15,-60,150,30)
            layer.rect(-75,0,30,150)
            layer.rect(-45,0,90,30)
            layer.rect(5,60,190,30)
            layer.rect(85,27.5,30,85)
            layer.fill(250)
            layer.rect(-15,-60,145,25)
            layer.rect(-75,0,25,145)
            layer.rect(-45,0,85,25)
            layer.rect(5,60,185,25)
            layer.rect(85,27.5,25,80)*/
            //766vab

            /*layer.fill(0)
            layer.arc(0,0,200,200,90,270)
            layer.rect(1.25,0,2.5,200)
            layer.rect(40,0,60,60,5)
            layer.fill(255)
            layer.arc(0,0,195,195,90,270)
            layer.rect(40,0,55,55,5)
            layer.fill(0)
            layer.rect(-40,0,40,40,5)
            layer.fill(255)
            layer.rect(-40,0,35,35,5)*/
            //200cab

            /*layer.fill(0)
            regTriangle(layer,0,60,55,55,60)
            regTriangle(layer,-30*sqrt(3),-30,55,55,60)
            regTriangle(layer,30*sqrt(3),-30,55,55,60)
            layer.fill(255)
            regTriangle(layer,0,60,50,50,60)
            regTriangle(layer,-30*sqrt(3),-30,50,50,60)
            regTriangle(layer,30*sqrt(3),-30,50,50,60)
            layer.fill(0)
            regTriangle(layer,0,50,25,25,60)
            regTriangle(layer,-25*sqrt(3),-25,25,25,60)
            regTriangle(layer,25*sqrt(3),-25,25,25,60)
            layer.fill(255)
            regTriangle(layer,0,50,20,20,60)
            regTriangle(layer,-25*sqrt(3),-25,20,20,60)
            regTriangle(layer,25*sqrt(3),-25,20,20,60)*/
            //1103cab

            /*layer.rotate(-30)
            layer.fill(120,0,0)
            layer.rect(0,0,60,200)
            layer.ellipse(0,-100,60,40)
            layer.ellipse(0,100,60,40)
            layer.fill(250)
            layer.rect(0,0,55,200)
            layer.ellipse(0,-100,55,35)
            layer.ellipse(0,100,55,35)
            layer.fill(0)
            layer.rect(0,0,30,140)
            layer.ellipse(0,-70,30,20)
            layer.ellipse(0,70,30,20)
            layer.fill(250)
            layer.rect(0,0,25,140)
            layer.ellipse(0,-70,25,15)
            layer.ellipse(0,70,25,15)*/
            //69mab

            /*layer.fill(120)
            layer.ellipse(0,0,180)
            layer.stroke(250)
            layer.strokeWeight(20)
            layer.noFill()
            layer.strokeCap(SQUARE)
            layer.arc(0,0,130,130,30,90)
            layer.arc(0,0,130,130,-90,-30)
            layer.arc(0,0,60,60,-50,50)
            layer.arc(0,0,60,60,130,230)*/
            //mabs2

            /*layer.fill(30,210,30)
            layer.ellipse(-80,0,50)
            layer.ellipse(80,0,50)
            layer.ellipse(0,-80,50)
            layer.ellipse(0,80,30)
            layer.ellipse(-40,40,30)
            layer.ellipse(40,40,30)
            layer.rect(0,0,160,30)
            layer.rect(0,0,30,160)*/
            //105ftb

            /*layer.fill(0)
            layer.ellipse(0,-80,65)
            layer.ellipse(0,0,65)
            layer.ellipse(0,80,65)
            layer.fill(150,25,25)
            layer.ellipse(0,-80,60)
            layer.ellipse(0,0,60)
            layer.ellipse(0,80,60)
            layer.fill(255)
            layer.ellipse(0,0,20)*/
            //303acmb

            /*layer.fill(0)
            layer.rect(0,80,170,30)
            layer.rect(-70,-20,30,130)
            layer.rect(70,-20,30,130)
            layer.quad(-55,-85,-55,-55,0,-75,0,-105)
            layer.quad(55,-85,55,-55,0,-75,0,-105)
            layer.fill(255,200,0)
            layer.rect(0,80,165,25)
            layer.fill(255)
            layer.rect(-70,-20,25,125)
            layer.rect(70,-20,25,125)
            layer.quad(-58,-82,-58,-57,0,-78,0,-102)
            layer.quad(58,-82,58,-57,0,-78,0,-102)*/
            //11rrd

            /*layer.stroke(0)
            layer.strokeWeight(2)
            layer.noFill()
            layer.ellipse(0,0,180,180)
            layer.ellipse(0,0,140,180)
            layer.ellipse(0,0,100,180)
            layer.ellipse(0,0,60,180)
            layer.ellipse(0,0,20,180)
            layer.fill(150,0,0)
            layer.ellipse(0,0,180,40)*/
            //1252rmar

            return layer
        case 89:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(0)
            layer.ellipse(0,0,295)
            layer.fill(25,100,150)
            layer.ellipse(0,0,290)
            layer.fill(255)
            layer.arc(0,0,290,290,-45,45)
            layer.fill(0)
            layer.rect(-80,0,105,25)
            layer.rect(-100,0,25,65)
            layer.rect(-60,0,25,65)
            layer.fill(200,50,50)
            layer.rect(-80,0,100,20)
            layer.rect(-100,0,20,60)
            layer.rect(-60,0,20,60)

            return layer
        case 90:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.fill(0)
            layer.rect(0,-51.25,200,82.5)
            layer.arc(0,-10,200,280,0,180)
            layer.fill(0,150,0)
            layer.rect(0,-50,195,80)
            layer.arc(0,-10,195,275,0,180)
            layer.fill(0)
            layer.triangle(-97.5,-90,97.5,-90,0,127.5)
            layer.fill(255)
            layer.triangle(-95,-90,95,-90,0,122.5)
            layer.fill(0)
            layer.triangle(-77.5,-90,77.5,-90,0,87.5)
            layer.fill(0,0,200)
            layer.triangle(-75,-90,75,-90,0,82.5)
            layer.fill(0)
            layer.ellipse(0,-40,40)
            layer.fill(255)
            layer.ellipse(0,-40,35)

            return layer
        case 91:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)

            layer.image(graphics.i1,0,10,graphics.i1.width*0.6,graphics.i1.height*0.6)

            /*layer.rotate(18)
            layer.noFill()
            layer.strokeCap(PROJECT)
            layer.stroke(255)
            layer.strokeWeight(25)
            for(let a=0,la=5;a<la;a++){
                layer.line(0,0,-58,0)
                layer.arc(0,0,120,120,-180,-150)
                layer.rotate(72)
            }
            layer.stroke(0)
            layer.strokeWeight(20)
            for(let a=0,la=5;a<la;a++){
                layer.line(0,0,-58,0)
                layer.arc(0,0,120,120,-180,-150)
                layer.rotate(72)
            }*/
            //ags

            /*layer.fill(0)
            layer.stroke(255)
            layer.strokeWeight(2)
            for(let a=0,la=3;a<la;a++){
                layer.beginShape()
                layer.vertex(0,64)
                layer.bezierVertex(sin(25)*66,cos(25)*66,sin(50)*68,cos(50)*68,sin(75)*70,cos(75)*70)
                layer.bezierVertex(sin(50)*72,cos(50)*72,sin(25)*74,cos(25)*74,0,76)
                layer.endShape()
                layer.rotate(120)
            }
            layer.noStroke()
            layer.fill(255)
            for(let a=0,la=3;a<la;a++){
                layer.ellipse(0,70,40)
                layer.rotate(120)
            }
            layer.fill(0)
            for(let a=0,la=3;a<la;a++){
                layer.ellipse(0,70,35)
                layer.rotate(120)
            }*/
            //3sstc

            /*layer.noFill()
            layer.strokeCap(SQUARE)
            layer.stroke(255)
            layer.strokeWeight(20)
            layer.ellipse(0,-30,100)
            layer.line(0,-80,0,100)
            layer.stroke(0)
            layer.strokeWeight(15)
            layer.ellipse(0,-30,100)
            layer.line(0,-80,0,97.5)*/
            //11ssac

            /*layer.noFill()
            layer.strokeCap(SQUARE)
            layer.stroke(255)
            layer.strokeWeight(20)
            layer.ellipse(0,0,150)
            layer.line(-75,0,0,25)
            layer.line(75,0,0,25)
            layer.line(-35,-60,0,25)
            layer.line(35,-60,0,25)
            layer.point(0,25)
            layer.strokeCap(SQUARE)
            layer.stroke(0)
            layer.strokeWeight(15)
            layer.ellipse(0,0,150)
            layer.line(-75,0,0,25)
            layer.line(75,0,0,25)
            layer.line(-35,-60,0,25)
            layer.line(35,-60,0,25)
            layer.point(0,25)*/
            //14ssac

            /*layer.fill(255)
            layer.arc(-50,0,60,40,0,180)
            layer.arc(50,0,60,40,0,180)
            layer.stroke(255)
            layer.strokeWeight(10)
            layer.line(-75,0,-50,-60)
            layer.line(-25,0,-50,-60)
            layer.line(75,0,50,-60)
            layer.line(25,0,50,-60)
            layer.line(-50,-60,50,-60)
            layer.line(0,-60,0,60)
            layer.line(-30,60,30,60)
            layer.triangle(-5,-60,5,-60,0,-70)
            layer.noStroke()
            layer.fill(0)
            layer.arc(-50,0,55,35,0,180)
            layer.arc(50,0,55,35,0,180)
            layer.stroke(0)
            layer.strokeWeight(5)
            layer.line(-75,0,-50,-60)
            layer.line(-25,0,-50,-60)
            layer.line(75,0,50,-60)
            layer.line(25,0,50,-60)
            layer.line(-50,-60,50,-60)
            layer.line(0,-60,0,60)
            layer.line(-30,60,30,60)
            layer.triangle(-5,-60,5,-60,0,-70)
            layer.stroke(255)
            layer.strokeWeight(2.5)
            layer.line(-70,0,-30,0)
            layer.line(70,0,30,0)*/
            //19ssac

            /*layer.translate(0,5)
            for(let a=0,la=4;a<la;a++){
                layer.push()
                layer.translate(sin(a*90)*30,cos(a*90)*60)
                layer.fill(255)
                layer.quad(-20,0,0,-40,20,0,0,40)
                layer.fill(0)
                layer.quad(-17.5,0,0,-35,17.5,0,0,35)
                layer.fill(255)
                layer.quad(-10,0,0,-20,10,0,0,20)
                layer.fill(0)
                layer.quad(-7.5,0,0,-15,7.5,0,0,15)

                layer.pop()
            }*/
            //16sscb

            /*layer.rotate(45)
            layer.strokeCap(PROJECT)
            layer.stroke(255)
            layer.strokeWeight(20)
            layer.line(-30,-60,-30,60)
            layer.line(30,-60,30,60)
            layer.line(0,-30,0,-60)
            layer.line(0,30,0,60)
            layer.line(-60,-30,60,-30)
            layer.line(-60,30,60,30)
            layer.line(-30,0,-60,0)
            layer.line(30,0,60,0)
            layer.stroke(0)
            layer.strokeWeight(15)
            layer.line(-30,-60,-30,60)
            layer.line(30,-60,30,60)
            layer.line(0,-30,0,-60)
            layer.line(0,30,0,60)
            layer.line(-60,-30,60,-30)
            layer.line(-60,30,60,30)
            layer.line(-30,0,-60,0)
            layer.line(30,0,60,0)*/
            //42sskvgd

            /*layer.rotate(45)
            layer.noFill()
            layer.strokeCap(PROJECT)
            layer.stroke(255)
            layer.strokeWeight(15)
            layer.ellipse(0,0,140,140)
            layer.line(0,-70,0,70)
            layer.line(-25,-60,-25,60)
            layer.line(25,-60,25,60)
            layer.line(-70,0,70,0)
            layer.line(-60,-25,60,-25)
            layer.line(-60,25,60,25)
            layer.stroke(0)
            layer.strokeWeight(10)
            layer.ellipse(0,0,140,140)
            layer.line(0,-70,0,70)
            layer.line(-25,-60,-25,60)
            layer.line(25,-60,25,60)
            layer.line(-70,0,70,0)
            layer.line(-60,-25,60,-25)
            layer.line(-60,25,60,25)*/
            //51sskgb

            /*layer.fill(255)
            layer.beginShape()
            for(let a=0,la=20;a<la;a++){
                layer.vertex(sin(a*18)*(80-a%2*20),cos(a*18)*(80-a%2*20))
            }
            layer.endShape()
            layer.fill(0)
            for(let a=0,la=10;a<la;a++){
                layer.quad(0,-5,-16,-55,0,-75,16,-55)
                layer.rotate(36)
            }
            layer.fill(255)
            layer.ellipse(0,0,40)
            layer.fill(0)
            layer.ellipse(0,0,33)
            layer.fill(255)
            layer.ellipse(0,0,15)*/
            //128ssumab

            /*layer.fill(255)
            layer.triangle(-40,80,40,80,0,-20)
            layer.arc(0,80,80,40,0,180)
            layer.ellipse(0,-65,50)
            layer.fill(0)
            layer.triangle(-36,80,36,80,0,-10)
            layer.arc(0,80,72,32,0,180)
            layer.ellipse(10,-75,40)
            layer.stroke(255)
            layer.strokeWeight(3)
            layer.line(0,-10,-20,95)*/
            //509ssmpeb

            /*for(let a=0,la=3;a<la;a++){
                for(let b=0,lb=3-a%2;b<lb;b++){
                    layer.push()
                    layer.translate(b*60-lb*30+30,a*50-la*25+15)
                    layer.fill(255)
                    layer.rect(0,0,40,10)
                    layer.rect(0,0,10,40)
                    layer.fill(0)
                    layer.rect(0,0,34,4)
                    layer.rect(0,0,4,34)
                    layer.pop()
                }
            }*/
            //553ssvgd

            /*layer.fill(255)
            for(let a=0,la=4;a<la;a++){
                layer.triangle(0,0,-5,-80,5,-80)
                layer.triangle(0,0,-20,-70,-10,-70)
                layer.triangle(0,0,10,-70,20,-70)
                layer.rotate(90)
            }
            layer.rotate(45)
            layer.rect(0,0,12,150)
            layer.rect(0,0,150,12)
            layer.rect(-75,0,24,48,4)
            layer.arc(0,-70,60,40,-180,0)
            layer.rect(0,-68.5,60,3)
            layer.fill(0)
            layer.rotate(-45)
            for(let a=0,la=4;a<la;a++){
                layer.triangle(0,-28,-3,-77,3,-77)
                layer.triangle(-6,-28,-16,-67,-12,-67)
                layer.triangle(6,-28,12,-67,16,-67)
                layer.rotate(90)
            }
            layer.rotate(45)
            layer.rect(0,0,6,144)
            layer.rect(0,0,144,6)
            layer.rect(-75,0,18,42,2)
            layer.arc(0,-70,54,34,-180,0)*/
            //84ssklr

            /*layer.translate(-10,-25)
            layer.noFill()
            layer.strokeCap(PROJECT)
            layer.stroke(255)
            layer.strokeWeight(25)
            for(let a=0,la=4;a<la;a++){
                layer.line(0,0,-58,0)
                layer.arc(0,0,120,120,-180,-135)
                layer.rotate(90)
            }
            layer.stroke(0)
            layer.strokeWeight(20)
            for(let a=0,la=4;a<la;a++){
                layer.line(0,0,-58,0)
                layer.arc(0,0,120,120,-180,-135)
                layer.rotate(90)
            }
            layer.translate(30,60)
            layer.rotate(30)
            layer.scale(0.9)
            layer.strokeCap(PROJECT)
            layer.noFill()
            layer.stroke(255)
            layer.strokeWeight(15)
            layer.line(0,-40,0,80)
            layer.line(-20,80,0,80)
            layer.line(-15,-50,15,-50)
            layer.line(-15,-80,15,-80)
            layer.arc(-20,-65,30,30,90,270)
            layer.arc(20,-65,30,30,-90,90)
            layer.stroke(0)
            layer.strokeWeight(10)
            layer.line(0,-45,0,80)
            layer.line(-20,80,0,80)
            layer.line(-15,-50,15,-50)
            layer.line(-15,-80,15,-80)
            layer.arc(-20,-65,30,30,90,270)
            layer.arc(20,-65,30,30,-90,90)*/
            //lsssfs

            /*layer.noFill()
            layer.strokeCap(PROJECT)
            layer.stroke(255)
            layer.strokeWeight(25)
            for(let a=0,la=4;a<la;a++){
                layer.line(0,0,-58,0)
                layer.arc(0,0,120,120,-205,-155)
                layer.rotate(90)
            }
            layer.stroke(0)
            layer.strokeWeight(20)
            for(let a=0,la=4;a<la;a++){
                layer.line(0,0,-58,0)
                layer.arc(0,0,120,120,-205,-155)
                layer.rotate(90)
            }*/
            //sgb

            /*layer.noFill()
            layer.strokeCap(PROJECT)
            layer.stroke(255)
            layer.strokeWeight(25)
            for(let a=0,la=4;a<la;a++){
                layer.line(0,0,-58,0)
                layer.arc(0,0,120,120,-180-a%2*25,-155-a%2*25)
                layer.rotate(90)
            }
            layer.point(42,-42)
            layer.point(-42,42)
            layer.stroke(0)
            layer.strokeWeight(20)
            for(let a=0,la=4;a<la;a++){
                layer.line(0,0,-58,0)
                layer.arc(0,0,120,120,-180-a%2*25,-155-a%2*25)
                layer.rotate(90)
            }
            layer.point(42,-42)
            layer.point(-42,42)*/
            //seb

            /*layer.noFill()
            layer.strokeCap(PROJECT)
            layer.stroke(255)
            layer.strokeWeight(25)
            for(let a=0,la=4;a<la;a++){
                layer.line(0,0,-58,0)
                layer.arc(0,0,120,120,-215+a%2*25,-145-a%2*25)
                layer.rotate(90)
            }
            layer.stroke(0)
            layer.strokeWeight(20)
            for(let a=0,la=4;a<la;a++){
                layer.line(0,0,-58,0)
                layer.arc(0,0,120,120,-215+a%2*25,-145-a%2*25)
                layer.rotate(90)
            }*/
            //ssb

            /*layer.fill(255)
            regStar(layer,-60,-20,6,25,25,10,10,0)
            regStar(layer,0,-20,6,25,25,10,10,0)
            regStar(layer,60,-20,6,25,25,10,10,0)
            layer.rect(0,30,160,15)
            layer.fill(0)
            regStar(layer,-60,-20,6,20,20,7,7,0)
            regStar(layer,0,-20,6,20,20,7,7,0)
            regStar(layer,60,-20,6,20,20,7,7,0)
            layer.rect(0,30,156,11)*/
            //103sshtb

            /*layer.fill(255)
            layer.rect(0,0,20,100)
            layer.rect(0,-30,50,20)
            layer.rect(0,0,50,20)
            layer.rect(0,30,50,20)
            layer.quad(-10,-50,-40,-90,-20,-90,10,-50)
            layer.quad(10,-50,40,-90,20,-90,-10,-50)
            layer.quad(-10,50,-40,90,-20,90,10,50)
            layer.quad(10,50,40,90,20,90,-10,50)
            layer.fill(0)
            layer.rect(0,0,16,100)
            layer.rect(0,-30,46,16)
            layer.rect(0,0,46,16)
            layer.rect(0,30,46,16)
            layer.quad(-8,-50,-36,-88,-21,-88,8,-50)
            layer.quad(8,-50,36,-88,21,-88,-8,-50)
            layer.quad(-8,50,-36,88,-21,88,8,50)
            layer.quad(8,50,36,88,21,88,-8,50)*/
            //118ssmtb

            /*layer.fill(255)
            layer.triangle(0,0,-40,-80,40,-80)
            layer.triangle(0,0,-40,80,40,80)
            layer.fill(0)
            layer.triangle(0,-8,-34,-76,34,-76)
            layer.triangle(0,8,-34,76,34,76)
            layer.stroke(255)
            layer.strokeWeight(4)
            layer.line(-20,-45,30,-65)
            layer.line(-30,-65,20,-45)
            layer.line(-20,45,30,65)
            layer.line(-30,65,20,45)*/
            //ssab'rufumi'

            /*layer.fill(255)
            regStar(layer,-60,-70,5,25,25,10,10,36)
            regStar(layer,20,-70,5,25,25,10,10,36)
            regStar(layer,-20,-30,5,25,25,10,10,36)
            regStar(layer,-60,10,5,25,25,10,10,36)
            regStar(layer,20,10,5,25,25,10,10,36)
            layer.fill(0)
            regStar(layer,-60,-70,5,20,20,8,8,36)
            regStar(layer,20,-70,5,20,20,8,8,36)
            regStar(layer,-20,-30,5,20,20,8,8,36)
            regStar(layer,-60,10,5,20,20,8,8,36)
            regStar(layer,20,10,5,20,20,8,8,36)*/
            //sssd'santakorusu'

            return layer
        case 92:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 93:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 94:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 95:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 96:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 97:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 98:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 99:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 100:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 101:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 102:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 103:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 104:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 105:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 106:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 107:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 108:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 109:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
        case 110:
            layer=createGraphics(300,300)
            setupLayer(layer)
            layer.translate(layer.width/2,layer.height/2)
            return layer
    }
    return 0
}