let todoList = [];
renderToDoList();


function addToDo() {
    const inputElem = document.querySelector('.js-input');
    const dateElem = document.querySelector('.js-input-date');
    const name = inputElem.value;
    const date = dateElem.value;
    todoList.push({name, date});
    
    renderToDoList();
    inputElem.value = '';
    dateElem.value = '';
}

function deleteItem(itemIndex) {
    todoList.splice(itemIndex, 1);

    renderToDoList();
}

function renderToDoList() {
    let listItemsHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const {name, date} = todoList[i];
        listItemsHTML += `
        <p>${name}</p>
        <p>${date}</p>
        <button class="delete-todo" onclick="deleteItem(${i})">
        Delete
        </button>
        `;
    }    
    
    document.querySelector('.js-todo-list').innerHTML = listItemsHTML;
}
