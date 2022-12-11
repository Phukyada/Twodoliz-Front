import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";

import "./header.css";
function Header() {
  <link
    href="https://fonts.googleapis.com/css2?family=Rubik+Vinyl&display=swap"
    rel="stylesheet"
  ></link>;
  let navigate = useNavigate();

  return (
    <div>
      <div className="tabHeader">
        <Nav>
          <div className="logo-image">
            <img
              src="https://i.im.ge/2022/12/10/dOLxJJ.logo.png"
              top="10px"
              width="120px"
              height="64px"
            ></img>
          </div>

          <nav>
            <Link to="/home" className="textBar">
              home
            </Link>
          </nav>

          <nav>
            <Link to="/createTask" className="textBar">
              createTask
            </Link>
          </nav>

          <nav>
            <Link to="/completeTask" className="textBar">
              completeTask
            </Link>
          </nav>

          <img
            src="https://i.im.ge/2022/12/11/d1j9M0.Screenshot-201.png"
            style={{
              height: 40,
              marginTop: 15,
              marginLeft: 725,
            }}
            onClick={() => navigate("/")}
          ></img>
        </Nav>
      </div>
    </div>
  );
}

export default Header;
