const getItem = (()=> {
  const d = document,
    $header = d.querySelector('div#header'),
     $greet = d.querySelector('div.greet'),
     $tools = d.querySelector('div.tools'),
     $settigns = d.querySelector('div.settings'),
    $sidebar = d.querySelector('div#sidebar'),
     $sidebarTop =d.querySelector('div[class=sidebar-top]'),
      $profile = d.querySelector('div.profile'),
      $createTask = d.querySelectorAll('div[class=create-task]>button'),
     $navbar = d.querySelector('div.navbar'),
      $overview = d.querySelector('div.overview'),
      $timeRange = d.querySelector('div[clas=time-range]'),
      $categories = d.querySelector('div.categories'),   
    $main = d.querySelector('div#main'),
      $tasksContainer = d.querySelector('div[class=tasks-container]'),
      $infoContainer = d.querySelector('div[class=taskItem-container]');

  return { d, $header, $greet, $tools, $settigns, $sidebar, 
           $sidebarTop, $profile, $createTask, $navbar, $overview,
           $timeRange, $categories, $main, $tasksContainer, $infoContainer
  };
})();

function createHtmlElement(type, id, classesArray, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (classesArray){
    classesArray.forEach((sgclass) => element.classList.add(sgclass));
  };
  if (content) element.innerText = content;

  return element;
}

export default createHtmlElement;
export {getItem};
