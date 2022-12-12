import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/hearder.js";
import "./createTask.css";
import { Form, Row, Col, Button, Input, DatePicker, Radio, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { PlusCircleFilled } from "@ant-design/icons";
import axios from "axios";

const CreateTask = () => {
  const [form] = Form.useForm();
  const [taskData, setTaskData] = useState({
    title: "",
    detail: "",
    completed: false,
    completedAt: null,
    tag: "",
    hasCompletedDate: false,
  });

  const onFinish = async (e) => {
    console.log(e);
    const data = {
      title: e.title,
      detail: e.detail,
      completed: false,
      completedAt: e.datePicker ? e.datePicker : null,
      tag: e.tag,
      hasCompletedDate: e.datePicker ? true : false,
    };
    console.log(data);
    const response = await axios
      .post("http://localhost:8000/tasks", data)
      .then((response) => {
        console.log(response.data);
        message.success(`Create Task successfully`)
      });
  };


  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="bgGray">
        <div className="textTODO">
          <p> Create Task</p>
        </div>

        <div className="box">
          <Form
            form={form}
            onFinish={onFinish}
            layout="horizontal"
            style={{ width: 1000, margin: -250, fontSize: 50 }}
          >
            <Row gutter={10}>
              <Col span={12}>
                <Form.Item
                  name="title"
                  value={taskData.title}
                  label="Title"
                  rules={[
                    { required: true, message: "Please input your title!" },
                  ]}
                >
                  <Input
                    placeholder="title"
                    autoFocus={false}
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="datePicker"
                  value={taskData.datePicker}
                  label="Deadline"
                >
                  <DatePicker
                    placeholder="select data"
                    rules={[{ required: false }]}
                    style={{
                      backgroundColor: "#E5E5E5",
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item name="tag" value={taskData.tag} label="Category : ">
              {/* button that can deselect */}
              <Radio.Group buttonStyle="solid" defaultValue="none">
                <Radio.Button
                  value="activity"
                  style={{
                    backgroundColor: "#9DCDE1",
                    color: "black",
                    marginLeft: "10px",
                    marginRight: "10px",
                    borderRadius: "20px",
                  }}
                >
                  Activity
                </Radio.Button>
                <Radio.Button
                  value="friend"
                  style={{
                    backgroundColor: "#F8E16B",
                    color: "black",
                    marginLeft: "10px",
                    marginRight: "10px",
                    borderRadius: "20px",
                  }}
                >
                  Friend
                </Radio.Button>
                <Radio.Button
                  value="work"
                  style={{
                    backgroundColor: "#F8C86B",
                    color: "black",
                    marginLeft: "10px",
                    marginRight: "10px",
                    borderRadius: "20px",
                  }}
                >
                  Work
                </Radio.Button>

                <Radio.Button
                  value="love and Family"
                  style={{
                    backgroundColor: "#ECC6CF",
                    color: "black",
                    marginLeft: "10px",
                    marginRight: "10px",
                    borderRadius: "20px",
                  }}
                >
                  Love and Family
                </Radio.Button>
                <Radio.Button
                  value="study"
                  style={{
                    backgroundColor: "#A4D77C",
                    color: "black",
                    marginLeft: "10px",
                    marginRight: "10px",
                    borderRadius: "20px",
                  }}
                >
                  Study
                </Radio.Button>

                {/* unselect button */}
                <Radio.Button
                  value="none"
                  style={{
                    backgroundColor: "#D99BFF",
                    color: "black",
                    marginLeft: "10px",
                    marginRight: "10px",
                    borderRadius: "20px",
                  }}
                >
                  None
                </Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="detail"
              value="detail"
              label="Note"
              rules={[{ required: false }]}
              style={{
                marginLeft: 70,
                fontSize: 100,
              }}
            >
              <TextArea
                placeholder="details"
                showCount={true}
                maxLength={200}
                style={{
                  height: 100,
                  width: 500,
                  resize: "none",
                  marginTop: 10,
                }}
                autoComplete="off"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                shape="round"
                style={{
                  width: 100,
                  backgroundColor: "#000000",
                  color: "white",
                  marginLeft: 320,
                  marginTop: -600,
                }}
                onClick={onFinish}
              >
                <PlusCircleFilled />
                Done
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
