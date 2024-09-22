function makeId() {
  let id = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

let toDos = [
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

const elTodoList = document.getElementById("todo-list");

function renderToDos() {}

renderToDos();
