import React  from 'react';
import PropTypes from 'prop-types';

function Form({setI,todo,setTodo,inputext,setAll}) {

 function text(e){
   
    setI(e.target.value);
 }
 function submitfunction(e){
      e.preventDefault();
      setTodo([...todo,{text:inputext,completed:false, id:Math.random()*100}])
     setI("")
 }

 function filter(e){
  
  setAll(e.target.value);
 }
  return (
    <form>
    <input value={inputext} onChange={text} type="text" className="In"/>
    <button onClick={submitfunction} className="add" type="submit">Add</button>
    <select onChange={filter} className="filter">
        <option value="all" className="all">all</option>
        <option value="completed" className="compl">done</option>
        <option value="pending" className="pending">pending</option>
    </select>
    </form>
  )
}
Form.propTypes = {
  setI: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
  setTodo: PropTypes.func.isRequired,
  inputext: PropTypes.string.isRequired,
  setAll: PropTypes.func.isRequired,
};
export default Form