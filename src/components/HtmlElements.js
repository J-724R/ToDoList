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
        <div class="mask">
            <div class="form-container">
                <form action="" >
                    <div class="form-mainInfo">
                        <div class="form-option title">
                            <label for="title">Titles</label>
                            <input type="text" name="title" id="title" placeholder="New task">
                        </div>
                        <div class="form-option date">
                            <label for="date">Set Time</label>
                            <input type="date" name="date" id="date">
                        </div>
                        <div class="form-option">
                            <label for="notes">Details</label>
                            <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Write some notes"></textarea>
                        </div>
                    </div>
                    <div class="form-extraInfo">
                        <div class="form-option">
                            <div class="label">User info</div>
                        </div>
                        <div class="form-option">
                            <div class="label">Topic</div>
                            <button class="form-sidebtn">Personal</button>
                        </div>
                        <div class="form-option">
                            <div class="label">Tag</div>
                            <button class="form-sidebtn">tags</button>
                        </div>
                    </div>
                </form>
                <button class="btn-addTask">Add Task</button>
            </div>
        </div>       
  `);

  return $form;
}

export default createHtmlElement;
export {getItem, renderForm};
