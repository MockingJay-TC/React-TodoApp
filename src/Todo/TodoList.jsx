import React from 'react'

const TodoList = (props) => {
    return(
        <div className="todo-list">
            <h3>{props.tlName}</h3>
            
            <div className="todo-items">
                {props.children}
            </div>
            
            
        </div>
    )
}

export default TodoList