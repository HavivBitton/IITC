function makeId() {
  let id = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

let gToDos = [
  {
    id: makeId(),
    title: "todo 1",
    isDone: false,
  },
  {
    id: makeId(),
    title: "todo 2",
    isDone: false,
  },
  {
    id: makeId(),
    title: "todo 3",
    isDone: false,
  },
];

//DOM elements
const elTodoList = document.getElementById("todo-list");
const elForm = document.getElementById("todo-form");

//Handling event listeners
elForm.addEventListener("submit", function (ev) {
  // Prevent from page refresh
  ev.preventDefault();

  //Get the input element value
  const elTodoInput = document.getElementById("todo-input");
  const todoTitle = elTodoInput.value;

  // Calling to add todo function
  addTodo(todoTitle);

  //clearing the input field
  elTodoInput.value = "";
});

//Render the todos
function renderToDos() {
  // Clearing the list
  elTodoList.innerHTML = "";

  // Append each li to the list
  for (let i = 0; i < gToDos.length; i++) {
    const currentTodo = gToDos[i];

    // Create to do element
    const elTodo = document.createElement("li");
    elTodo.textContent = currentTodo.title;
    elTodo.classList.toggle("isDone", currentTodo.isDone);

    // Create delete button
    const elDeleteBtn = document.createElement("button");
    elDeleteBtn.textContent = "Delete";

    // add event listener to toggle
    elTodo.addEventListener("click", function () {
      toggleTodo(currentTodo.id);
    });

    // add event listener to delete
    elDeleteBtn.addEventListener("click", function () {
      deleteTodo(currentTodo.id);
    });

    elTodo.appendChild(elDeleteBtn);
    elTodoList.appendChild(elTodo);
  }
}

//Adding todo
function addTodo(todoTitle) {
  // Check if the the title not empty
  if (!todoTitle) return;

  // Create a new todo object and set its title
  const todo = {
    id: makeId(),
    title: todoTitle,
    isDone: false,
  };

  // Push the new todo to the todo gTodos array
  gToDos.push(todo);

  // Call renderToDos function
  renderToDos();
}

// Delete todo
function deleteTodo(id) {
  gToDos = gToDos.filter((currentTodo) => currentTodo.id !== id);
  renderToDos();
}

// Toggle todo
function toggleTodo(id) {
  // Find the todo that you to toggle
  const todo = gToDos.find((currentTodo) => currentTodo.id === id);

  // Toggle isDone value
  todo.isDone = !todo.isDone;

  // render todos
  renderToDos();
}

renderToDos();
