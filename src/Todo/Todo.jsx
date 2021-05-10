import React, { Component } from 'react'
import TodoItem from './TodoItem';
// import TodoItem from './TodoItem'
import TodoList from './TodoList'

class Todo extends Component {

    state = {
        Todo : {tdId: "TD01",tdName: "Projects"},
        TodoLists : [
            {tlId: "TL01",tlName: "To do", tdId: "TD01"},
            {tlId: "TL02",tlName: "In Progress", tdId: "TD01"},
            {tlId: "TL03",tlName: "Completed", tdId: "TD01"}
        ],
        TodoItems : [
            {
                tiId: "TI01",
                tiName: "Design",
                tiDesc: "This is a design description",
                tlId: "TL01"
            },
            {
                tiId: "TI02",
                tiName: "Development",
                tiDesc: "This is a development description",
                tlId: "TL01"
            },
            {
                tiId: "TI03",
                tiName: "Deployment",
                tiDesc: "This is a deployment description",
                tlId: "TL02"
            },
            {
                tiId: "TI04",
                tiName: "Authentication",
                tiDesc: "This is a authentication description",
                tlId: "TL02"
            },
            {
                tiId: "TI05",
                tiName: "Domain registration",
                tiDesc: "This is a domain description",
                tlId: "TL03"
            },
            {
                tiId: "TI06",
                tiName: "Project setup",
                tiDesc: "This is a setup description",
                tlId: "TL03"
            }
        ],
        TodoUsers: [
            {
                tuId: "TU01",
                tufName: "Victor",
                tulName: "Aremu",
                tiId: "TI01"
            },
            {
                tuId: "TU02",
                tufName: "Agbesi",
                tulName: "Amenyo",
                tiId: "TI01"
            },
            {
            
                tuId: "TU03",
                tufName: "Agbesi",
                tulName: "Amenyo",
                tiId: "TI03"
            }
        ]
        
    };

    deleteTodoItemHandler = (key) => {
        let val = key.currentTarget.previousElementSibling.innerText;
        let removeTodoItem;
        
        this.state.TodoItems.map(di=>{
            if(di.tiName === val){
                removeTodoItem = di;
                return removeTodoItem;
            }
            return {
                
                }
            
        });
        // console.log(removeTodoItem);

    
    let array = this.state.TodoItems.filter((item) =>{
        return item.tiId !== removeTodoItem.tiId;
    
    });
    console.log(array);

    this.setState({
        TodoItems: array
    })
}

    

    render() {
        
        this.todoLists = (
            <div className="todo-body">
                {this.state.TodoLists.map((tl,index) => {

                    let todoItemsIndexs = this.state.TodoItems.reduce((c,v,i) => v.tlId === tl.tlId ? c.concat(i) : c, []);
                    
                    
                    return (
                        <TodoList 
                            key={tl.tlId}
                            tlName={tl.tlName}>
                            {todoItemsIndexs.map((ti,i) => {
                                this.TodoItems = {
                                    ...this.state.TodoItems[ti]
                                }
                                return <TodoItem
                                key={this.TodoItems.tiId}
                                tiName={this.TodoItems.tiName}
                                deleteItem={(e) => this.deleteTodoItemHandler(e)}>
                                    <p>{this.TodoItems.tiDesc}</p>
                                </TodoItem>
                            })}
                        </TodoList>
                    );
                })}
            </div>
        );

        return (
            <div className="todo">
                <h2>{this.state.Todo.tdName}</h2>
    
                
                {this.todoLists}
                
            </div>
        );
    }
}

export default Todo