import { data } from "../data/data.js";

data.count=0;


export const addLap = (e) => {
    e.preventDefault();


  let ol = document.getElementById("laps-list");

  let list = document.querySelectorAll(".time-digit");

let hr = list[0].textContent;
console.log(hr);
let mn = list[1].textContent;
console.log(mn);
let sc = list[2].textContent;
console.log(sc);
let ms = list[3].textContent;
console.log(ms);

data.hours=hr;
data.minutes=mn;
data.seconds=sc;
data.miliseconds=ms;



console.log(data);

//   for (const i of list) {
//     console.log(i.textContent);
//     data.laps[0].push      //push(i.textContent);
//     console.log(data.laps.textContent)
//   }

  let addLi = document.createElement("li");
  data.count++;
  addLi.className="laps-items";
  


  addLi.innerHTML = `${data.count}.     ${data.hours} : ${data.minutes} : ${data.seconds} : ${data.miliseconds} `
//   addLi.innerHTML= `"${count}" "${data.hours}" " : "${data.minutes} " : "${data.seconds} " : "${data.miliseconds} `
  
  ol.appendChild(addLi);
//   count++;

};
