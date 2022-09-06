const addButton = document.querySelector('.task_add_icon');
const titleInput = document.querySelector('.task_input');
const linkInput = document.querySelector('.link_input');
const taskItem = document.querySelector('.task_items');

let titles;
let links;

if (!localStorage.titles) {
    titles = [];
    links = [];
    } else    {titles = JSON.parse(localStorage.getItem('titles'));
    links = JSON.parse(localStorage.getItem('links'));
}

function Title(description) {
    this.description = description;
    this.completed = false;
}

function Link(description) {
    this.description = description;
    this.completed = false;
}

addButton.addEventListener("click", pushItem);

const local = () => {
    localStorage.setItem('titles', JSON.stringify(titles))
    localStorage.setItem('links', JSON.stringify(links))
}


const itemGenerator = (title, index) => {
    let linkTitle = titleInput.value;
    let link = linkInput.value;
    if ((linkTitle.length > 0) & (link.length > 0)) {
        taskItem.insertAdjacentHTML('afterbegin', `
        <div class="task_item">
            <div class="task_item_desc"><a href='${link}'>${linkTitle}</a></div>  
                <div class="item_menu">
                    <button class="item_edit" type="button"><img src="img/edit.png"></button>
                    <button class="item_del" type="button"><img src="img/del.png"></button>
                </div>
        </div>
    `);
    }
    
}

function pushItem() {
    titles.push(new Title(titleInput.value));
    links.push(new Link(linkInput.value));
    itemGenerator();
    local();
    titleInput.value = '';
    linkInput.value = '';
}