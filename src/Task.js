import { format } from "date-fns";

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  set dueDate(value) {
    const date = format(
      new Date(value.slice(0, 4), value.slice(5, 7) - 1, value.slice(8, 10)),
      "dd.MM.yyyy"
    );

    this._dueDate = date;
  }

  get dueDate() {
    return this._dueDate;
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
