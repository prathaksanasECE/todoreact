import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {

  const [inputext, setInput] = useState("");
  const [todo, setTodo] = useState(()=> {
    
    const savedTodos = localStorage.getItem("todo");
    return savedTodos ? JSON.parse(savedTodos) : [];});


  const [all, setAll] = useState("all");
  const [update, setUpdate] = useState([]);
  

  useEffect(() => {
    filterfun();
    save();
  }, [all, todo])

  function filterfun() {
    switch (all) {
      case "all":
        setUpdate(todo);
        break;
      case "completed":
        setUpdate(todo.filter(i => i.completed == true))

        break;
      case "pending":
        setUpdate(todo.filter(i => i.completed == false))
        break;
      default:
        setUpdate(todo);
        break;
    }
  }

  
  const save = () => {

    localStorage.setItem("todo", JSON.stringify(todo));

  }

return (

  <>
    <h1>Todo-List</h1>
    <Form setI={setInput} todo={todo} setTodo={setTodo} inputext={inputext} all={all} setAll={setAll} />
    <TodoList todo={todo} setTodo={setTodo} update={update} />
  </>
)
  }

export default App

