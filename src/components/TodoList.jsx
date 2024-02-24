import React from 'react'
import Todo from './Todo'

import PropTypes from 'prop-types';

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
TodoList.propTypes = {
  todo: PropTypes.object.isRequired,
  setTodo: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};

export default TodoList