import { observable, computed, action } from 'mobx';

class Todo {
  id;
  @observable title;
  @observable completed = false;

  constructor({ title }) {
    this.id = new Date();
    this.title = title;
  }

  @action toggleCompleted () {
    this.completed = !this.completed;
  }
}

class Store {
  @observable todos = [];

  @computed get totalCompleted () {
    return this.todos.filter(todo => todo.completed).length;
  }

  @action addTodo(todo) {
    this.todos.push(new Todo(todo));
  }
}

const store = new Store();

export default store;