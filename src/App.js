import React from "react";
import Weather from "./api/weather.component";
import Form from "./api/form.component";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./api/footer.component";
import NavbarFunction from "./api/navbar.component";

const API_Key = "59e3e847b30fd1ed364760d87a050922";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      weatherIcon: undefined,
      error: false,
    };
    //this.getWeather();
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city === "" || country === "" || city === null || country === null) {
      this.setState({ error: true });
    } else {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country},&appid=${API_Key}`
      );
      const response = await api_call.json();
      console.log(response);

      this.setState({
        city: `${response.name},${response.sys.country}`,
        celsius: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        description: response.weather[0].description,
        icon: response.weather[0].icon,
        error: false,
      });
    }
  };
  render() {
    return (
      <div className="App">
        <NavbarFunction />
        <div className="container">
          <Form loadweather={this.getWeather} error={this.state.error} />
          <Weather
            city={this.state.city}
            country={this.state.country}
            temp_celcius={this.state.celsius}
            temp_max={this.state.temp_max}
            temp_min={this.state.temp_min}
            description={this.state.description}
            weatherIcon={this.state.icon}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
