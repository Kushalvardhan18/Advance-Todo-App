// const boards = document.querySelectorAll(".boards")
const allBoards = document.querySelectorAll(".board")

const todoBoard = document.querySelector("#todo-Board")
const createButton = document.querySelector(".createTodo")

createButton.addEventListener("click",()=>{
    const input = prompt("What is the Task?")
    const todoItem = document.createElement("p")
    todoItem.classList.add("todo")
    todoItem.innerText = input
    todoBoard.appendChild(todoItem)
    
})