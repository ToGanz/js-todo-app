import "./scss/main_style.scss";

import projectFactory from "./projectFactory";
import taskFactory from "./taskFactory";
import render from "./displayController";

const projects = [];
const project1 = projectFactory("Test 1");
const project2 = projectFactory("Test 2");

const task1 = taskFactory("task1", "what is this", "21.01.2022", 3);
const task2 = taskFactory("task2", "what is this", "21.01.2022", 3);

project1.addTask(task1);
project1.addTask(task2);

project2.addTask(task1);
project2.addTask(task2);

projects.push(project1);
projects.push(project2);

render(projects);
