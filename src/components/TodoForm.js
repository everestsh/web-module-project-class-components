import React from "react";

class TodoForm extends React.Component {
  // Constructor with state

  handleChanges = e => {
    
  };
  handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Add click === ", this.props)
    // console.log("Add click === ", this.state.input)
    this.props.handleAddItem()
    //this.props.handleAddItem('Chips')
    // this.props.handleAddItem(this.props.input);
    // this.props.handleAddItem(this.state.input);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
        <input type="text" name="item" />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;