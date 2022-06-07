import style from "./style.css";
import layout from "./components/layout.css";
import { getItem } from "./components/HtmlElements.js";
import taskElement from "./components/Task.js";



getItem.$tasksContainer.append(taskElement());
getItem.$tasksContainer.append(taskElement());
getItem.$tasksContainer.append(taskElement());
getItem.$tasksContainer.append(taskElement());