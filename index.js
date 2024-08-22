const input = document.getElementById("input-box")
const addBtn = document.getElementById("add-button")
const listContainer = document.getElementById("list-items")


const addTask = () => {
    
    if (input.value === ""){
        alert("Add a task")
    }else{
        let li = document.createElement("li")
        li.innerHTML = input.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input.value = ""
    saveData()
}

const delTask = (e) => {
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
}

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML)
}

const showData = () => {
    listContainer.innerHTML = localStorage.getItem("data")
}

listContainer.addEventListener("click", delTask)


addBtn.addEventListener("click",addTask)

showData()