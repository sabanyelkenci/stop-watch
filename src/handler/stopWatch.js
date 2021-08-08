// import { button } from "../components/button.js";
// import { btnListener } from "../listeners/listeners.js"
import { data } from "../data/data.js";

let msec = 0;
let sec = 0;
let min = 0;
let hrs = 0;

let displayMsec = 0;
let displaySec = 0;
let displayMin = 0;
let displayHrs = 0;

let status = "stopped";


export const stopWatch = () => {
  // let milSecond = setInterval(()=>{
  msec += 1;
  // console.log(msec);
  // document
  //   .getElementById("milliseconds")
  //   .innerHTML= msec;
  if (msec / 1000 === 1) {
    // clearInterval(milSecond);
    msec = 0;
    // console.log(msec);
    sec++;
    // console.log(sec);document
    //     .getElementById("seconds")
    //     .innerHTML= sec;
    if (sec / 60 === 1) {
      sec = 0;
      min++;

      if (min / 60 === 1) {
        min = 0;
        hrs++;
      }
    }
    
  }

  if (msec < 10) {
    displayMsec = "00" + msec.toString();
  } else if (msec < 100) {
    displayMsec = "0" + msec.toString();
  } else {
    displayMsec = msec;
  }

  if (sec < 10) {
    displaySec = "0" + sec.toString();
  } else {
    displaySec = sec;
  }

  if (min < 10) {
    displayMin = "0" + min.toString();
  } else {
    displayMin = min;
  }

  if (hrs < 10) {
    displayHrs = "0" + hrs.toString();
  } else {
    displayHrs = hrs;
  }



  document.getElementById("milliseconds").innerHTML = displayMsec;
  document.getElementById("seconds").innerHTML = displaySec;
  document.getElementById("minutes").innerHTML = displayMin;
  document.getElementById("hours").innerHTML = displayHrs;
};

export const startStop = () => {
  if (status === "stopped") {
    console.log(status);

    data.interval = window.setInterval(stopWatch,1);
    document.getElementById("btnStart").innerHTML = "Pauze";
    status = "started";
  } else {
    window.clearInterval(data.interval);
    document.getElementById("btnStart").innerHTML = "Start";
    status = "stopped";
  }
};

export const reset = () => {
  clearInterval(data.interval);

  msec = 0;
  sec = 0;
  min = 0;
  hrs = 0;

  displayMsec = 0;
  displaySec = 0;
  displayMin = 0;
  displayHrs = 0;


  document.getElementById("milliseconds").innerHTML = msec;
  document.getElementById("seconds").innerHTML = sec;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("hours").innerHTML = hrs;

  document.getElementById("btnStart").innerHTML = "Start";
  status = "stopped";

 let listLaps = document.getElementById("laps-list");
 let child = listLaps.lastElementChild;
 while(child){
  listLaps.removeChild(child);
  child= listLaps.lastElementChild;
 }
 

};
