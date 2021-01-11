import React from "react";
import "./form.style.css";

const Form = (props) => {
  return (
    <div className="container h-100">
      <form onSubmit={props.loadweather}>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="City!"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Country!"
              name="country"
              autoComplete="off"
            />
            <div>{props.error ? error() : null}</div>
          </div>
          <div className="col-md-3 mt-md-0 text-md-left">
            <button className="btn btn-Primary" name="searchButton">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function error() {
  return <div role="alert" className="error">Please enter the city and country</div>;
}

export default Form;
