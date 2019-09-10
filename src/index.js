document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const createTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  function addTask() {
    const listNode = document.createElement("li");
    const submittedTaskDescription = newTaskDescription.value;
    console.log(submittedTaskDescription);
    const textNode = document.createTextNode(submittedTaskDescription);
    listNode.appendChild(textNode);
    taskList.appendChild(listNode);
  }

  createTaskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    addTask();
  });
});

