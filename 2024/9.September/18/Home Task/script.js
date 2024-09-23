// model (data)
let gToDoList = [];

function makeId() {
  let id = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

// CREATE

// Create a DOM element
const elTaskList = document.getElementById("toDoList");
const elForm = document.getElementById("form");
const elInput = document.getElementById("taskInput");

elForm.addEventListener("submit", function (ev) {
  ev.preventDefault();

  // Call to the Add task function
  const taskNameValue = elInput.value;
  addTask(taskNameValue);
});

// Clear the input
elInput.value = "";

// READ
function renderTaskList() {
  // Clear the html
  elTaskList.innerHTML = "";

  for (let i = 0; i < gToDoList.length; i++) {
    const task = gToDoList[i];

    //Create a task element
    const elTask = document.createElement("li");
    elTask.textContent = task.taskName;
    elTask.classList.toggle("is-done", task.isDone);

    // Create delete button
    const elDeleteBtn = document.createElement("button");
    elDeleteBtn.textContent = "Delete";

    // Add event listener to toggle
    elTask.addEventListener("click", function () {
      toggleTask(task.id);
    });

    // Add event listener to toggle
    elDeleteBtn.addEventListener("click", function () {
      deleteTask(task.id);
    });

    const filter = document.getElementById("filter");
    filter.addEventListener("change", function () {
      filterTask(filter, task.id);
    });
    function filterTask(filter, id) {
      const task = gToDoList.find((currentTask) => currentTask.id === id);
      if (
        (filter.value === completed && task.isDone)(
          filter.value === uncompleted && !task.isDone
        )
      )
        elTask.classList.add("hide");
      else elTask.classList.remove("hide");

      renderTaskList();
    }

    elTask.appendChild(elDeleteBtn);
    elTaskList.appendChild(elTask);
  }
}
// Add take function
function addTask(taskName) {
  if (!taskName) return;

  const newTask = {
    id: makeId(),
    taskName: taskName,
    isDone: false,
  };

  gToDoList.push(newTask);

  renderTaskList();
}

// Delete task function
function deleteTask(taskId) {
  gToDoList = gToDoList.filter((currentTask) => currentTask.id !== taskId);

  renderTaskList();
}
// Toggle task function
function toggleTask(taskId) {
  const task = gToDoList.find((currentTask) => currentTask.id === taskId);
  task.isDone = !task.isDone;
  renderTaskList();
}
