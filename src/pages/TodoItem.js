import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { id, dos, completed } = this.props.value;
    return (
      <div>
        <li className="list-group-item">
          {dos}
          <button className="btn btn-danger btn-sm ml-2 float-right">
            delete
          </button>
          <button className="btn btn-success btn-sm float-right">
            complete
          </button>
        </li>
      </div>
    );
  }
}

export default TodoItem;
