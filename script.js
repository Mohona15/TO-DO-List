var toDoList = document
 .getElementById("toDo");

function addNewTask() {
 if (document.getElementById(
   "taskInput").value !== "") {
  var newTask = document
   .createElement("li");
  newTask.innerHTML = document
   .getElementById("taskInput")
   .value;
  var removeTask = document
   .createElement("a");
  removeTask.innerHTML =
   "Remove task";
  removeTask.setAttribute("href",
   "javascript:;");
  newTask.appendChild(removeTask);
  removeTask.onclick =
   function() {
    toDoList.removeChild(newTask);
   }
  toDoList.appendChild(newTask);
 }
 document.getElementById("taskInput")
  .value = "";
}
