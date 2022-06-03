import React, { useRef, useState } from "react";
import Todoitem from "./Todoitem";

const Addtodo = () => {
  const [todo, setTodo] = useState([]);
  const [titlem, setTitlem] = useState("");
  const [descm, setDescm] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [userid, setUserid] = useState(0);
  const myRef = useRef();
  const myRef2 = useRef();
  const onChanget = (e) => {
    setTitle(e.target.value);
  };
  //for change in input filed in note addition
  const onChanged = (e) => {
    setDesc(e.target.value);
  };
  //for change in input field in modal
  const onChangetm = (e) => {
    setTitlem(e.target.value);
  };
  const onchangedm = (e) => {
    setDescm(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (title && desc) {
      setTodo(todo.concat({ title, description: desc }));
      setTitle("");
      setDesc("");
    }
  };

  //this function is added for deletion
  const hanDle = (id) => {
    setUserid(id);
    console.log(userid);
    const temptodo = [...todo]; //copy the orginal content which doesnt change any content
    temptodo.splice(id, 1);
    setTodo(temptodo);
  };
  //this function for editing when user click the edit button
  const handleEdit = (id) => {
    console.log("edit button has been clicked");
    setUserid(id);
    setTitlem(todo[id].title);
    setDescm(todo[id].description);
    myRef.current.click();
  };
  //this function for updating the notes
  const myEdit = (e) => {
    e.preventDefault();
    myRef2.current.click();
    const todoo = [...todo];
    console.log(todoo[userid]);
    todoo.splice(userid, 1, { title: titlem, description: descm });
    setTodo(todoo);
  };

  //this function to get data from the editing table

  return (
    <>
      <div className="container card bg-warning" style={{ width: "18rem" }}>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
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
            className="btn btn-primary m-3"
            onClick={handleClick}
          >
            Add Todo
          </button>
        </form>
      </div>
      <button
        id="button"
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={myRef}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Your Todo
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="titlem" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="titlem"
                    aria-describedby="emailHelp"
                    value={titlem}
                    onChange={onChangetm}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="descriptionm" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="descriptionm"
                    aria-describedby="emailHelp"
                    value={descm}
                    onChange={onchangedm}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={myRef2}
                id="button2"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={myEdit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Todoitem todo={todo} onclick={hanDle} handleedit={handleEdit} />
      </div>
    </>
  );
};

export default Addtodo;
