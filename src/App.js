import React from 'react';
// import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todolists =[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todolists: todolists
    }
  }

  handleClear = () => {
    console.log('App.js: clear');
    this.setState({
      ...this.state,
      todolists: todolists.filter( item=>  item.completed === false)
      //todolists: this.state.todolists.filter(item=> !item.completed)
    });
  }
  handleAddItem = (task) => {
  
    const newItem = {
      task: task,
      // task: "Learn setState()",
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      todolists: [...this.state.todolists, newItem]
    });
    console.log("index: handleAddItem")
  }
  
  render() {
    return (
      <div className="App">
        <h1>Todo List: MVP</h1>
        {/* <h2>Welcome to your Todo App!</h2> */}


        <TodoList todolists={this.state.todolists} />
        <div className="header">
           <TodoForm handleAddItem={this.handleAddItem}/>
           <button onClick={this.handleClear} className="clear-btn">Clear completed</button>
         </div>
        


      </div>
    );
  }
}

export default App;
