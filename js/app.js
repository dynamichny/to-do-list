var taskList = document.querySelector('.tasks ul');
var taskInputButton = document.querySelector('#button-addon1');
var newTaskForm = document.querySelector('.newtaskform');


document.addEventListener('DOMContentLoaded',function(){
    loadTasks();
    submitTask();
})