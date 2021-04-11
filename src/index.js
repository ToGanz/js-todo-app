import "./scss/main_style.scss";

import Project from "./Project";
import Task from "./Task";
import { renderProjects, renderTasks } from "./displayController";
import mobileMenu from "./mobileMenu";

mobileMenu();

const projects = [];
const project1 = new Project("Test 1");
const project2 = new Project("Test 2");

const task1 = new Task("task1", "what is this", "21.01.2022", 8);
const task2 = new Task("task2", "what is this", "21.01.2022", 0);
const task3 = new Task("task1", "what is this", "21.01.2022", 8);
const task4 = new Task("task1", "what is this", "21.01.2022", 8);
task1.completed = true;
project1.addTask(task1);
project1.addTask(task2);
project1.addTask(task3);
project1.addTask(task4);

project2.addTask(task1);
project2.addTask(task2);

projects.push(project1);
projects.push(project2);

renderProjects(projects);
renderTasks(project1.tasks);
