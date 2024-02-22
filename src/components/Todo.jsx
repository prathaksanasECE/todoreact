import React from 'react';

function Todo({todos,todo,setTodo}){
   
function deletebutton(){ 
     setTodo(todo.filter(i=> i.id!=todos.id))
}
function checking(){
 
    setTodo(todo.map(i=>{
        
        if(i.id===todos.id){
           
            return{
                ...i,completed:!i.completed
            }
        }
        return i;
    }))
}

    return(
        <div className="tododiv">
            
            <li className={`todoli ${todos.completed ? "red" :""}`}>{todos.text}</li>
            <button onClick={checking} className="donebutton" ><i className="fas fa-check"></i></button>
            <button onClick={deletebutton} className="trashbutton"><i className="fas fa-trash"></i></button>
        </div>
    )
}
export default Todo;