import { Form, Slider, Button, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const UserForm = () => {
  const [form] = Form.useForm();
  const [budget, setBudget] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(values);
    navigate("/foods", { state: { ...values } });
  };

  useEffect(() => {
    form.setFieldsValue({
      price: 100,
    });
  }, []);

  return (
    <div className="user-form-container">
      <h3>Choose your apetite</h3>
      <Form form={form} onFinish={handleSubmit}>
        <Switch checked={budget} onChange={() => setBudget(!budget)} />
        <Form.Item name="price" label="Budget">
          <Slider min={10} max={500} disabled={budget} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" key="submit-button">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserForm;
