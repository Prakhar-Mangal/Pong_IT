var startButton;
function setup(){
  startUp();
 startButton=new Ball(50*w,60*h,50*w/h);
  createCanvas(100*w,100*h);
  background(0);
  checkCookie('highScore');
  checkCookie('recentTime');
  checkCookie('level');
}
function draw(){
  noStroke();
  //background(0);
  fill(255,255,0);
  textSize(40*w/h);
  textAlign(CENTER);
  text('High-Score: '+getCookie('highScore'),45*w,30*h);
  text('Latest-Score: '+getCookie('recentTime'),45*w,40*h);
  text('Level: '+getCookie('level'),45*w,50*h);
  startButton.create();
  textSize(startButton.r/1.5);
  fill(255,255,0);
  text('Start',startButton.x,startButton.y);
  noLoop();
}
function mousePressed(){
  var d=dist(startButton.x,startButton.y,mouseX,mouseY);
  if(d<startButton.r){
    if(getCookie('level')==0)
      setCookie('level','L1',1);
    window.location.href=getCookie('level')+'.html';
}
}
