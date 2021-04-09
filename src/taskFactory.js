const taskFactory = (title, description, dueDate, priority) => {
  const completed = false;

  let _description = description;
  let _priority = priority;
  // Getters
  const getDescription = () => {
    return _description;
  };

  const getPriority = () => {
    return _priority;
  };

  // Setters
  const setDescription = (text) => {
    _description = String(text).slice(0, 120);
  };

  const setPriority = (num) => {
    if (num >= 5) {
      _priority = 5;
    } else if (num <= 1) {
      _priority = 1;
    } else {
      _priority = num;
    }
  };

  return {
    title,
    dueDate,
    completed,
    getDescription,
    setDescription,
    getPriority,
    setPriority,
  };
};

export default taskFactory;
