const projectFactory = (title) => {
  // let _title = title;
  const tasks = [];

  const addTask = (task) => {
    tasks.push(task);
  };

  const deleteTask = (task) => {
    if (tasks.indexOf(task) >= 0) {
      tasks.splice(tasks.indexOf(task), 1);
    }
  };

  return {
    title,
    addTask,
    deleteTask,
    tasks,
  };
};

export default projectFactory;
