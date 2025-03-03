const taskDetail = document.querySelector("#taskDetail");
const allBoards = document.querySelectorAll(".board");
const todoBoard = document.querySelector("#todo-Board");
const inProgressBoard = document.querySelector("#inProgress-Board");
const completedTaskBoard = document.querySelector("#completed-Board");
const createButton = document.querySelector(".createTodo");
const todoFormDialog = document.querySelector("#todoForm");
const submitBtn = document.querySelector("#submit");
const newTodos = document.querySelector(".newTodos");

// A Modal Dialog will popUp  on screen for input values
createButton.addEventListener("click", () => {
    todoFormDialog.showModal();
});

// Input for task title
let input = document.querySelector("#text");
let inputTodo = "";
input.addEventListener("input", (e) => {
    inputTodo = e.target.value;
});

// Input for task Description
let taskDescription = document.querySelector("#description");
let Description = "";
taskDescription.addEventListener("input", (e) => {
    Description = e.target.value;
});

// On modal Dialog Form submit btn
submitBtn.addEventListener("click", () => {
    if (!inputTodo) {
        alert("Task cannot be empty");
        return;
    }
    const todoTitle = document.createElement("h3");
  

    todoTitle.classList.add("todo");
    todoTitle.setAttribute("draggable", true);
    todoTitle.style.color = taskTodo.value
    todoTitle.innerText = inputTodo.toUpperCase();

    todoTitle.setAttribute("todo-Description",Description);
    //   todoDescription.innerText = Description; 
    attachDragEvent(todoTitle);

    newTodos.appendChild(todoTitle);
    // newTodos.appendChild(todoDescription);

    input.value = "";
    inputTodo = "";
    Description = "";
    taskDescription.value = "";
});

// Drag Events on the targetted Tasks
function attachDragEvent(target) {
    target.addEventListener("dragstart", () => {
        target.classList.add("drag");
    });
    target.addEventListener("dragend", () => {
        target.classList.remove("drag");
    });
}

const allTodos = document.querySelectorAll(".todo");
allTodos.forEach(attachDragEvent);

allBoards.forEach((board) => {
    board.addEventListener("dragover", (event) => {
        event.preventDefault()
    });
    board.addEventListener("drop", () => {
        const draggedTask = document.querySelector(".drag");
        if (draggedTask) {
            board.appendChild(draggedTask);
            
            if (board === todoBoard) {
                taskTodo.addEventListener("change",()=>{

                    draggedTask.style.color =  taskTodo.value
                })
                draggedTask.style.color =  taskTodo.value

            }
            else if (board === inProgressBoard) {
                inProgressBoard.addEventListener("change",()=>{
                    draggedTask.style.color = taskInProgress.value
                })
                draggedTask.style.color = taskInProgress.value
                
            }
            else if (board === completedTaskBoard) {
                completedTaskBoard.addEventListener("change",()=>{
                    draggedTask.style.color = taskCompleted.value
            })
            draggedTask.style.color = taskCompleted.value
                
            }
        }
    });
   

});

const taskTodo = document.querySelector("#task-todo");
const taskInProgress = document.querySelector("#task-Inprogress");
const taskCompleted = document.querySelector("#task-completed");

taskTodo.addEventListener("change", (e) => {
    let newClr = e.target.value;
    // allBoards.forEach((board) => {
        // board.
        querySelectorAll("h3.todo").forEach((todo) => {
            todo.style.color = newClr;
        // });
    });
});




allBoards.forEach((board) => {
    board.addEventListener("dblclick", (event) => {
        if (event.target.classList.contains("todo")) {
            const taskStatus = document.querySelector("#status");
            taskDetail.showModal();
            const taskTitle = event.target.innerText;
            const taskDesc = event.target.getAttribute("todo-description") || "No description provided";

            document.querySelector(".taskInfo").innerHTML = `
                <h2>${taskTitle}</h2>
                <p>${taskDesc}</p>
            `;
            if (board === todoBoard) {
                taskStatus.style.color = "Red"
                taskStatus.style.color = "Red"
                taskStatus.innerText = "Task is Pending"

            }
            else if (board === inProgressBoard) {
                taskStatus.style.color = "yellow"
                taskStatus.innerText = "Task is In Progress"

            }
            else if (board === completedTaskBoard) {
                taskStatus.style.color = "Green"
                taskStatus.innerText = `Task is Completed`

            }
            taskDetail.appendChild(taskStatus)
        }
    });
});

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
    taskDetail.close();
});
