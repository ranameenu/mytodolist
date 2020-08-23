import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    dos: "",
  };
  onChange = (e) => {
    this.setState({ dos: e.target.value });
  };
  onChange = () => {};

  render() {
    return (
      <div>
        <div className="card mt-3">
          <div className="card-body">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Add Your Todo"
                onChange={this.onChange}
              />
              <submit
                className="btn btn-primary mt-2"
                type="submit"
                onClick={this.onChange}
              >
                Add Todo
              </submit>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTodo;
