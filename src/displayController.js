function renderProjects(projects) {
  const projectsList = document.querySelector("#projects-list");
  projectsList.innerHTML = "";

  projects.forEach((project, projectIndex) => {
    const projectListItem = document.createElement("LI");
    projectListItem.classList.add("project");
    projectListItem.id = `project-${projectIndex}`;

    const projectTitle = document.createElement("H1");
    projectTitle.classList.add("project-title");
    projectTitle.innerHTML = `${project.title}`;
    projectListItem.appendChild(projectTitle);

    projectsList.appendChild(projectListItem);
  });
}

function renderTasks(tasks) {
  const tasksList = document.querySelector("#tasks-list");
  tasksList.innerHTML = "";
  tasks.forEach((task, taskIndex) => {
    const taskListItem = document.createElement("LI");
    taskListItem.classList.add("task", `task-${taskIndex}`);
    if (task.completed) {
      taskListItem.classList.add("finished");
    } else {
      taskListItem.classList.add("unfinished");
    }

    const innerTaskDiv = document.createElement("DIV");
    innerTaskDiv.classList.add("inner-task");
    innerTaskDiv.innerHTML = `
        <h1>${task.title}</h1>
        <h3>Priority: ${task.getPriority()}</h3>
        <h4>Due: ${task.dueDate}</h4>
        <p>${task.getDescription()}</p>
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

    tasksList.appendChild(taskListItem);
  });
}

export { renderProjects, renderTasks };
