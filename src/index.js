import "./scss/main_style.scss";

import Project from "./Project";
import Task from "./Task";
import { renderProjects, renderTasks } from "./displayController";
import mobileMenu from "./mobileMenu";
import taskEventSetUp from "./taskEventSetup";
import projectEventSetUp from "./projectEventSetup";

mobileMenu();

const projects = [];
const project1 = new Project("Test 1");
const project2 = new Project("Test 2");

const task1 = new Task("task1", "what is this", "2022-04-12", 8);
const task2 = new Task("task2", "what is this", "2021-04-21", 0);
const task3 = new Task("task3", "what is this", "2021-04-21", 8);
const task4 = new Task("task4", "what is this", "2021-04-21", 8);

const task5 = new Task("task5", "what is this", "2021-04-21", 8);
const task6 = new Task("task6", "what is this", "2021-04-21", 8);

task1.completed = true;
project1.addTask(task1);
project1.addTask(task2);
project1.addTask(task3);
project1.addTask(task4);

project2.addTask(task5);
project2.addTask(task6);

// projects.push(project1);
// projects.push(project2);

taskEventSetUp(projects);
projectEventSetUp(projects);

renderProjects(projects);
if (projects.length > 0) {
  renderTasks(project1.tasks);
}
