import React from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";

import "./hearder.css";

function Header() {
  <link
    href="https://fonts.googleapis.com/css2?family=Rubik+Vinyl&display=swap"
    rel="stylesheet"
  ></link>;
  return (
    <div>
      <div className="tabHeader">
        <Nav>
          <nav>
            <Link to="/login" className="textBar">
              Home
            </Link>
          </nav>
          <nav>
            <Link to="createTask" className="textBar">
              createTask
            </Link>
            <Outlet />
          </nav>
          <nav>
            <Link to="/completeTask" className="textBar">
              completeTask
            </Link>
          </nav>
        </Nav>
      </div>
    </div>
  );
}

export default Header;
