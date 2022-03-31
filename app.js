document.getElementById('form-Task').addEventListener('submit', saveTask);

// Save new To-Do
function saveTask() {

  let name = document.getElementById('name').value;
  let dates = document.getElementById('dates').value;

     var Checkbox = document.getElementById("Checkbox1")
     if(Checkbox.checked){
        Checkbox = document.getElementById('Checkbox1').value;
    } else if (Checkbox != Checkbox.checked) {
        Checkbox = document.getElementById('Checkbox2').value;
    }
    
  let task = {
    name,
    dates,
    Checkbox
  };

  if (localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();

  // Reset form-Task
  document.getElementById('form-Task').reset();
  e.preventDefault();

}

// Delete To-Do 
function deleteTask(name) {

  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].name == name) {
      tasks.splice(i, 1);
    }
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

// Show To-Do List
function getTasks() {

  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    let name = tasks[i].name;
    let dates = tasks[i].dates;
    let Checkbox = tasks[i].Checkbox;
    
   tasksView.innerHTML +=
    `<div class="card mb-3">
    <div class="card-body" id="addgreen">
    <div class="row ">
      <div class="col-sm-3 text-left">
        <p>${name}</p>
      </div>
      <div class="col-sm-2 text-left">
        <p>${dates}</p>
      </div>
      <div class="col-sm-2 text-left">
        <p>${Checkbox}</p>
      </div>
      <div class="col-sm-4 text-right">
        <a href="#" onclick="deleteTask('${name}')" class="btn btn-danger ml-5">X</a>
      </div>
      
    </div>  
   </div>
  </div>`;
    
    if (Checkbox = document.getElementById("Checkbox1")) {
        var addIn = document.getElementById("addgreen");
            addIn.classList.add("checkedBox");
    }
  
  }
}

getTasks()