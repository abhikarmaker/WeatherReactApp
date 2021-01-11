import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar} from "react-bootstrap";

const NavbarFunction = () => {
  return (
    <div>
      <Navbar bg="transparent" variant="light">
        <Navbar.Brand>
            <h1 className="py-3">WeatherApp</h1>
          </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavbarFunction;
