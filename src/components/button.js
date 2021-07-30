export const button =(text, handler)=>{

let div = document.createElement("div");
div.className= ".btn-container"
let btn = document.createElement("button");
btn.className=".btn"
btn.innerText = text;
div.appendChild(btn);
return div
};