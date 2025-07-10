<span id="temperature"></span>

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const delBth = document.createElement("button");
    delBth.textContent = "X"
    delBth.onclick = () => remove();

    li.appendChild(delBth);
    taskList.appendChild(li);
    taskInput.value = "";
    
}
