import React from "react";


const TodosList = ({todos, setTodos}) => {
    const pushComplete = (todo) => {
        setTodos(
        )
    }

    const pushDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    return(
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input 
                     type="text"
                     value={todo.title}
                     className = "list"
                     onChange={(event) => event.preventDefault()}    
                    />
                    <div>
                        <button className="button-complete task-button" onClick={() => pushComplete(todo)}>
                            <i className="fa fa-check-circle"></i>)
                        </button>
                        
                        <button className="button-edit task-button">
                            <i className="fa fa-edit"></i>
                        </button>
                        
                        <button className="button-delete task-button" onClick={()=>pushDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    )
}
export default TodosList;