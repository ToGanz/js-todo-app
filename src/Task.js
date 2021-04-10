class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  set title(value) {
    this._title = String(value).slice(0, 50);
  }

  get title() {
    return this._title;
  }

  set description(text) {
    this._description = String(text).slice(0, 120);
  }

  get description() {
    return this._description;
  }

  set priority(num) {
    if (num >= 5) {
      this._priority = 5;
    } else if (num <= 1) {
      this._priority = 1;
    } else {
      this._priority = num;
    }
  }

  get priority() {
    return this._priority;
  }
}

export default Task;
