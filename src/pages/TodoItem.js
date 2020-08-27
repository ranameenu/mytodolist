import React, { Component } from "react";

class TodoItem extends Component {
  onClick = () => {
    this.props.deleteTodo(this.props.value.id);
  };
  render() {
    const { id, did, completed } = this.props.value;

    return (
      <li className="list-group-item">
        {did}
        <button
          className="btn btn-danger btn-sm ml-2 float-right"
          onClick={this.onClick}
        >
          delete
        </button>
        <button className="btn btn-success btn-sm float-right">complete</button>
      </li>
    );
  }
}

export default TodoItem;
