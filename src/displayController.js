function render(projects) {
  const projectList = document.querySelector("#project-list");
  projectList.innerHTML = "";

  projects.forEach((project, projectIndex) => {
    const projectListItem = document.createElement("LI");
    projectListItem.classList.add("project");
    projectListItem.id = `project-${projectIndex}`;

    const projectTitle = document.createElement("H1");
    projectTitle.classList.add("project-title");
    projectTitle.innerHTML = `${project.title}`;
    projectListItem.appendChild(projectTitle);

    const addTaskButton = document.createElement("BUTTON");
    addTaskButton.classList.add("popup", "btn");
    addTaskButton.innerHTML = "Add Task";
    projectListItem.appendChild(addTaskButton);

    const taskList = document.createElement("UL");
    taskList.classList.add("task-list");

    project.tasks.forEach((task, taskIndex) => {
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

      taskList.appendChild(taskListItem);
    });

    projectListItem.appendChild(taskList);
    projectList.appendChild(projectListItem);
  });
}

export default render;
