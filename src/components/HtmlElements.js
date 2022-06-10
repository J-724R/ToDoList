const getItem = (()=> {
  const d = document,
    $header = d.querySelector('div#header'),
     $greet = d.querySelector('div.greet'),
     $tools = d.querySelector('div.tools'),
     $settigns = d.querySelector('div.settings'),
    $sidebar = d.querySelector('div#sidebar'),
     $sidebarTop =d.querySelector('div[class=sidebar-top]'),
      $profile = d.querySelector('div.profile'),
     $navbar = d.querySelector('div.navbar'),
      $overview = d.querySelector('div.overview'),
      $timeRange = d.querySelector('div[clas=time-range]'),
      $categories = d.querySelector('div.categories'),   
    $main = d.querySelector('div#main'),
      $tasksContainer = d.querySelector('div[class=tasks-container]'),
      // $infoContainer = d.querySelector('div[class=info-container]'),
    //Buttons
    $btnSubmit = d.querySelectorAll('button[id=btn-submit]'),
    $btnCreate = d.querySelector('button[id=btn-create]');

  return { d, $header, $greet, $tools, $settigns, $sidebar, $sidebarTop, $profile, 
           $navbar, $overview, $timeRange, $categories, $main, $tasksContainer, 
           /*$infoContainer,*/ $btnSubmit, $btnCreate
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

function renderForm() {
  const $form = document.createRange().createContextualFragment(`
        <form action="">
          <div class="form-options">
              <label for="title" class="">Title</label>
              <input type="text" name="title" id="title"></div>
          <div class="form-options">
              <label for="details" class="">Details</label>
              <input type="text" name="details" id="details"></div>
          <div class="form-options">
              <label for="date" class=""></label>
              <input type="text" name="date" id="date" placeholder="Due date">
          </div>     
        </form>
        <button id="btn-submit">Submit</button>          
  `);

  return $form;
}

export default createHtmlElement;
export {getItem, renderForm};
