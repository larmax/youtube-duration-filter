
var timer = 0;
var option = null;
// scrolling page to bottom in order to have all results visible

console.log('getpagesSource');

//checking if popup.js has sent a  start message
checkStart();

console.log('started?',started);


function checkStart(){
  console.log('checkStart');

  //getting message from popup.js
  var port = chrome.runtime.connect({name:"mycontentscript"});
  port.onMessage.addListener(function(message,sender){
    console.log('message', message.starter);
    option = message.starter.option;
console.log(option);
    timer = message.starter.time;
    if(message.starter.start === true && !dontStart){
      started = true;
      window.scrollTo(0,100000);
      console.log('started?', started);
      // calling find names function
      findNames();

    }else {
      console.log('stopped');
    }
  });

}

function findNames() {

  const videosTime = document.getElementsByClassName('style-scope ytd-thumbnail-overlay-time-status-renderer')
const  videos = document.getElementsByTagName("ytd-shelf-renderer")
console.log(videos, "videos");
console.log(videosTime, "videosTime");
  videoArr = [];
console.log(videosTime);

  for (var i = 0; i < videosTime.length; i++) {
    videoArr.push(videosTime[i].innerHTML);

    }

    console.log(videoArr);
      console.log(videoArr.length);
      let vidLength = [];
  for (var i = videoArr.length-1; i >= 0; i--) {
    console.log(videoArr[i],i);

videoArr[i] = parseTime(videoArr[i])
    console.log(videoArr[i],"videoArr");
    console.log(timer,"timer");
  if (option == "L") {
      console.log("option yes",option);

if (videoArr[i] <= timer || typeof(videoArr[i]) === "undefined"||videoArr[i] === "REMOVE" ) {
             console.log(videosTime[i], "removed");
          videos[i].remove()

       }else {
         console.log("fine",videoArr[i]);
       }
    }if (option == "S") {
      console.log("option yes",option);
      if (videoArr[i] >= timer || typeof(videoArr[i]) === "undefined"||videoArr[i] === "REMOVE") {
                   console.log(videosTime[i], "removed");
                videos[i].remove()

             }else {
               console.log("fine",videoArr[i]);
             }
    }if (option !== "S" && option !== "L") {

      console.log("no option",option);
      break;
    }
  }
  console.log(i);
  console.log(videoArr);

}

function parseTime(time){
  if (time.includes("PREMIERE") || time.includes("LIVE") ) {
return "REMOVE";
  }
  console.log(time);
  time = time.replace(/[^0-9]/gi, '')

  console.log("time " + time);
  return time;
}
Object.size = function(obj) {
  console.log(obj, obj);
  var size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
