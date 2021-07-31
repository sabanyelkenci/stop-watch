import { stopWatch } from "../handler/stopWatch.js";
import { startStop } from "../handler/stopWatch.js";
import { reset } from "../handler/stopWatch.js";
import { addLap } from "../handler/laps.js";


document.getElementById("btnStart").addEventListener("click", stopWatch);
document.getElementById('btnStart').addEventListener("click", startStop);
document.getElementById('reset').addEventListener("click", reset);
document.getElementById('laps').addEventListener('click',addLap);