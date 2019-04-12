function addNewTask(title){
    var taskLi = document.createElement('li');
    taskLi.innerHTML = taskBuild(title);
    taskList.appendChild(taskLi);

    var toggleCompleteBtn = taskLi.querySelector('#button-addon1');
    var deleteBtn = taskLi.querySelector('#button-addon2');

    toggleCompleteBtn.addEventListener('click',function(){
        toggleTaskComplete(this);
    });
    deleteBtn.addEventListener('click',function(){
        deleteTask(this);
    });
}


function submitTask(){
    newTaskForm.addEventListener('submit', function(event){
        event.preventDefault();
        var taskInput = this.querySelector('input').value;
        if(taskInput){
            addNewTask(taskInput);
        }
    });
}
