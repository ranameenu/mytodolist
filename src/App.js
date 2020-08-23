import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./pages/Todo";

function App() {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Todo List</h2>
      <Todo />
    </div>
  );
}

export default App;
