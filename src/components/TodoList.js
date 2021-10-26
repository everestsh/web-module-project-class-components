// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Item from "./Item";

const TodoList = props => {
 
  return (
    <div className="todo-list">
      {props.todolists.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
