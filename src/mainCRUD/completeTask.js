import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/hearder.js";
import { Col } from "antd";
import { Button, Row } from "react-bootstrap";

function CompleteTask() {
  const [complete, setComplete] = useState([]);

  const getCompleteTodo = () => {
    const url = "http://localhost:8000/tasks";
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

        <div className="wbox">
          <Row gutter={20}>
            <Col
              span={6}
              order={1}
              style={{ fontSize: "30px", marginLeft: 60 }}
            >
              task.title
            </Col>

            <Col
              span={6}
              order={2}
              style={{ fontSize: "30px", marginLeft: 60, marginTop: -1 }}
            >
              <Button shape="round">
                {/* // style={status_color(task.tag)}> */}
                task.tag
              </Button>
            </Col>

            <Col
              span={6}
              order={3}
              style={{ fontSize: "30px", marginLeft: 60, marginTop: 2 }}
            >
              12/12/1222
              {/* {new Date(task.completedAt).toLocaleDateString("en-US")} */}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default CompleteTask;
