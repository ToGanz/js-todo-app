import { renderTasks, renderProjects } from "./displayController";
import Project from "./Project";

const projectEventSetUp = (projects) => {
  const projectForm = document.querySelector(".project-form");
  const addProjectbtn = document.querySelector(".addProject");
  const projectsList = document.querySelector("#projects-list");

  // set active project
  function setActiveProject(projectId = "") {
    const activeProjectDiv = document.querySelector(".active-project");
    if (projectId !== "") {
      activeProjectDiv.id = `project-${projectId}`;
      const activeProject = projects[projectId];
      activeProjectDiv.innerHTML = activeProject.title.toUpperCase();
      renderTasks(activeProject.tasks);
    } else {
      activeProjectDiv.innerHTML = "";
      renderTasks();
    }
  }

  function setProject(e) {
    const projectId =
      e.target.getAttribute("data-project") ||
      e.target.parentNode.getAttribute("data-project");
    if (projectId) {
      setActiveProject(projectId);
    }
  }
  projectsList.addEventListener("click", setProject);

  // Add project
  function addProject(e) {
    e.preventDefault();
    const title = document.querySelector("#project-title").value.trim();
    if (title !== "") {
      const project = new Project(title);
      projects.push(project);
      projectForm.reset();
      renderProjects(projects);

      const navButton = document.querySelector("button[aria-expanded]");
      navButton.setAttribute("aria-expanded", true);
      setActiveProject(projects.length - 1);
    }
  }

  addProjectbtn.addEventListener("click", addProject);

  function deleteProject(e) {
    if (e.target.id === "close-project") {
      const projectId = e.target.parentNode.getAttribute("data-project");
      projects.splice(projectId, 1);
      renderProjects(projects);
      setActiveProject();
    }
  }

  projectsList.addEventListener("click", deleteProject);
};

export default projectEventSetUp;
