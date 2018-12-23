var c=0 ,t=0,n=0,n1=0;
var slides=[];
var ball,a=4,b=4,x=200,y=300;
var slide1,slde2,slide3,socket;
var pong,gameover;
function preload(){
  soundFormats('mp3', 'ogg');
  pong = loadSound('pong.mp3');
  gameover=loadSound('Gameover.mp3');
}
function setup(){
  startUp();
checkCookie('highScore');
checkCookie('recentTime');
  print(getCookie('recentTime'));

    print('high-'+getCookie('highScore'));
  createCanvas(100*w,100*h);
  ball =new Ball(50*w,50*h,20*w/h);
  slide1=new Bar(25*w,97*h,25*w,3*h);
  slide2=new Bar(25*w,0,25*w,3*h);
  slides.push(slide1);
  slides.push(slide2);
slide3=new Bar(random(10,45)*w,random(60,80)*h,15*w,3*h);
  slide4=new Bar(random(55,85)*w,random(40,60)*h,15*w,3*h);
  slide3.updateColor(218,115,214);
   slide3.br.updateColor(218,115,214)
  slide3.bl.updateColor(218,115,214)
  slide4.updateColor(218,115,214);
  slide4.br.updateColor(218,115,214)
  slide4.bl.updateColor(218,115,214)
  slides.push(slide3);
  slides.push(slide4);
}

function draw(){
background(25);
showScore(t);
ball.create();
i=0;
slides.forEach(slide => {
  slide.create();
  if(	(checkPaddle(slide)))
    slide.move(getMX(),slide.y);

i++;
});

x+=a;
y+=b;
if(checkBounceX(x,ball)){
  pong.play();
  a=-a;
}
if(checkBounceY(y,ball)){
  showGameOver();
  setCookie('recentTime',t,1);
  setHScore(t);
  c=1;
  t=0;
  gameover.play();
  noLoop();
}
ball.move(x,y);
slides.forEach(slide =>{
 if(collide(ball,slide)){
	if(!checkPaddle(slide)){
		if(slide==slide3){x=slide4.x;y=slide4.y;}
			else if(slide==slide4){x=slide3.x;y=slide3.y;}
			//b=-b;
      if(b<=0){y=y-5*h}
      if(b>0){y=y+5*h}
	}else{
      b=-b;
      if(b<=0){y=y-5*h}
      if(b>0){y=y+5*h}
      ball.updateColor(random(255),random(255),random(255));
      pong.play();
  }
}
});
passLevel();
}

function mouseClicked(){
//window.location.href='hello.html';
 if(c==1){
  window.location.href='index.html';
    c=0;
  }
  if(c==2){
  window.location.href='index.html';
   
  }

}
function passLevel(){
  if(t>30){
    setCookie('level','L8',1);
    levelPassed(7 ,'comming Soon');
    c=2;
    noLoop();
  }
  }
setInterval(function(){
  t++;
  
  if(t%5==0){
    resetSketch();
    slides.pop();
    slides.pop();
   slide3=new Bar(random(10,45)*w,random(60,80)*h,15*w,3*h);
  slide4=new Bar(random(55,85)*w,random(40,60)*h,15*w,3*h);
  slide3.updateColor(218,115,214);
   slide3.br.updateColor(218,115,214)
  slide3.bl.updateColor(218,115,214)
  slide4.updateColor(218,115,214);
  slide4.br.updateColor(218,115,214)
  slide4.bl.updateColor(218,115,214)
  slides.push(slide3);
  slides.push(slide4);
  }

},1000);

function resetSketch(){
  //slide1=new Bar(slide1.x,slide1.y,100*w,3*h);
  //slide2=new Bar(slide2.x,slide2.y,slide2.l*2,3*h);
  if(n1<2){
    n1++;
  ball.r= ball.r*3/4;
  slide1.l=slide1.l/1.5;
  slide2.l=slide2.l/1.5;

  }
  if(n==0){
    n=1;
  if(a<0)
  a=-6;
  else
    a=6;
    if(b<0)
    b=-6;
    else
      b=6;
    }
    else{
      n=0;
      if(a<0)
      a=-5;
      else
        a=5;
        if(b<0)
        b=-5;
        else
          b=5;
    }
//ball =new Ball(ball.x,ball.y,15*w/h);


}
