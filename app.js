//handle form data for log in
function logIn() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
}

//checkbox
const tasks = ['task1', 'task2', 'task3', 'task4'];
function generateTaskItem(tasks) {
    var list = document.getElementById("list");
    
    //the looping part is hard because i have hooked it up to cognito yet so i'm picking a random number
    for (let i = 0; i < tasks.length; i++) {
        //generate list item
        var listItem = document.createElement("li");
        let itemId = 'item' + i;
        let checkBoxId = 'checkBox' + i;
        listItem.setAttribute("class", "list-group-item taskList");
        listItem.setAttribute("id", itemId);
        listItem.textContent = tasks[i];
        //generate input tag for check box
        var checkBox = document.createElement("input");
        checkBox.setAttribute("id", checkBoxId);
        checkBox.setAttribute("class", "checkBox");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("onclick", "checkBoxFunction(tasks)");
        //appending elements
        listItem.appendChild(checkBox);
        list.appendChild(listItem);
    }
}
function checkBoxFunction(tasks) {
    for (let i = 0; i < tasks.length; i++) {
        var item = document.getElementById("item" + i);
        var checkBox = document.getElementById("checkBox" + i);

        if (checkBox.checked == true) {
            item.setAttribute('style', 'text-decoration: line-through;');
        } else {
            item.setAttribute('style', 'text-decoration: none;');
        }
    }
}

//project manager adding tasks code
function submitTasks(event) {
    var username = document.getElementById('username').value;
    var task = document.getElementById('task').value;
    var heading = document.getElementById('userHeading');
    var taskList = document.getElementById('userTaskList');
    //generate list item
    var listItem = document.createElement("li");
    listItem.setAttribute("class", "list-group-item taskList");
    listItem.textContent = task;
    //appeding item to list
    heading.textContent = username;
    taskList.appendChild(listItem);
    event.preventDefault();
}

