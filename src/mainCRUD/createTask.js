import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/hearder.js";
import "./createTask.css";
import { Form, Row, Col, Button, Input, DatePicker} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { PlusCircleFilled } from "@ant-design/icons";

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
          <p> My to-do list</p>
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
                    style={{
                      backgroundColor: "#E5E5E5",
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item name="tag" label="Category : ">
              <Button
                type="primary"
                shape="round"
                style={{
                  backgroundColor: "#9DCDE1",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                Activity
              </Button>
              <Button
                type="primary"
                shape="round"
                style={{
                  backgroundColor: "#F8E16B",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                Friend
              </Button>
              <Button
                type="primary"
                shape="round"
                style={{
                  backgroundColor: "#F8C86B",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                Work
              </Button>
              <Button
                type="primary"
                shape="round"
                style={{
                  backgroundColor: "#ECC6CF",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                Love and Family
              </Button>
              <Button
                type="primary"
                shape="round"
                style={{
                  backgroundColor: "#A4D77C",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                Study
              </Button>
              <Button
                type="primary"
                shape="round"
                style={{
                  backgroundColor: "#D99BFF",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                None
              </Button>
            </Form.Item>

            <Form.Item
              label="Note"
              name={"detail"}
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
                }}
                autoComplete="off"
              />
              <Button
                type="primary"
                htmlType="submit"
                block
                shape="round"
                style={{
                  width: 100,
                  backgroundColor: "#000000",
                  color: "white",
                  marginLeft: 200,
                  marginTop: 25,
                }}
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
