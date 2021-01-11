import React from "react";
import "./weather.style.css";

const Weather = (props) => {
  return (
    <div className="container text-light">
      <div className="Card">
        <h3 className="py-2">{props.city}</h3>
        {props.temp_celcius ? (
          <h1 className="py-2">{props.temp_celcius}&deg;C</h1>
        ) : null}
        <div className="info">
          {weatherIconImage(props.description, props.weatherIcon)}
        </div>
        <div className="info">{minmaxTemp(props.temp_min, props.temp_max)}</div>
      </div>
    </div>
  );

  function minmaxTemp(min, max) {
    if (min && max) {
      return (
        <h3>
          <span className="px-1">min / max</span>
          <br />
          <span className="px-4">{min}&deg;C</span>
          <span className="px-4">{max}&deg;C</span>
        </h3>
      );
    }
  }
};

function weatherIconImage(desc, weatherIcon) {
  if (desc) {
    return (
      <div className="info">
        <img
          className="display-1"
          src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt={desc}
        />
        <h2 className="py-3">{desc.toUpperCase()}</h2>
      </div>
    );
  }
}

export default Weather;
