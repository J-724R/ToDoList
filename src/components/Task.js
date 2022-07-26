import createHtmlElement from "./HtmlElements.js";
import { getItem, renderForm } from "./HtmlElements";
import { remove } from "lodash";

// Form functions
//     add show and hide feauture
//     add get form info 
//     add reset values

const Task = (title, notes, date, status, tag, topic, project, id) => ({
    title,
    notes,
    date, 
    status,
    tag,
    topic,
    project,
    id,
});

function checkExistence (element) {
    return (element) ? element : " " ;
}

function idcounter() {
    let defaultId = 0;
    let id;

    if(localStorage.getItem("id")){
        id = Number(localStorage.getItem("id"))+1;
        localStorage.setItem("id", id);
        console.log("true")
    }else{
        id = defaultId;
        localStorage.setItem("id", id);
        console.log("false");
    };
    
    return id;
}

function getTaskInfo(e){
    const Scope = e.target.parentElement;

    let title = Scope.querySelector(`input#title`).value;
    let notes = checkExistence(Scope.querySelector(`textarea[id=notes]`)).value;
    let date = checkExistence(Scope.querySelector(`input#dates`)).value;
    let status = "pending";
    let tag = checkExistence(Scope.querySelector(`input#tag`)).value;
    let project = checkExistence(Scope.querySelector(`input#topic`)).value;
    let topic = checkExistence(Scope.querySelector(`input#title`)).value;
    let id = idcounter();

    let newTask = Task(title, notes, date, status, tag, project, topic, id);
    localStorage.setItem(`task${id}`, JSON.stringify(newTask));
    console.log(newTask);
}

function createTaskElement (task) {
    const $taskItem = createHtmlElement("div", task.id, ["taskItem-container"], null);
    const $eventBooster = createHtmlElement("div", null, ["eventBooster"], null);
    const $button = createHtmlElement("button", "task-status", null , "check");
    const $taskContent = createHtmlElement("div", null, ["taskItem-content"], null);
     const $tasktitle = createHtmlElement("div", null, ["title"], task.title); 
     const $taskdate = createHtmlElement("div", null, ["date"], task.date); 
    const $tasktools = createHtmlElement("div", null, ["taskItem-tools"], "Edit & Del");

    // $taskItem.dateset.status = ;
    // $taskItem.dateset.tag = ;
    // $taskItem.dateset.topic = ;
    // $taskItem.dateset.project = ;

    $tasktools.addEventListener("click", (e) => { e.target.parentElement.remove()})
    $taskContent.append($tasktitle, $taskdate);
    $taskItem.append($eventBooster, $button, $taskContent, $tasktools);

    console.log(`Inside taskElement Task.js`);
    return ($taskItem);
}

export default createTaskElement;
export {getTaskInfo}