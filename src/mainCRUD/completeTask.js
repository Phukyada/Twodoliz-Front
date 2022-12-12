import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/hearder.js";
import { Col } from "antd";
import { Button, Row } from "react-bootstrap";

function CompleteTask() {
  const [complete, setComplete] = useState([]);

  const getCompleteTodo = () => {
    const url = "http://localhost:8000/completed";
    axios
      .get(url)
      .then((response) => {
        const { status, message, data } = response;
        if (status != 200) {
          console.log("error");
        } else {
          setComplete(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const status_color = (status) => {
    let style = "";
    if (status === "activity") {
      style = {
        backgroundColor: "#9DCDE1",
        color: "black",
        border: "none",
        borderRadius: "20px",
        marginTop: "5px",
      };
    } else if (status === "friend") {
      style = {
        backgroundColor: "#F8E16B",
        color: "black",
        border: "none",
        borderRadius: "20px",
        marginTop: "5px",
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
    } else
      style = {
        backgroundColor: "white",
        color: "black",
        border: "none",
        borderRadius: "20px",
        marginTop: "5px",
      };

    return style;
  };

  useEffect(() => {
    getCompleteTodo();
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="bgBlue">
        <div className="textTODO">
          <p> Completed Tasks</p>
        </div>

        {complete.map((task, index) => (
          <div key={index}>
            <div className="wbox">
              <Row gutter={20}>
                <Col
                  span={6}
                  order={1}
                  style={{ fontSize: "30px", marginLeft: 60 }}
                >
                  {task.title}
                </Col>

                <Col
                  span={6}
                  order={2}
                  style={{ fontSize: "25px", marginLeft: 60, marginTop: -1 }}
                >
                  <Button shape="round" style={status_color(task.tag)}>
                    {task.tag == "none" ? "" : task.tag}
                  </Button>
                </Col>

                <Col
                  span={6}
                  order={3}
                  style={{ fontSize: "20px", marginLeft: 60, marginTop: 7 }}
                >
                  {task.completedAt == null
                    ? ""
                    : new Date(task.completedAt).toLocaleDateString()}
                </Col>
              </Row>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompleteTask;
