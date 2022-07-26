import style from "./style.css";
import layout from "./components/layout.css";
import { getItem, renderForm } from "./components/HtmlElements.js";
import createtaskElement from "./components/Task.js";

// parse loclastorage(`task${id}) and check if topic match with selection if true render task and append

getItem.$btnCreate.addEventListener("click", () => { document.body.append(renderForm());
    const mask = document.querySelector('div.mask');

    mask.addEventListener("click", close);

    function close(e) {
        if(e.target == mask){
            mask.remove();
            return;
        }else{
            console.log(e.target);
        }
    }
});

const navItem = document.querySelectorAll('div.navbar_item');

navItem.forEach((el)=>{
    el.addEventListener('click', (e) => {
        const item = e.target.classList;
        item.toggle('selected');
    });
});

console.log("");