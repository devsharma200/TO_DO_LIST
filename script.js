let tasks = [];

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("tasks-list");

    if (taskInput.value.trim() !== "") {
        tasks.push(taskInput.value.trim());

        const newTask = document.createElement("li");
        newTask.innerHTML = `
            ${taskInput.value.trim()}
            <button class="delete-btn" onclick="deleteTask(${tasks.length - 1})">Delete</button>
        `;

        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("tasks-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const newTask = document.createElement("li");
        newTask.innerHTML = `
            ${task}
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;

        taskList.appendChild(newTask);
    });
}
