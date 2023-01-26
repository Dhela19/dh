function warning(){let wID=setTimeout(function set(){document.getElementById("info").innerHTML="This Version is Depreciated, Tap the button below to move to the newest version";
document.getElementById("redirect").style="display:inline"
},4000);}
warning()
 function redirect(){
alert("Redirecting to Version 2.1 in 5 seconds"); 
let tID=setTimeout(function deed(){
window.location.href="https://dh2-0.vercel.app"
}, 5000);}
//the temperature value is used to set the randomness of the output 
