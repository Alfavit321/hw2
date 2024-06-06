function createTaskItem(taskText) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.textContent = taskText;  
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        label.style.textDecoration = "line-through";
      } else {
        label.style.textDecoration = "none";
      }
    });  
    li.appendChild(checkbox);
    li.appendChild(label);
  
    return li;
  }
  
  function addNewTask(taskText) {
    if (!taskText.trim()) return;  
    const li = createTaskItem(taskText);
    tasksList.appendChild(li);
    taskInput.value = "";
    addTaskBtn.disabled = true;
  }
  function initApp() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const tasksList = document.getElementById("tasksList");
  
    taskInput.addEventListener("input", function() {
      addTaskBtn.disabled =!this.value.trim();
    });
  
    addTaskBtn.addEventListener("click", function() {
      addNewTask(taskInput.value);
    });
  }
  
  document.addEventListener("DOMContentLoaded", initApp);
  