import React from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav} from "react-bootstrap";

import "./MainCRUD.css";

function MainCRUD() {
  return (
    <div>
      <div className="tabHeader">
        <Nav>
          <nav>
            <Link to="/home" className="textBar">
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

      <div className="textTODO" >
        <h1> My to-do list</h1>
      </div>

      <Link to="/"> Back to login </Link>
    </div>
  );
}

export default MainCRUD;