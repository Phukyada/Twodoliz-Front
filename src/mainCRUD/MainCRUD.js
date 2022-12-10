import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav} from "react-bootstrap";  
 
import './MainCRUD.css'

function MainCRUD() {
   <link href="https://fonts.googleapis.com/css2?family=Rubik+Vinyl&display=swap" rel="stylesheet"></link>
  return (
    <div>
      <div className="tabHeader">
        <Nav>
          <nav>
            <Link to="/login" class="textBar" >
              {" "}
              Home
            </Link>
          </nav>
          <nav>
            <Link to="/createTask" class="textBar">
              create Task
            </Link>
          </nav>
          <nav>
            <Link to="/completeTask" class="textBar">
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
