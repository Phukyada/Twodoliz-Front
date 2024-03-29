import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/hearder.js";
import { Col, Checkbox, message } from "antd";
import { Button, Row } from "react-bootstrap";

function CompleteTask() {
  const [toDo, setTodo] = useState([]);

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

  useEffect(() => {
    getCompleteTodo();
  }, []);

  const checkChange = async (e, task_id) => {
    console.log(`${e.target.checked}`);
    const checkBox = {
      title: toDo.title,
      detail: toDo.detail,
      completed: `${e.target.checked}`,
      completedAt: toDo.datePicker,
      tag: toDo.tag,
      hasCompletedDate: toDo.datePicker,
    };

    const res = await axios
      .patch(`http://localhost:8000/tasks/${task_id}`, {
        completed: !`${e.target.checked}`,
      })
      .then((res) => {
        console.log(res.data);
        message.success(`Uncompleted Task`);
      }).then(() => {
        getCompleteTodo();
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
              <Row gutter={10}>
                <Col span={3} order={1}>
                  <Checkbox
                    onChange={(e) => {
                      console.log(e);
                      checkChange(e, task._id);
                    }}
                    style={{ marginTop: "15px", boxShadow: "black", marginLeft: 50 }}
                    checked={task.completed}
                  />
                </Col>

                <Col span={7} order={2} style={{ fontSize: "25px" }}>
                  {task.title}
                </Col>

                <Col span={6} order={3}>
                  <Button shape="round" style={status_color(task.tag)}>
                    {task.tag === "none" ? "" : task.tag}
                  </Button>
                </Col>

                <Col
                  span={3}
                  order={4}
                  style={{ marginTop: "5px", fontSize: "20px" }}
                >
                  {task.completedAt == null
                    ? ""
                    : new Date(task.completedAt).toLocaleDateString("en-GB")}
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
