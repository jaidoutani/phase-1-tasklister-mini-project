document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById('create-task-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let value = document.getElementById('new-task-description').value
        addTasks(value)
    })
    let taskUl = document.getElementById('tasks')
    taskUl.addEventListener('click', (e) => {
        e.preventDefault()
        if(e.target.innerHTML === "x"){
            handleDelete(e)
        }
        console.log(e)
    })
});

function addTasks(task) {
    let liTag = document.createElement('li')
    let btn = document.createElement('button')
    btn.innerHTML = 'x'
    liTag.textContent = `${task} `
    liTag.appendChild(btn)
    let ulTasks = document.getElementById('tasks')
    ulTasks.appendChild(liTag)
}

function handleDelete(e) {
    e.target.parentNode.remove()
}