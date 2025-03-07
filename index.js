const todoForm = document.querySelector("#todoForm")
const taskForm = document.querySelector("#taskForm")
const createTodo = document.querySelector(".createTodo")
let taskInput = document.querySelector("#text")
let taskDescription = document.querySelector('#description')
let deadlineDate = document.querySelector("#date")
const submitTask = document.querySelector("#submit")
const cancelCreation = document.querySelector("#cancel")
const newTodos = document.querySelector(".newTodos")
const todoBoard = document.querySelector("#todo-Board")
createTodo.addEventListener("click", () => {
    todoForm.showModal()
})


let input = ""
let deadline = ""
taskInput.addEventListener('input', (e) => {
    input = e.target.value
})

taskDescription.addEventListener('input', (e) => {
    console.log(e.target.value);

})

deadlineDate.addEventListener('input', (e) => {
    deadline = e.target.value

})

function attachDragEvents(target){
    target.addEventListener('dragstart',()=>{
        target.classList.add("draggable")
    })
    target.addEventListener('dragend',()=>{
        target.classList.remove("draggable")
    })
}

submitTask.addEventListener('click', () => {
    if (!taskInput.value.trim()) return
    const newTaskTitle = document.createElement("h3")
    newTaskTitle.classList.add('todo')
    newTaskTitle.innerText = input.toUpperCase()
    newTaskTitle.draggable = true
    newTaskTitle.setAttribute("deadlineDate",deadline)
    newTodos.appendChild(newTaskTitle)
    todoBoard.appendChild(newTodos)
    attachDragEvents(newTaskTitle)

    // clearing the form inputs
    taskForm.reset()
    todoForm.close()
    taskInput.value=""
    input="" 
})

cancelCreation.addEventListener('click',()=>{
    if(!taskInput){
        todoForm.close()
    }
    taskForm.reset()
    todoForm.close()
    taskInput.value=""
    input="" 
})

const allTodos = document.querySelectorAll(".todo")
// allTodos.forEach(attachDragEvents)
allTodos.forEach((item)=>{
    item.addEventListener('click',()=>{
        const date = document.createElement('h4')
        date.innerText = deadline
        item.appendChild(date)
        attachDragEvents(item)
    })
})

const allBoards = document.querySelectorAll(".board")
allBoards.forEach((board)=>{
    board.addEventListener('dragover',(e)=>{
        e.preventDefault()
      const draggableElement = document.querySelector(".draggable")  
      if (draggableElement) {
        board.appendChild(draggableElement);
    }
    })
})
