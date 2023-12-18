import React from "react";
import { Form, Input } from "antd";
import "../styles/RegisterStyles.css";
import Link from "antd/es/typography/Link";

const onFinishHandler = (values) => {
  console.log(values);
};

const Register = () => {
  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
        >
          <h1 className="text-center">Register Form</h1>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="text" required />
          </Form.Item>
          <button className="btn btn-primary register-button" type="submit">
            Register
          </button>
          <Link to="/login">Already User? Login here</Link>
        </Form>
      </div>
    </>
  );
};

export default Register;
