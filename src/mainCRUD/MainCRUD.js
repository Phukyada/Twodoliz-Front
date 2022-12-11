import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Col, Checkbox } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/hearder.js";
import "./MainCRUD.css";

import { Button, Row } from "react-bootstrap";

function MainCRUD() {
  const [toDo, setTodo] = useState([]);

  const getAllTodo = () => {
    const url = "http://localhost:8000/tasks";
    axios
      .get(url)
      .then((response) => {
        const { status, message, data } = response;
        if (status != 200) {
          console.log("error");
        } else {
          setTodo(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllTodo();
  }, []);

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onEdit = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onDelete = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const status_color = (status) => {
    let style = "";
    if (status === "activity") {
      style = { backgroundColor: "#9DCDE1", color: "black", border: "none" ,borderRadius:"20px", marginTop:"5px"};
    } else if (status === "friend") {
      style = {
        backgroundColor: "#F8E16B",
        color: "black",
        border: "none",
        borderRadius: "20px",
        marginTop:"5px"
      };
    } else if (status === "work") {
      style = {
        backgroundColor: "#F8C86B",
        color: "black",
        border: "none",
        borderRadius: "20px",
        marginTop: "5px",
      };
    } else if (status === "love and Family") {
      style = {
        backgroundColor: "#ECC6CF",
        heigth: "20px",
        color: "black",
        border: "none",
        borderRadius: "25px",
        marginLeft: "10px",
        marginRight: "10px",
        marginTop: "5px",
      };
    } else if (status === "study") {
      style = {
        backgroundColor: "#A4D77C",
        color: "black",
        border: "none",
        borderRadius: "20px",
        marginTop: "5px",
      };
    } else style = {
      backgroundColor: "white",
      color: "black",
      border: "none",
      borderRadius: "20px",
      marginTop: "5px",
    };

    return style;
  };

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="bgGray">
        <div className="textTODO">
          <p> My to-do list</p>
          {toDo.map((task, index) => (
            <div key={index}>
              <div className="wbox">
                <Row gutter={10}>
                  <Col span={3} order={1}>
                    <Checkbox
                      onChange={onChange}
                      style={{ marginTop: "15px", boxShadow: "black" }}
                    />
                  </Col>

                  <Col span={3} order={2} style={{ fontSize: "30px" }}>
                    {task.title}
                  </Col>

                  <Col span={6} order={3}>
                    <Button shape="round" style={status_color(task.tag)}>
                      {task.tag}
                    </Button>
                  </Col>

                  <Col
                    span={6}
                    order={3}
                    style={{ marginTop: "5px", fontSize: "20px" }}
                  >
                    {new Date(task.completedAt).toLocaleDateString("en-US")}
                  </Col>
                  <Col span={2} order={6} style={{ marginTop: "3px" }}>
                    <Button shape="round"   onEdit={onEdit} >edit</Button>
                  </Col>
                  <Col span={2} order={6} style={{ marginTop: "3px" }}>
                    <Button shape="round" onDelete={onDelete}>delete</Button>
                  </Col>
                </Row>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainCRUD;
