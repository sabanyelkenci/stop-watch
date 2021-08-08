import { stopWatch } from "../handler/stopWatch.js";
import { startStop } from "../handler/stopWatch.js";
import { reset } from "../handler/reset.js"; // it is not a only file name we can also use the function name at the same js file
import { addLap } from "../handler/laps.js";


document.getElementById("btnStart").addEventListener("click", stopWatch);
document.getElementById('btnStart').addEventListener("click", startStop);
document.getElementById('reset').addEventListener("click", reset);
document.getElementById('laps').addEventListener('click',addLap);