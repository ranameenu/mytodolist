import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center">My Todo's</h3>
        <div className="card">
          <div className="card-body">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search here"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
