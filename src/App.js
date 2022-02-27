import React, {useState} from "react";
import "./App.css";
import Header from "./Component/Header"
import Form from "./Component/Form";
import TodosList from "./Component/TodosList";


const App = () => {

    const[input, setInput] = useState("");
    const[todos, setTodos] = useState([]);
    const[editTodo, setEditTodo]= useState(null);
   
    return(
     <div className="container">
         <div className="app-wrapper">
           <div>
             <Header/>
           </div>
         
         <div>
           <Form 
         input = {input}
         setInput = {e => setInput(e)}
         todos = {todos}
         setTodos = {e => setTodos (e)}
         editTodo = {editTodo}
         setEditTodo ={e => setEditTodo(e)}
         />
         </div>
         <div>
             <TodosList todos={todos} 
             setTodos={setTodos}
             setEditTodo={setEditTodo}/>
         </div>
         </div>
    </div>

  
    );
}
export default App;
