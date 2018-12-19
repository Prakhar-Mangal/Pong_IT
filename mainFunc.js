var w,h;
function startUp(){
	w=windowWidth/100;
	h=windowHeight/100;
}

function collide(ball,slide){
	 dl=dist(slide.bl.x,slide.bl.y,ball.x,ball.y);
     dr=dist(slide.br.x,slide.br.y,ball.x,ball.y);
	if((ball.x+ball.r/2>slide.x)&&(ball.x+ball.r/2<slide.x+slide.l)&&(ball.y-ball.r/2<slide.y+slide.b)&&(ball.y+ball.r/2>slide.y)||(dl<ball.r+slide.bl.r||dr<ball.r+slide.br.r))
        return true;
    else
    	return false;
}
function checkBounceX(x,ball){
	if(x+ball.r<=0||x+ball.r>=100*w)
		return true;
	else
		return false;

}
function checkBounceY(y,ball){
	if(y>=100*h||y<=0)
		return true;
	else
		return false;
}
function checkPaddle(slide){
	if(slide.y==0||slide.y==97*h)
		return true;
	else
		false;
}
function setHScore(t){

	if(getCookie('highScore')<t)
  setCookie('highScore',t,1);

}
function showGameOver(){
	noStroke();
  background(255,0,0);
  fill(255,255,0);
  textSize(50*w/h);
  textAlign(CENTER);
  text('GAME OVER',50*w,50*h);
  text('Tab to Restart',50*w,70*h);
}
function showScore(t){
fill(125);
stroke(500);
textSize(50*w/h);
text(t, 50*w,50*h);
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function checkCookie(str) {

  var user = getCookie(str);
  if (user == "") {
    setCookie(str,0,1);
    //alert("Welcome again " + user);

  } else {
		return true;
  //  user = prompt("Please enter your name:", "");
    //if (user != "" && user != null) {
      //setCookie("username", user, 365);
    }
  }
	function checkFileExist(url){
	  var xhr=new XMLHttpRequest();
	  xhr.open('HEAD',url,false);
	  xhr.send();
	  if(xhr.status=="404"){
	  return false;}
	  else {
	    return true;
	       }
	}
  function levelPassed(l){
    noStroke();
  background(0,255,0);
  fill(255,25,255);
  textSize(50*w/h);
  textAlign(CENTER);
  text('Level '+l+' Passed',50*w,50*h);
  text('Tab for next level',50*w,70*h);
  
  
}
