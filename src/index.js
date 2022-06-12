import style from "./style.css";
import layout from "./components/layout.css";
import { getItem, renderForm } from "./components/HtmlElements.js";
import createtaskElement from "./components/Task.js";
import {getTaskInfo} from "./components/Task.js";

// parse loclastorage(`task${id}) and check if topic match with selection if true render task and append

getItem.$btnCreate.addEventListener("click", () => {
    document.body.append(renderForm());
    const mask = document.querySelector('div.mask');
    mask.addEventListener("click", close);
    function close(e) {
        if(e.target==mask){
            mask.remove();
            return;
        }else if (e.target){

        }
    };
})

console.log("");
console.log("");