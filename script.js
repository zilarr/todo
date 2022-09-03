const addButton = document.querySelector('.task_add_icon');
const titleInput = document.querySelector('.task_input');
const linkInput = document.querySelector('.link_input');
const taskItem = document.querySelector('.task_item');

let titles = [];
let links = [];

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

const localReverse = () => {
    localStorage.getItem('titles')
}

function pushItem() {
    titles.push(new Title(titleInput.value));
    links.push(new Link(linkInput.value));
    local();
}