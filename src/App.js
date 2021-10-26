import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todolists =[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
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
  render() {
    return (
      <div className="App">
        <h1>Todo List: MVP</h1>
        {/* <h2>Welcome to your Todo App!</h2> */}


        <TodoList todolists={todolists} />
        <div className="header">
           <TodoForm />
           <button className="clear-btn">Clear completed</button>
         </div>
        


      </div>
    );
  }
}

export default App;
