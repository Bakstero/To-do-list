const container = document.querySelector('.container');
const userInputValue = document.querySelector('.input');
const addBtn = document.querySelector('.add');

const todosEX = window.localStorage.getItem("todos");
const todos = JSON.parse(todosEX);

if(window.localStorage.getItem("todos") == undefined) {
    let todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

class item {
	constructor(inputName) {
		this.createItem(inputName);
	}
    createItem(inputName) {
        const itemBox = document.createElement('div');
        itemBox.classList.add('item');

        const userInput = document.createElement('input');
        userInput.type = "text";
        userInput.disabled = true;
        userInput.value = inputName;
        userInput.classList.add('item_input');

        const removeItem = document.createElement('button');
        removeItem.classList.add('remove');
        removeItem.innerHTML = "REMOVE";
        removeItem.addEventListener('click', () => this.removeItem(itemBox, inputName));

        container.appendChild(itemBox);
        itemBox.appendChild(userInput);
        itemBox.appendChild(removeItem);
    }

    removeItem(itemBox, inputName) {
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(inputName);

        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

const check = () => {
    if (userInputValue.value != "") {
        new item(userInputValue.value);
        todos.push(userInputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
        userInputValue.value = "";
    }
}

addBtn.addEventListener('click', check);

for (let v = 0; v < todos.length; v++) {
    new item(todos[v]);
}