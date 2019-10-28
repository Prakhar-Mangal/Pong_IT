# Pong_IT
A mature PingPong Game having multiple Crazy levels.
**This is a Game to be played on android** 
## Download APK Here
[Click to Download](#)
## Rules to Add new LEVEL

 1. No one will ever change `mainFunction.js` & `pingPong.js` (and sound) except permission from master
 2. Every level must have `mainFunction.js` & `pingPong.js` & `L.js` (and sound) in `L.js`
 3. First check the cookie `highScore` &  `recentTime`
 4. After level is passed make a function protottype: 

    passLevel(){
    if(t>20){
     setCookie('level','L2',1); 
     levelPassed(1,'Faster'); 
     // 'Name of next level or else commingsoon' c=2 noLoop(); 
          }
    }

5. 

    function mouseClicked(){
     if(c==1){ window.location.href='index.html'; c=0; } 
     if(c==2){ window.location.href=getCookie('level')+'.html'; }
      }

## Built With

 - **P5.js** Javascript Library
 - **APK-Karan** - Cordova 

## Creators

 - [Rajaram Joshi](https://github.com/TheCBKM)
 - [Prakhar Mangal](https://github.com/Prakhar-Mangal)

## Screenshots



