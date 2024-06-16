// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

function readTasksFromLocalStorage() {
    let tasks = localStorage.getItem("tasks");
    if(!tasks) {
        return [];
    }
    let tasksParsed = JSON.parse(tasks);
    return tasksParsed;
}

function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Todo: create a function to generate a unique task id
function generateTaskId() {
    return crypto.randomUUID();
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskCard = $('<div>');
    taskCard.addClass('card project-card draggable my-3');
    taskCard.attr('taskcard-id', task.id);

    const cardHeader = $('<div>');
    cardHeader.addClass('card-header h4');
    cardHeader.text(task.title);

    const cardBody = $('<div>');
    cardBody.addClass('card-body');

    const cardDate = $('<p>');
    cardDate.addClass('card-text');
    cardDate.text(task.dueDate);

    const cardDescription = $('<p>');
    cardDescription.addClass('card-text');
    cardDescription.text(task.description);

    const cardDeleteButton = $('<button>');
    cardDeleteButton.addClass('btn btn-danger delete');
    cardDeleteButton.text('Delete');
    cardDeleteButton.attr('taskcard-id', task.id);

    cardBody.append(cardDate);
    cardBody.append(cardDesc);
    cardBody.append(cardDeleteButton);

    taskCard.append(cardHeader);
    taskCard.append(cardBody);

  if (task.dueDate && task.status !== 'done') {
    const now = dayjs();
    const taskDueDate = dayjs(task.dueDate, 'DD/MM/YYYY');

    let sevenDaysAway = now.add(7, 'day');
    const isBetween = window.dayjs_plugin_isBetween;
    dayjs.extend(isBetween);

    if (dayjs(taskDueDate).isBetween(now, sevenDaysAway, 'day', "[)")) {
      taskCard.addClass('bg-warning text-white');
    } else if (now.isAfter(taskDueDate, 'day')) {
      taskCard.addClass('bg-danger text-white');
      cardDeleteButton.addClass('border-light');
    }

  return taskCard;
}
  return taskCard;
}


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const tasks = readTasksFromLocalStorage();

    const todoList = $('#todo-cards');
    todoList.empty();
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
