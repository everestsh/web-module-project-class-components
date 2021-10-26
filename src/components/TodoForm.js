import React from "react";

class TodoForm extends React.Component {
  // Constructor with state

  handleChanges = e => {
    this.setState({
        ...this.state,
        input: e.target.value
      });
  };
  handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Add click === ", this.props)
    //console.log("Add click === ", this.state.input)
    //this.props.handleAddItem()
    //this.props.handleAddItem('Learn setState()')
    //this.props.handleAddItem(this.props.input);
    this.props.handleAddItem(this.state.input);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
        <input onChange={this.handleChanges} type="text" name="item" />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;