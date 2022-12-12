import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import { Navigate } from "react-router-dom";

import "./header.css";
function Header({ logoutdata }) {
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
              src="https://i.im.ge/2022/12/12/dD76CF.image-3.png"
              top="10px"
              height="64px"
            ></img>
          </div>

          <nav>
            <img
              src="https://i.im.ge/2022/12/12/dDd13q.image.png"
              alt="image"
              border="0"
              style={{ marginTop: 7 }}
              onClick={() => navigate("/home")}

            />
          </nav>

          <nav>
            <img
              src="https://i.im.ge/2022/12/12/dDsEPX.image-1.png"
              border="0"
              style={{ marginTop: 7 }}
              onClick={() => navigate("/createTask")}
            />
          </nav>

          <nav>
            <img
              src="https://i.im.ge/2022/12/12/dDadqK.image-2.png"
              border="0"
              style={{ marginTop: 7 }}
              onClick={() => navigate("/completeTask")}
            />
          </nav>

          <img
            src="https://i.im.ge/2022/12/11/d1j9M0.Screenshot-201.png"
            style={{
              height: 40,
              marginTop: 15,
              marginLeft: 650,
            }}
            onClick={() => {
              //refresh page
              window.location.reload();
            }}
          ></img>
        </Nav>
      </div>
    </div>
  );
}

export default Header;
