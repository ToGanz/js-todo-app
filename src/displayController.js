function renderProjects(projects) {
  const projectsList = document.querySelector("#projects-list");
  projectsList.innerHTML = "";
  const addTaskPopupButton = document.querySelector("#addTaskPopupButton");
  if (projects.length < 1) {
    addTaskPopupButton.classList.add("hidden");
  } else {
    addTaskPopupButton.classList.remove("hidden");
  }
  projects.forEach((project, projectIndex) => {
    const projectListItem = document.createElement("LI");
    projectListItem.classList.add("project");
    projectListItem.id = `project-${projectIndex}`;
    projectListItem.setAttribute("data-project", `${projectIndex}`);

    const projectTitle = document.createElement("H1");
    projectTitle.classList.add("project-title");
    projectTitle.innerHTML = `${project.title}`;
    projectListItem.appendChild(projectTitle);

    const deleteProjectSpan = document.createElement("SPAN");
    deleteProjectSpan.id = "close-project";
    deleteProjectSpan.innerHTML = "x";

    projectListItem.appendChild(deleteProjectSpan);

    projectsList.appendChild(projectListItem);
  });
}

function renderTasks(tasks = "") {
  const tasksList = document.querySelector("#tasks-list");
  const completedTasksList = document.querySelector("#completed-tasks-list");
  tasksList.innerHTML = "";
  completedTasksList.innerHTML = "";
  if (tasks === "") {
    return;
  }
  tasks.forEach((task, taskIndex) => {
    const taskListItem = document.createElement("LI");
    taskListItem.classList.add("task", `task-${taskIndex}`);
    if (task.completed) {
      taskListItem.classList.add("finished");
    } else {
      taskListItem.classList.add("unfinished");
    }
    taskListItem.setAttribute("data-task", `${taskIndex}`);

    const innerTaskDiv = document.createElement("DIV");
    innerTaskDiv.classList.add("inner-task");
    innerTaskDiv.innerHTML = `
        <h1>${task.title}</h1>
        <h3>Priority: ${task.priority}</h3>
        <h4>Due: ${task.dueDate}</h4>
        <p>${task.description}</p>
      `;
    taskListItem.appendChild(innerTaskDiv);

    const editTaskButton = document.createElement("BUTTON");
    editTaskButton.classList.add("editTaskPopup", "btn", "icon");
    editTaskButton.innerHTML = "Edit Task";
    taskListItem.appendChild(editTaskButton);

    const checkDiv = document.createElement("DIV");
    checkDiv.classList.add("checks");
    checkDiv.innerHTML = `
        <label class="checkbox-label" for="check">
          ${task.completed ? "completed!" : "completed?"}
        </label>
        <input 
          class="check" 
          name="chckbx" 
          type ="checkbox"${task.completed ? "checked" : ""}
        />
      `;
    taskListItem.appendChild(checkDiv);

    if (!task.completed) {
      tasksList.appendChild(taskListItem);
    } else {
      completedTasksList.appendChild(taskListItem);
    }
  });
}

export { renderProjects, renderTasks };
