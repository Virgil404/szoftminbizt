
const appDiv = document.getElementById('app');
document.getElementById('newTodo').addEventListener('click', newTodo);
class Todo {
  name;
  done;
  constructor(n) {
    this.name = n;
  }
}
let todoList = [new Todo('Teszt')];
function listTodo() {
  let allHtml = '';
  todoList.forEach((todo, index) => {
    let htmlContent = `
    <div class="todo">
      <h3>${todo.name}</h3>
      <button class="remove" id="${index}">✓</button>
    </div>`;
    allHtml = htmlContent + allHtml;
  });
  document.getElementById('todos').innerHTML = allHtml;
  let buttons = document.getElementsByClassName('remove');
  Array.prototype.forEach.call(buttons, function(element) {
    element.addEventListener('click', e => handleDelete(e));
  });
}