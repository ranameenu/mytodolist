import React, { Component } from "react";
import Search from "./Search";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

class Todo extends Component {
  state = {
    todos: [
      {
        id: 1,
        dos: "Hey",
        completed: false,
      },
      {
        id: 2,
        dos: "World",
        completed: false,
      },
      {
        id: 3,
        dos: "Hello",
        completed: false,
      },
    ],
  };
  render() {
    return (
      <div>
        <AddTodo />
        <hr />
        <br></br>
        <Search />
        <ul className="list-group mt-5">
          {this.state.todos.map((todo) => (
            <TodoItem key={todo.id} value={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
