import React from "react";

const Todoitems = (props) => {
  return (
    <>
      <div className="col-md-4 nabin " style={{ width: "18rem" }}>
        <div className="card bg-secondary my-2">
          <div className="card-body  ">
            <div className="d-flex justify-content-end bg-secondary">
              <i
                className="far fa-trash-alt mx-3 "
                onClick={() => {
                  props.onclick(props.id);
                }}
              ></i>

              <i className="fas fa-edit"></i>
            </div>

            <h5 className="card-title">{props.element.title}</h5>
            <p className="card-text">{props.element.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todoitems;
