console.log("page loaded...");

var myvideo=document.getElementById("playpause");
function playpause(){
 if (myvideo.paused)
    myvideo.play();
    else 
    myvideo.pause();
}