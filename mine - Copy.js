var h = window.innerHeight
var w = window.innerWidth




var canvas = document.getElementById("c");

canvas.width=w;
canvas.height=h;

var ctx = canvas.getContext("2d");
var circleCont = [];
var maxCircle = 500
for(var i=0;i<maxCircle;i++)
    {
     var circle = 
        {
            x:Math.random()*w,
            y:Math.random()*h,
            r:Math.random()*4+1
        }   
     circleCont.push(circle)
    }
function drawCircle()
{
    
    ctx.clearRect(0,0,w,h)
    ctx.beginPath();
        for(var i=0;i<circleCont.length;i++)
            {
        var c = circleCont[i] ;
      //  console.log(c)
        ctx.moveTo(c.x,c.y)
        ctx.arc(c.x,c.y,c.r,0,2*Math.PI)
            }
ctx.fillStyle="#fff";
ctx.fill();
    moveCircle()
}
function moveCircle()
{
    for(var i=0;i<circleCont.length;i++)
            {
        var c = circleCont[i] ;
        c.y +=1; 
        c.x +=1; 
                
            if(c.y>h)
                {
             circleCont[i].y=-20;        
                }
            if(c.x>w)
                {
             circleCont[i].x=-20;        
                }                  
            }   
}
setInterval(drawCircle,10)



var body = document.getElementById("all");
var game = document.getElementById("game")
var rocket = document.getElementById("rocket")
var bullet = document.getElementById("bullet")

var x = 0;
var y = 0;
body.addEventListener("keydown", 
                      
 function(e){
    console.log(e.keyCode)
    if(e.keyCode == 39)
        {
        x+=100;    
        if(x>w-150 )
            {
                x=w-220;
            }
        game.style.left =x;   
        }
    else if(e.keyCode == 37)
        {
    if(x<0)
        {
            x=0;
        }
            x-=100;    
        game.style.left =x;   
        
        }
    else if(e.keyCode == 32)
        {
        y+=100;    
      bullet.style.bottom = y ;
document.getElementById("bulletAudio").play();    
        }
            }
                     
                    )






body.addEventListener("keyup", 
                      
 function(e){
    console.log(e.keyCode)
    
    if(e.keyCode == 32)
        {
      bullet.style.bottom = 0; 
            /*
document.getElementById("bulletAudio").pause();    
document.getElementById("bulletAudio").currentTime=0;
*/
            
        }
            }
                     
                    )




