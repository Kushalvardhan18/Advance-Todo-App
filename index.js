const boards = document.querySelector(".boards")
const todoForm = document.querySelector("#todoForm")
const boardInfo = document.querySelector("#boardInfo")
const taskForm = document.querySelector("#taskForm")
const createTodo = document.querySelector(".createTodo")
const createBoard = document.querySelector(".createBoard")
const colorBoard = document.querySelector("#newColor")
let taskInput = document.querySelector("#text")
let boardName = document.querySelector("#boardName")
let deadlineDate = document.querySelector("#date")
const submitTask = document.querySelector("#submit")
const createNewBoard = document.querySelector("#createNewBoard")
const cancelCreation = document.querySelector("#cancel")
const dismissNewBoardCreation = document.querySelector("#dismissNewBoardCreation")
const newTodos = document.querySelector(".newTodos")
const todoBoard = document.querySelector("#todo-Board")
createTodo.addEventListener("click", () => {
    todoForm.showModal()
})

createBoard.addEventListener('click', () => {
    boardInfo.showModal()
})

let input = ""
let deadline = ""

taskInput.addEventListener('input', (e) => {
    input = e.target.value
})

deadlineDate.addEventListener('input', (e) => {
    deadline = e.target.value

})

let newBoardName = ""
boardName.addEventListener('input', (e) => {
    newBoardName = e.target.value
})

let newBoardColor = ""
colorBoard.addEventListener('change', (e) => {
    newBoardColor = e.target.value
})

function attachDragEvents(target) {
    target.addEventListener('dragstart', () => {
        target.classList.add("draggable")
    })
    target.addEventListener('dragend', () => {
        target.classList.remove("draggable")
    })
}

submitTask.addEventListener('click', () => {
    if (!taskInput.value.trim()) return

    const newTaskTitle = document.createElement("h3")
    newTaskTitle.classList.add('todo')
    newTaskTitle.innerText = input.toUpperCase()

    const clrItem = document.querySelector("#task-todo")
    const dateDeadline = document.createElement("span")
    const deleteTask = document.createElement("button")
    const accordionDiv = document.createElement("div")
    deleteTask.innerText = "X"
    dateDeadline.innerText = deadlineDate.value
    newTaskTitle.style.color = clrItem.value
    newTaskTitle.draggable = true
    accordionDiv.classList.add("accordionContent")
     accordionDiv.style.display = "none"

    deleteTask.addEventListener("click", () => {
        deleteTaskFn(newTaskTitle)
    })
    newTaskTitle.addEventListener("click", () => {
        showAccordionFn(dateDeadline, accordionDiv)
    })

    newTodos.appendChild(newTaskTitle)
    newTaskTitle.appendChild(accordionDiv)  
    accordionDiv.appendChild(dateDeadline) 
    newTaskTitle.appendChild(deleteTask)
    todoBoard.appendChild(newTodos)

    attachDragEvents(newTaskTitle)



    // clearing the form inputs
    taskForm.reset()
    todoForm.close()
    taskInput.value = ""
    input = ""
    deadline = ""
    deadlineDate.value = ""

})

function showAccordionFn(deadline, accordion) {
    if (accordion.style.display === "none") {
        accordion.style.display = "block"  
    } else {
        accordion.style.display = "none"
    }
}
function deleteTaskFn(task) {
    task.remove()
}

cancelCreation.addEventListener('click', () => {
    if (!taskInput) {
        todoForm.close()
    }
    taskForm.reset()
    todoForm.close()
    taskInput.value = ""
    input = ""
})

createNewBoard.addEventListener('click', () => {
    if (!newBoardName) return
    const newBoardDiv = document.createElement("div")
    newBoardDiv.classList.add("board")
    const heading = document.createElement("h2")
    const inputClr = document.createElement("input")
    inputClr.classList.add("clr-todo")
    inputClr.value = newBoardColor
    inputClr.type = 'color'
    heading.innerText = newBoardName
    newBoardDiv.appendChild(inputClr)
    newBoardDiv.appendChild(heading)
    boards.appendChild(newBoardDiv)

    inputClr.addEventListener('change', (e) => {
        const board = e.target.closest(".board")

        if (board) {
            const allTodos = board.querySelectorAll(".todo")
            allTodos.forEach((todo) => {
                todo.style.color = e.target.value
            })
        }
    })


    // attach dragover

    newBoardDiv.addEventListener('dragover', (e) => {
        e.preventDefault()
        const draggableElement = document.querySelector(".draggable")
        if (draggableElement) {
            const clrItem = newBoardDiv.querySelector(".clr-todo")
            if (clrItem) {
                draggableElement.style.color = clrItem.value
            }
            newBoardDiv.appendChild(draggableElement)
        }
    })

    boardName.value = ""
    newBoardName = ""
    colorBoard.style.color = "#000000"
    newBoardColor = ""
    boardInfo.close()
    // attachDragEvents(newBoardDiv)
    // boardInfo.reset()
})

dismissNewBoardCreation.addEventListener('click', () => {
    if (!boardName) {
        boardInfo.close()
    }
    boardName.value = ""
    newBoardName = ""
    colorBoard.style.color = "#000000"
    newBoardColor = ""
    boardInfo.close()
    // boardInfo.reset()
})

const allTodos = document.querySelectorAll(".todo")
allTodos.forEach(attachDragEvents)

const allBoards = document.querySelectorAll(".board")
allBoards.forEach((board) => {
    board.addEventListener('dragover', (e) => {
        e.preventDefault()
        const draggableElement = document.querySelector(".draggable")
        if (draggableElement) {
            const clrItem = board.querySelector(".clr-todo")
            if (clrItem) {
                draggableElement.style.color = clrItem.value
            }
            board.appendChild(draggableElement);
        }
    })
})



const clrTodoChange = document.querySelectorAll(".clr-todo");
clrTodoChange.forEach((item) => {
    item.addEventListener('change', (e) => {
        const board = e.target.closest(".board")

        if (board) {
            const allTodos = board.querySelectorAll(".todo")
            allTodos.forEach((todo) => {
                todo.style.color = e.target.value
            })
        }
    })
})

