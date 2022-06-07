import createHtmlElement from "./HtmlElements.js";
import { getItem } from "./HtmlElements";



// function createTask() {
//     const _getTaskInfo = () => {

//         return "Array";
//     };

//     const taskElement = (()=>{
//         // type, id, classArray, content
//         const $taskItem = createHtmlElement("div", null, ["taskItem-container"], null);
//         const $eventBooster = createHtmlElement("div", null, ["eventBooster"], null);
//         const $button = createHtmlElement("div", null, null , null);
//         const $taskContent = createHtmlElement("div", null, ["taskItem-content"], null);
//          const $tasktitle = createHtmlElement("div", null, ["title"], "Title"); 
//          const $taskdate = createHtmlElement("div", null, ["date"], "Date"); 
//         const $tasktools = createHtmlElement("div", null, ["taskItem-tools"], null);

//         $taskContent.append($tasktitle, $taskdate);
//         $taskItem.append($eventBooster, $button, $taskContent, $tasktools);

//         return $taskItem;        
//     })();

//     return taskElement;
// }


function taskElement () {
    const $taskItem = createHtmlElement("div", null, ["taskItem-container"], null);
    const $eventBooster = createHtmlElement("div", null, ["eventBooster"], null);
    const $button = createHtmlElement("button", null, null , "check");
    const $taskContent = createHtmlElement("div", null, ["taskItem-content"], null);
     const $tasktitle = createHtmlElement("div", null, ["title"], "Title"); 
     const $taskdate = createHtmlElement("div", null, ["date"], "Date"); 
    const $tasktools = createHtmlElement("div", null, ["taskItem-tools"], "Edit and Del");

    $taskContent.append($tasktitle, $taskdate);
    $taskItem.append($eventBooster, $button, $taskContent, $tasktools);

    console.log(`Inside Task.js`);
    console.log($taskItem);

    return ($taskItem);
}


export default taskElement;