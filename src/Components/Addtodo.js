import React, { useState } from "react";
import Todoitem from "./Todoitem";

const Addtodo = () => {
  const [todo, setTodo] = useState([]);
  const note = {
    title: "",
    description: "",
  };

  const onChanget = (e) => {
    note.title = e.target.value;
  };
  const onChanged = (e) => {
    note.description = e.target.value;
  };
  const handleClick = (e) => {
    e.preventDefault();
    setTodo(todo.concat(note));
    console.log(todo);
  };
  const hanDle= (title) => {
      setTodo(todo.filter(element=>title!==element.title))
        
    
      

    
  }
  
  

  return (
    <>
      <div className="container card bg-warning" style={{ width: "18rem" }}>
        <form>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">title</label>
    <input type="title" className="form-control" id="title" onChange={onChanget} aria-describedby="emailHelp"/>
    
  </div>
<div>
  <label htmlFor="description" className="form-label">description</label>
    <input type="description" className="form-control" id="description" onChange={onChanged} aria-describedby="emailHelp"/>
    
  </div>

  <button type="submit"  class="btn btn-primary m-3" onClick={handleClick}>Add Todo</button>
        </form>
      </div>
    
      <div >
        <Todoitem todo={todo} onclick ={hanDle} />
      </div>
    </>
  );
};

export default Addtodo;
