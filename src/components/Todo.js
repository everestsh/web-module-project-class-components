import React from 'react';

// const Todo = props => {

// //   return (
// //     <div className={`item${props.item.completed ? ' completed' : ''}`}>
// //       <p>{props.item.task}</p>
// //     </div>
// //   );

//   const handleClick = () =>{
//     console.log("Todo")
//     // props.handleToggleItem(props.item)
// }
//     return (
//     <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
//     <p>{props.item.task}</p>
//     </div>
// );
// };

// export default Todo;



class Todo extends React.Component {

    handleClick = () =>{
        this.props.handleToggleItem(this.props.item)
    }
    render(){
        return (
            <div onClick={this.handleClick} className={`item${this.props.item.completed ? ' completed' : ''}`}>
              <p>{this.props.item.task}</p>
            </div>
          );
    }
};

export default Todo ;