class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(task) {
    if (this.tasks.indexOf(task) >= 0) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    }
  }
}

export default Project;
