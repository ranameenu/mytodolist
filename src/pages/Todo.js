import React, { Component } from "react";
import { v4 } from "uuid";
import Search from "./Search";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

class Todo extends Component {
  state = {
    todos: [
      {
        id: 1,
        did: "Hey",
        completed: false,
      },
      {
        id: 2,
        did: "World",
        completed: false,
      },
      {
        id: 3,
        did: "Hello",
        completed: false,
      },
    ],
  };

  addTodo = (text) => {
    let copyTodos = this.state.todos;
    const newTodos = {
      id: v4(),
      did: text,
      completed: false,
    };

    copyTodos = [...copyTodos, newTodos];
    this.setState({ todos: copyTodos });
  };

  deleteTodo = (id) => {
    let copyTodos = this.state.todos;
    copyTodos = copyTodos.filter((value) => value.id !== id);
    this.setState({ todos: copyTodos });
  };

  todoComplete = (id) => {
    let copyTodos = this.state.todos;
    copyTodos = copyTodos.map((value) => {
      if (value.id == id) {
        value.completed = true;
      }
      return value;
    });
    this.setState({ todos: copyTodos });
  };

  render() {
    return (
      <div>
        <AddTodo addTodo={this.addTodo} />
        <hr />
        <br></br>
        <Search />

        <ul className="list-group mt-5">
          {this.state.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              value={todo}
              deleteTodo={this.deleteTodo}
              todoComplete={this.todoComplete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
