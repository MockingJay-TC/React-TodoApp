import React from 'react'
import TodoUser from './TodoUser'

const TodoItem = (props) => {
    return(
        <div className="todo-item">
            <div className="header">
                <h4>{props.tiName}</h4>
                <i onClick={props.deleteItem} title="Delete" className="zmdi zmdi-delete"></i>
                
            </div>
            <div className="content">
                {props.children}
            </div>
            <TodoUser />
        </div>
    )
}

export default TodoItem