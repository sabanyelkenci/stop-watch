// import { button } from "../components/button.js";
// import { btnListener } from "../listeners/listeners.js"

let msec = 0;
let sec = 0;
let min = 0;
let hrs = 0;

let displayMsec = 0;
let displaySec = 0;
let displayMin = 0;
let displayHrs = 0;

let status = "stopped";
let interval = null;

export const stopWatch = (e) => {
  // let milSecond = setInterval(()=>{
  msec++;
  // console.log(msec);
  // document
  //   .getElementById("milliseconds")
  //   .innerHTML= msec;
  if (msec / 250 === 1) {
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

    // if(msec<10){

    //   displayMsec = "0" + msec.toString();
    // } else {displayMsec=msec}

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
  }
  document.getElementById("milliseconds").innerHTML = msec;
  document.getElementById("seconds").innerHTML = displaySec;
  document.getElementById("minutes").innerHTML = displayMin;
  document.getElementById("hours").innerHTML = displayHrs;
};

export const startStop = () => {
  if (status === "stopped") {
    console.log(status);

    interval = window.setInterval(stopWatch, 0.001);
    document.getElementById("btnStart").innerHTML = "Pauze";
    status = "started";
  } else {
    window.clearInterval(interval);
    document.getElementById("btnStart").innerHTML = "Start";
    status = "stopped";
  }
};

export const reset = () => {

 window.clearInterval(interval);

   msec = 0;
   sec = 0;
   min = 0;
   hrs = 0;

  document.getElementById("milliseconds").innerHTML = displayMsec;
  document.getElementById("seconds").innerHTML = displaySec;
  document.getElementById("minutes").innerHTML = displayMin;
  document.getElementById("hours").innerHTML = displayHrs;

  document.getElementById("startBtn").innerHTML= "Start";

  // document.getElementById("milliseconds").innerHTML = 00;
  // document.getElementById("seconds").innerHTML = 00;
  // document.getElementById("minutes").innerHTML = 00;
  // document.getElementById("hours").innerHTML = 000;


};
