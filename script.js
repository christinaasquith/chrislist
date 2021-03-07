// selectors
//this one is for when i enter my activity
const coolInput = document.querySelector('.cool_input');
//this one is to activate the enter button
const coolButton = document.querySelector('.cool_button');
//this one is to display the list of activities
const todoList = document.querySelector('.todo_list'); 
 
//event listeners 
//this should make my activity get added when I click the button
coolButton.addEventListener("click", addCool)

function addCool (event) {
    event.preventDefault();
    //div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI
    const newTodo=document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if(todoInput.value ===""){
        return null;
    }
}