var starter = new Object();
starter.start = false;
starter.option = null;
starter.time = 0;
console.log("popup.js");
   console.log(document.getElementsByName('hrs').value);

document.addEventListener('DOMContentLoaded', function() {


  goButton.addEventListener("click", function(){
    console.log('start');
    starter.start = true;
    var i = 0;
    var radios = document.getElementsByName('option');
console.log(radios);
    for (var i = 0, length = radios.length; i < length; i++){
     if (radios[i].checked){
      // do whatever you want with the checked radio
      console.log(radios[i].value);
starter.option = radios[i].value;
      // only one radio can be logically checked, don't check the rest
      break;
     }
   }

   console.log(document.getElementsByName('hrs')[0].value,"value");
   console.log(document.getElementsByName('hrs'),"plain");
let times = "";
let h = typeof(document.getElementsByName('hrs')[0].value) !== "undefined" ?  document.getElementsByName('hrs')[0].value : 0
let min = typeof(document.getElementsByName('mins')[0].value) !== "undefined" ? document.getElementsByName('mins')[0].value : 00
let sec = typeof(document.getElementsByName('secs')[0].value) !== "undefined" ? document.getElementsByName('secs')[0].value : 00
if (min.length === 1) {
min = "0"+min
}
if (sec.length === 1) {
sec = "0"+sec
}
console.log(h,min,sec);
times = times.concat(h,min,sec);
console.log(times, "1times");
times = parseInt(times,10);
console.log(times, "2times");
starter.time = times;
      chrome.runtime.onConnect.addListener(function(port){
      console.log('addListener');
        port.postMessage({starter: starter});
      });
      console.log('starter', starter);
      console.log('  port.postMessage');
      chrome.tabs.executeScript(null, {

        file: 'getPagesSource.js'

      });

      i++;
      console.log(i);
    // }, 1000);
    //   function getPagesSource (){
    //   chrome.tabs.executeScript(null, {
    //
    //       file: 'getPagesSource.js'
    //
    // });
    // }


  });

});
