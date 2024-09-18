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

const elForm = document.querySelector("form");
elForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const taskNameValue = elForm.querySelector("#taskName").value;
  console.log(taskNameValue);

  createTask(taskNameValue);
});

// CREATE

function createTask(taskName) {
  const newTask = {
    id: makeId(),
    taskName: taskName,
    isDone: false,
  };

  gToDoList.push(newTask);
  const elTaskList = document.getElementById("toDoList");
  elTaskList.innerHTML = "";
  renderTaskList();
}

// READ
function renderTaskList() {
  const elTaskList = document.getElementById("toDoList");

  for (let i = 0; i < gToDoList.length; i++) {
    const task = gToDoList[i];
    const elTask = document.createElement("li");
    elTask.classList.add("task");
    elTask.setAttribute("id", "el" + task.id);

    elTask.innerHTML = `
        
        <div onclick="doneTask()">${task.taskName}</div>
        <button onclick="deleteTask('${task.id}')">Delete</button>
          `;

    elTaskList.appendChild(elTask);

    // elTask.addEventListener("click", () => {
    //   for (let i = 0; i < gToDoList.length; i++) {
    //     if (task.id === gToDoList[i].id) gToDoList[i].isDone = true;
    //     elTask.classList.add("is-done");
    //   }
    // });
  }
}

function doneTask() {
  for (let i = 0; i < gToDoList.length; i++) {
    if (task.id === gToDoList[i].id) gToDoList[i].isDone = true;
    elTask.classList.add("is-done");
  }
}

// let className = "";
// if (isDone) className = "is-done";

// DELETE
function deleteTask(taskId) {
  const newTask = [];

  for (let i = 0; i < gToDoList.length; i++) {
    const task = gToDoList[i];

    if (task.id !== taskId) {
      newTask.push(task);
    }
  }

  gToDoList = newTask;

  const elTaskList = document.getElementById("toDoList");

  const elTaskToDelete = elTaskList.querySelector(`#el${taskId}`);
  elTaskList.removeChild(elTaskToDelete);
}

renderTaskList();

//UPDATE
