const todoList = [
  {
    name: "wash plate",
    dueDate: '08/25/2023'
  },  {
    name: "clean house",
dueDate: '08/27/2023'
}
];

renderTodoList();

function renderTodoList() {

    let todoListHTML = '';
    
    for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
  
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
    <button onClick="
    todoList.splice(${i}, 1);
    renderTodoList();
    " class="delet-todo-button">Delete</button>
    `;
    todoListHTML += html;
    }
  
    
    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}



function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        // name: name,
        // dueDate: dueDate
        name,
        dueDate
    });
  

    //TO RESET TEXTBOX
    inputElement.value = '';
    renderTodoList();
}