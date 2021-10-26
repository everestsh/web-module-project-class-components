import React from "react";

class TodoForm extends React.Component {
  // Constructor with state

  handleChanges = e => {
    
  };



  render() {
    return (
      <form>
        
        <input type="text" name="item" />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;