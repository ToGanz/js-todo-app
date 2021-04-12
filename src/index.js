import "./scss/main_style.scss";

import Project from "./Project";
import { renderProjects, renderTasks } from "./displayController";
import mobileMenu from "./mobileMenu";
import taskEventSetUp from "./taskEventSetup";
import projectEventSetUp from "./projectEventSetup";

mobileMenu();

const projects = [];
const project1 = new Project("Default");

// projects.push(project1);

taskEventSetUp(projects);
projectEventSetUp(projects);

renderProjects(projects);
if (projects.length > 0) {
  renderTasks(project1.tasks);
}
