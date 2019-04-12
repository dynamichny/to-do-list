
function loadTasks(){
    tasks.forEach((task) =>{
        addNewTask(task);
    });
    
}

function taskBuild(task){
    return '<div class="input-group mb-3">'+
    '<div class="input-group-prepend">'+
        '<button class="btn btn-primary" type="button" id="button-addon1"><i class="fas fa-check"></i></button>'+
    '</div>'+
    '<input type="text" class="form-control" placeholder="Wpisz zadanie.." value="'+task+'">'+
    '<div class="input-group-prepend">'+
        '<button class="btn btn-danger" type="button" id="button-addon2"><i class="fas fa-times"></i></button>'+
    '</div>';
}
function toggleTaskComplete(button){
    button.classList.toggle('btn-success');
    console.log(button);
}

function deleteTask(task){
    var liToRemove = task.closest('li');
    taskList.removeChild(liToRemove);
}