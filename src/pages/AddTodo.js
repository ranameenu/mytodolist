import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    dos: "",
  };

  onChange = (e) => {
    this.setState({ dos: e.target.value });
  };

  onClick = () => {
    if (this.state.dos !== "") {
      this.props.addTodo(this.state.dos);
      this.setState({ dos: "" });
    }
  };

  render() {
    return (
      <div className="card mt-3">
        <div className="card-body">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Add Your Todo"
              value={this.state.dos}
              onChange={this.onChange}
            />
            <button className="btn btn-primary mt-2" onClick={this.onClick}>
              Add Todo
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTodo;
