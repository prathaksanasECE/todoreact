import React from 'react'
import Todo from './Todo'

function TodoList({todo ,setTodo,update}) {
  return (
    
    <div className="topdiv">
        <ul className="maintodo">
         { 
         
            update.map((todos)=>
              
              <Todo todos={todos} key={todos.id} todo={todo} setTodo={setTodo}/>
              
              )
          
         }
        </ul>
    </div>
  )
}

export default TodoList