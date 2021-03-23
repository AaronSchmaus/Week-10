var headx=300;
var heady=400;
var headDirection=1;

var eyesx=400;
var eyesy=350;
var eyesDirection=-2;

var size = 22;
var count=0;
var sizedirection=2;


function setup()

{
    createCanvas(600, 800)
}

function draw()



{


//background
background(120,45,78);
fill(255,222,173);
   

//head
circle(headx,heady,500);
headx+=headDirection;
if(headx>=418 || headx<=82)
{
    headDirection+=-1;
}
ellipseMode(RADIUS);
fill(102,51,0);
arc(300, 250, 200, 100, 172.75,0);

//eyes
fill(255,255,255);
arc(400, 350, 30, 10, 0, PI); 
arc(400, 350, 30, 10, 172.75,0);   

fill(102,51,0);
ellipse(eyesx, eyesy, 10, 10);
eyesx+=eyesDirection;
if(eyesx>=10 || eyesx<=10)
{
    eyesDirection+=-2;
    
ellipseMode(CENTER);
fill(0, 0, 0);
ellipse(400, 350, 10, 10);

fill(255,255,255);
arc(200, 350, 60, 20, 0, PI);
arc(200, 350, 60, 20, 172.75,0);  

fill(102,51,0);
ellipse(200, 350, 20, 20);
ellipseMode(CENTER);
fill(0, 0, 0);
ellipse(200, 350, 10, 10);


//hair
fill(255,255,255);
arc(300, 500, 200, 30, 0, PI);
arc(300, 500, 200, 30, 172.75,0); 



//Nose
line (200, 500, 400, 500);
noFill();
stroke(0, 0, 0);
bezier(300, 350, 325, 440, 300, 450, 280, 450);

//facial hair
fill(102,51,0);
triangle(250, 575, 350, 575, 300, 600);


}
