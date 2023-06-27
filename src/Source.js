import React from "react";
import { NavLink } from "react-router-dom";

const Source = (props) => {
//   let web = "https://picsum.photos/300/200.jpg";
  return (
    <React.Fragment>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          <img src={props.imgs} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/" class="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Source;
