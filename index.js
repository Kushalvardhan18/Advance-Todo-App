const taskDetail = document.querySelector("#taskDetail")
const allBoards = document.querySelectorAll(".board")
const todoBoard = document.querySelector("#todo-Board")
const inProgressBoard = document.querySelector("#inProgress-Board")
const completedTaskBoard = document.querySelector("#completed-Board")
const createButton = document.querySelector(".createTodo")
const todoFormDialog = document.querySelector("#todoForm")
const submitBtn = document.querySelector("#submit")

createButton.addEventListener("click", () => {
    todoFormDialog.showModal()
})

let input = document.querySelector("#text")
let inputTodo = ""
input.addEventListener('input', (e) => {
    inputTodo = e.target.value
})
let taskDescription = document.querySelector("#description")
let Description = ""
taskDescription.addEventListener('input', (e) => {
    Description = e.target.value
})

submitBtn.addEventListener("click", () => {
    if (!inputTodo) return
    const todoTitle = document.createElement("h3")
    const todoDescription = document.createElement("p")

    const taskTitle = document.querySelector(".taskTitle")
    const taskD = document.querySelector(".taskdescription")
    taskTitle.innerText= inputTodo.toUpperCase()
    taskD.innerText = Description


    todoTitle.classList.add("todo")
    todoDescription.classList.add("todo-Description")
    todoTitle.setAttribute("draggable", true)
    todoTitle.innerText = inputTodo.toUpperCase()

    attachDragEvent(todoTitle)
    todoBoard.appendChild(todoTitle)

    input.value = ""
    inputTodo = ""

})


function attachDragEvent(target) {
    target.addEventListener("dragstart", () => {
        target.classList.add("drag")
    })
    target.addEventListener("dragend", () => {
        target.classList.remove("drag")
    })
}


const taskStatus = document.querySelector("#status")
allBoards.forEach((board)=>{
    board.addEventListener("dblclick", () => {
        taskDetail.showModal()
        if(board === todoBoard){
            taskStatus.style.color = "Red"
            taskStatus.innerText = "Task is Pending"
            
        }
       else if(board === inProgressBoard){
            taskStatus.style.color = "yellow"
            taskStatus.innerText = "Task is In Progress"
            
        }
        else if(board === completedTaskBoard){
            taskStatus.style.color = "Green"
            taskStatus.innerText = `Task is Completed on `
            
        }
    })
    
})



const allTodos = document.querySelectorAll(".todo")
allTodos.forEach(attachDragEvent)

allBoards.forEach((board) => {
    board.addEventListener("dragover", () => {
        const draggedTask = document.querySelector(".drag")
        board.append(draggedTask)
    })
   
})


const closeBtn = document.querySelector(".close-btn")
closeBtn.addEventListener('click',()=>{
   taskDetail.close()
})

