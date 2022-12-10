import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/hearder.js";
import "./createTask.css";
import { Form, Row, Col, Button, Input, DatePicker, Radio } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";

const CreateTask = ({ onFormSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    onFormSubmit({
      title: form.getFieldValue("title"),
      detail: form.getFieldValue("detail"),
      completed: false,
      completedAt: form.getFieldValue("date-picker")
        ? form.getFieldValue("date-picker").format("YYYY-MM-DD")
        : null,
      tag: form.getFieldValue("tag"),
      hasCompletedDate: form.getFieldValue("date-picker") ? true : false,
    });
    console.log("Received values of form: ", form.getFieldValue("title"));
    form.resetFields();
  };
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="bgGray">
        <div className="textTODO">
          <h1> My to-do list</h1>
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
                  label="Title"
                  name={"title"}
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
                <Form.Item label="Deadline" name="date-picker">
                  <DatePicker
                    placeholder="select data"
                    rules={[{ required: false }]}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name="tag" label="Category : " >
              
            </Form.Item>
          </Form>
          <div>
            <p>Category</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
