import createHtmlElement from "./HtmlElements.js";
import { getItem, renderForm } from "./HtmlElements";
import { remove } from "lodash";

// Form functions
//     add show and hide feauture
//     add get form info 
//     add reset values

const Task = (title, details, date, status, tag, topic, project, id) => ({
    title,
    details,
    date, 
    status,
    tag,
    topic,
    project,
    id,
});

function checkExistence (element) {
    return (!element) ? element : "" ;
};

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
};

const getTaskInfo = (()=>{
    getItem.$btnSubmit.forEach((element) => 
     element.addEventListener("click", (e) => {

        const Scope = e.target.parentElement 
        
        let title = Scope.querySelector(`input#title`).value;
        let details = checkExistence(Scope.querySelector(`input#title`).value);
        let date = checkExistence(Scope.querySelector(`input#title`).value);
        let status = "pending";
        let tag = checkExistence(Scope.querySelector(`input#title`).value);
        let project = checkExistence(Scope.querySelector(`input#title`).value);
        let topic = checkExistence(Scope.querySelector(`input#title`).value);
        let id = idcounter();

        console.log(id);
        let newTask = Task(title, details, date, status, tag, project, topic, id);
        
        localStorage.setItem(`task${id}`, JSON.stringify(newTask));


        console.log(newTask);
        getItem.$tasksContainer.append(createTaskElement(newTask))

        })
    );
})();


function createTaskElement (task) {
    const $taskItem = createHtmlElement("div", task.id, ["taskItem-container"], null);
    const $eventBooster = createHtmlElement("div", null, ["eventBooster"], null);
    const $button = createHtmlElement("button", null, null , "check");
    const $taskContent = createHtmlElement("div", null, ["taskItem-content"], null);
     const $tasktitle = createHtmlElement("div", null, ["title"], task.title); 
     const $taskdate = createHtmlElement("div", null, ["date"], task.date); 
    const $tasktools = createHtmlElement("div", null, ["taskItem-tools"], "Edit & Del");


    $tasktools.addEventListener("click", (e) => { e.target.parentElement.remove()})
    $taskContent.append($tasktitle, $taskdate);
    $taskItem.append($eventBooster, $button, $taskContent, $tasktools);

    console.log(`Inside taskElement Task.js`);

    return ($taskItem);
}

export default createTaskElement;
export {getTaskInfo}