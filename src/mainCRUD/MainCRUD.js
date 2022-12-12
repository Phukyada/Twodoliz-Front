import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Col, Checkbox ,message} from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/hearder.js";
import "./MainCRUD.css";

import { Button, Row } from "react-bootstrap";

function MainCRUD() {
  const [toDo, setTodo] = useState([]);

  const getAllTodo = () => {
    const url = "http://localhost:8000/uncompleted";
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

  // const [refreshing, setRefreshing] = useState(false);
  // const refresh = () => {
  //   setRefreshing(true);
  //   getAllTodo();
  //   setRefreshing(false);
  // };

  // const onRefresh = useCallback(() => {
  //   refresh();
  // }, []);

  useEffect(() => {
    getAllTodo();
    // refresh();
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
        completed: `${e.target.checked}`,
      })
      .then((res) => {
        console.log(res.data);
        message.success(`Completed Task`);
      });
  };

  const onDelete = async (task_id) => {
    const res = await axios
      .delete(`http://localhost:8000/tasks/${task_id}`)
      .then((res) => {
        console.log(res.data);
        message.success(`Deleted Task`);
      }
      )
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

      <div className="bgGray">
        <div className="textTODO">
          <p> My to-do list</p>
          {toDo.map((task, index) => (
            <div key={index}>
              <div className="wbox">
                <Row gutter={10}>
                  <Col span={3} order={1}>
                    <Checkbox
                    
                      onChange={(e) => {
                        console.log(e);
                        checkChange(e, task._id);
                      }}
                      style={{ marginTop: "15px", boxShadow: "black" }}
                      checked={task.completed}
                    />
                  </Col>

                  <Col span={7} order={2} style={{ fontSize: "25px" }}>
                    {task.title}
                  </Col>

                  <Col span={6} order={3} >
                    <Button shape="round" style={status_color(task.tag)}>
                      {task.tag == "none" ? "" : task.tag}
                    </Button>
                  </Col>

                  <Col
                    span={3}
                    order={4}
                    style={{ marginTop: "5px", fontSize: "20px" }}
                  >
                    {task.completedAt == null
                      ? ""
                      : new Date(task.completedAt).toLocaleDateString()}
                  </Col>
                  <Col span={2} order={5} style={{ marginTop: "3px" }}>
                    <img
                      src="https://i.im.ge/2022/12/12/d7HXBp.Screenshot-204.png"
                      alt="Screenshot (204)"
                      style={{ height: 30, marginTop: 3 }}
                    />
                  </Col>
                  <Col span={2} order={5} style={{ marginTop: "3px" }}>
                    <img
                      src="https://i.im.ge/2022/12/12/d7E5I4.Screenshot-203.png"
                      alt="Screenshot (203)"
                      style={{ height: 30, marginTop: 3 }}
                      onClick={(e) => {
                        onDelete(task._id);
                      }}
                      delete
                    ></img>
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
