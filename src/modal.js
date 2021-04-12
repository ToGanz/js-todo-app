import Task from "./Task";

import { renderTasks } from "./displayController";

const eventSetUp = (projects) => {
  const popup = document.querySelector(".popup");
  const addClose = document.querySelector("#addClose");
  const editClose = document.querySelector("#editClose");
  const modal = document.querySelector("#task-modal");
  const editModal = document.querySelector("#editTask-modal");

  const taskForm = document.querySelector(".task-form");
  const editTaskForm = document.querySelector(".editTask-form");

  const addTaskbtn = document.querySelector(".addTask");
  const editTaskbtn = document.querySelector(".editTask");
  const removeTaskbtn = document.querySelector(".removeTask");
  const form = document.querySelector(".formInput");

  const tasks = document.querySelector("#tasks-list");
  const completedTasks = document.querySelector("#completed-tasks-list");

  // modal
  popup.addEventListener("click", () => {
    modal.style.display = "block";
  });

  addClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  editClose.addEventListener("click", () => {
    editModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    } else if (e.target === editModal) {
      editModal.style.display = "none";
    }
  });

  function getActiveProject(projects) {
    const projectDiv = document.querySelector(".active-project");
    const projectId = projectDiv.id.charAt(projectDiv.id.length - 1);
    const project = projects[projectId];
    return project;
  }

  // Add Task
  function addTask(e) {
    e.preventDefault();
    const title = document.querySelector("#task-title").value;
    const description = document.querySelector("#task-description").value;
    const dueDate = document.querySelector("#task-dueDate").value;
    const priority = document.querySelector("#task-priority").value;

    const task = new Task(title, description, dueDate, priority);
    const project = getActiveProject(projects);
    project.addTask(task);
    taskForm.reset();
    modal.style.display = "none";
    renderTasks(project.tasks);
  }

  addTaskbtn.addEventListener("click", addTask);

  // edit Task
  function displayEditTask(e) {
    // get active project
    // let project =
    const target = e.target.parentNode;
    const taskId = target.getAttribute("data-task");
    if (e.target.matches("button")) {
      const title = target.getElementsByTagName("h1")[0].innerHTML;
      document.querySelector("#editTask-title").value = title;

      const description = target.getElementsByTagName("p")[0].innerHTML;
      document.querySelector("#editTask-description").value = description;

      const date = target.getElementsByTagName("h4")[0].innerHTML.slice(-10);
      const dueDate =
        date.slice(-4) + "-" + date.slice(3, 5) + "-" + date.slice(0, 2);
      document.querySelector("#editTask-dueDate").value = dueDate;

      const priority = target.getElementsByTagName("h3")[0].innerHTML.slice(-1);
      document.querySelector("#editTask-priority").value = priority;

      document.querySelector("#taskId").value = taskId;

      editModal.style.display = "block";
    }
  }

  tasks.addEventListener("click", displayEditTask);
  completedTasks.addEventListener("click", displayEditTask);

  function editTask(e) {
    e.preventDefault();
    const taskId = document.querySelector("#taskId").value;
    const project = getActiveProject(projects);
    const task = project.tasks[taskId];
    task.title = document.querySelector("#editTask-title").value;
    task.description = document.querySelector("#editTask-description").value;
    task.dueDate = document.querySelector("#editTask-dueDate").value;
    task.priority = document.querySelector("#editTask-priority").value;

    editTaskForm.reset();
    editModal.style.display = "none";
    renderTasks(project.tasks);
  }

  editTaskbtn.addEventListener("click", editTask);

  // remove Task
  function removeTask(e) {
    e.preventDefault();

    const taskId = document.querySelector("#taskId").value;
    const project = getActiveProject(projects);
    const task = project.tasks[taskId];
    project.deleteTask(task);
    form.reset();
    editModal.style.display = "none";
    renderTasks(project.tasks);
  }

  removeTaskbtn.addEventListener("click", removeTask);

  // Set complete Status
  function toggleCheck(e) {
    // get active project
    // let project =

    if (e.target.matches("input")) {
      const parent = e.target.parentNode.parentNode;
      const taskId = parent.getAttribute("data-task");
      const project = getActiveProject(projects);
      const task = project.tasks[taskId];
      if (e.target.checked) {
        task.completed = true;
      } else {
        task.completed = false;
      }
      renderTasks(project.tasks);
    }
  }

  tasks.addEventListener("click", toggleCheck);
  completedTasks.addEventListener("click", toggleCheck);
};

export default eventSetUp;
