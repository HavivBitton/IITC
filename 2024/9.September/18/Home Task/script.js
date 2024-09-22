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

const Form = document.querySelector("form");
Form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const taskNameValue = Form.querySelector("#taskName").value;

  createTask(taskNameValue);
});

function createTask(taskName) {
  const newTask = {
    id: makeId(),
    taskName: taskName,
    isDone: false,
  };

  gToDoList.push(newTask);

  renderTaskList();
}

// READ
function renderTaskList() {
  const elTaskList = document.getElementById("toDoList");
  elTaskList.innerHTML = "";
  const filter = document.getElementById("filter");
  for (let i = 0; i < gToDoList.length; i++) {
    const task = gToDoList[i];
    if (
      (filter.value === "completed" && task.isDone === false) ||
      (filter.value === "uncompleted" && task.isDone === true)
    ) {
      continue;
    }

    const elTask = document.createElement("li");
    elTask.classList.add("task");
    elTask.setAttribute("id", "el" + task.id);

    elTask.innerHTML = `
        
        <div onclick="doneTask()">${task.taskName}</div>
        <button onclick="deleteTask('${task.id}')">Delete</button>
        `;
    elTaskList.appendChild(elTask);

    elTask.addEventListener("click", () => {
      for (let i = 0; i < gToDoList.length; i++) {
        if (gToDoList[i].isDone === false) {
          gToDoList[i].isDone = true;
          elTask.classList.add("is-done");
        } else {
          gToDoList[i].isDone = false;
          elTask.classList.remove("is-done");
        }
      }
    });
  }
}
// const filterBy = document.getElementById("filter");
// filterBy.addEventListener("change", () => {
//   for (let i = 0; i < gToDoList.length; i++) {
//     if (
//       (gToDoList[i].isDone === false && filterBy.value === "completed") ||
//       (gToDoList[i].isDone === false && filterBy.value === "uncompleted")
//     ) {
//       elTask.classList.add("hide");
//     } else {
//       elTask.classList.remove("hide");
//     }
//   }
// });

const filterBy = document.getElementById("filter");
filterBy.addEventListener("change", renderTaskList);

// DELETE

function deleteTask(taskId) {
  for (let i = 0; i < gToDoList.length; i++) {
    const task = gToDoList[i];

    if (task.id !== taskId) {
      gToDoList.splice(i, 1);
    }
  }

  const elTaskList = document.getElementById("toDoList");
  const elTaskToDelete = elTaskList.querySelector(`#el${taskId}`);
  elTaskList.removeChild(elTaskToDelete);
}
//UPDATE

// const filterDoneTask = document.getElementById("completed task");
// filterDoneTask.addEventListener("click", () => {
//   const task = gToDoList[i];
//   for (let i = 0; i < gToDoList.length; i++) {
//     if (gToDoList[i].isDone === false) gToDoList[i].classList.add("completed");
//   }
// });
