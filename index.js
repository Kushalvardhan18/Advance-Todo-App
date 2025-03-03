const taskDetail = document.querySelector("#taskDetail")
const allBoards = document.querySelectorAll(".board")
const todoBoard = document.querySelector("#todo-Board")
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

    todoTitle.classList.add("todo")
    todoDescription.classList.add("todo-Description")
    todoTitle.setAttribute("draggable", true)
    todoTitle.innerText = inputTodo
    todoDescription.innerText = Description
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

    todoBoard.addEventListener("dblclick", () => {
     taskDetail.showModal()
       
    })
  



const allTodos = document.querySelectorAll(".todo")
allTodos.forEach(attachDragEvent)

allBoards.forEach((board) => {
    board.addEventListener("dragover", () => {
        const draggedTask = document.querySelector(".drag")
        board.append(draggedTask)
    })
})
