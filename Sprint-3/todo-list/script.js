let todos = [];

function populateTodoList(todos) {
  const list = document.getElementById("maintaskContainer");

  // length
  // const taskInput = document.createElement("p");
  // taskInput.classList = "task";
  // const todosNew = todos[todos.length - 1];
  // taskInput.textContent = todosNew.task;
  // list.append(taskInput);

  //label
  const labelInput = document.createElement("label");
  labelInput.classList = "task";
  const todosNew = todos[todos.length - 1];
  labelInput.textContent = todosNew.task;

  //checkbox
  const taskInput = document.createElement("input");
  taskInput.type = "checkbox";
  const index = todos.indexOf(todosNew.task);
  taskInput.id = `checkboxinput${todos.length}`;
  taskInput.dataset.index = todos.length - 1;

  //label
  labelInput.htmlFor = `checkboxinput${todos.length}`;

  //DIV CONTAINER FOR EVERY TASK
  const divContainer = document.createElement("div");
  divContainer.id = `taskcontainer${todos.length}`;
  divContainer.classList = "labelAndCheckbox";

  divContainer.append(taskInput, labelInput);
  list.append(divContainer);
}

function addNewTodo(event) {
  event.preventDefault();
  const inputTask = document.getElementById("inputString").value;
  const newTask = { task: inputTask, completed: false };
  todos.push(newTask);
}

function deleteAllCompletedTodos() {
  const taskContainers = document.querySelectorAll(".labelAndCheckbox");

  taskContainers.forEach((container) => {
    const checkbox = container.querySelector("input[type='checkbox']");
    const index = Number(checkbox.dataset.index);

    if (checkbox.checked) {
      todos.splice(index, 1);
      container.remove();
    }
  });

  const remainingCheckBoxes = document.querySelectorAll(
    ".labelAndCheckbox input[type='checkbox']"
  );

  remainingCheckBoxes.forEach((checkbox, newIndex) => {
    checkbox.dataset.index = newIndex;
  });

  //get the divs that will be removed
  //access the checkboxes that returned true if checked
  //removed from the array the things that returned true
  //removed the divs that u acccessed and returned true

  // for (let i = todos.length - 1; i >= 0; i--) {
  //   const checkbox = document.getElementById(`checkboxinput${i}`);
  //   if (!checkbox) continue;

  //
  // if (todos.completed === true) {
  //   delete todos[i];
  //   const container = document.getElementsByClassName("labelAndCheckbox");
  //   const
  //   container.removeChild()
}

// for (const item of todos) {
//   const taskInput = document.createElement("p");
//   taskInput.classList = "task";
//   const todosNew = item;
//   taskInput.textContent = todosNew.task;
//   list.append(taskInput);
// }
// }

function completedTask() {
  for (let i = 0; i < todos.length; i++) {
    if (document.getElementById(`checkboxinput${i}`).checked) {
      delete todos[i];
    }
  }
}

function setup() {
  document.getElementById("submit-btn").addEventListener("click", (event) => {
    addNewTodo(event);
    populateTodoList(todos);
  });

  document
    .getElementById("remove-all-completed")
    .addEventListener("click", () => {
      deleteAllCompletedTodos();
    });
}

window.onload = setup;
