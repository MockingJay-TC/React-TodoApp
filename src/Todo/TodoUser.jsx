import React from 'react';

const TodoUser =(props) => {
    
        return ( 
            <div className="user">
                <p>{props.initials}</p>
            </div>
         );
    }

export default TodoUser;