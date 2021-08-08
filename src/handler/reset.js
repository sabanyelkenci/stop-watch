import { data } from "../data/data.js";

let { hours, minutes, seconds } = data;

export const reset = () => {
  window.clearInterval(data.interval);

  data.miliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  data.count = 0;
  console.log(data);

  document.getElementById("milliseconds").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("hours").innerHTML = "00";

  document.getElementById("btnStart").innerHTML = "Start";
  status = "stopped";

  let listLaps = document.getElementById("laps-list");
  let child = listLaps.lastElementChild;
  while (child) {
    listLaps.removeChild(child);
    child = listLaps.lastElementChild;
  }
};
