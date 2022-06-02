import React from "react";
import Todoitems from "./Todoitems.";

const Todoitem = (props) => {
  return (
    <div className="row">
      <p>your todos</p>

      {props.todo.map((element, index) => {
        return (
          <Todoitems
            element={element}
            id={index}
            key={element.id}
            onclick={props.onclick}
          />
        );
      })}
    </div>
  );
};

export default Todoitem;
