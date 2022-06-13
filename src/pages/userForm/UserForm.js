import React, { useEffect } from "react";
import "./index.scss";
import { Button, Checkbox, Form, Slider } from "antd";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const tooltipsPrice = (value) => `${value} $`;
  const tooltipsNutri = (value) => `${value} calo`;
  const handleSubmit = (values) => {
    console.log(values);
    navigate("/foods", { state: { ...values } });
  };

  useEffect(() => {
    form.setFieldsValue({
      budget: 100,
      nutricheck: false,
      nutrition: 200,
    });
  }, []);

  return (
    <div className="container">
      <div className="form-container">
        <h1>Decide What to Eat</h1>
        <Form
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={handleSubmit}
        >
          <Form.Item label="budget" name="budget">
            <Slider
              tipFormatter={tooltipsPrice}
              min={50}
              max={500}
              key="price-slider"
            />
          </Form.Item>
          <Form.Item
            label="nutricheck"
            name="nutricheck"
            valuePropName="checked"
          >
            <Checkbox name="nutricheck" />
          </Form.Item>
          <Form.Item label="nutrition" name="nutrition">
            <Slider
              tipFormatter={tooltipsNutri}
              min={100}
              max={1000}
              key="nutrition-slider"
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" key="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
