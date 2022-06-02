import React, { useState } from "react";
import Todoitem from "./Todoitem";

const Addtodo = () => {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const onChanget = (e) => {
    setTitle(e.target.value);
  };
  const onChanged = (e) => {
    setDesc(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (title && desc) {
      setTodo(todo.concat({ title, description: desc }));
      setTitle("");
      setDesc("");
    }
  };
  const hanDle = (id) => {
    console.log(id);
    const temptodo = [...todo]; //copy the orginal content which doesnt change any content
    temptodo.splice(id, 1);
    setTodo(temptodo);
  };

  return (
    <>
      <div className="container card bg-warning" style={{ width: "18rem" }}>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              title
            </label>
            <input
              type="title"
              className="form-control"
              id="title"
              onChange={onChanget}
              aria-describedby="emailHelp"
              value={title}
            />
          </div>
          <div>
            <label htmlFor="description" className="form-label">
              description
            </label>
            <input
              type="description"
              className="form-control"
              id="description"
              onChange={onChanged}
              aria-describedby="emailHelp"
              value={desc}
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary m-3"
            onClick={handleClick}
          >
            Add Todo
          </button>
        </form>
      </div>

      <div>
        <Todoitem todo={todo} onclick={hanDle} />
      </div>
    </>
  );
};

export default Addtodo;
