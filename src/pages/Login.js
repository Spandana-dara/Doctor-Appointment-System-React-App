import React from "react";
import { Form, Input } from "antd";
import "../styles/RegisterStyles.css";
import Link from "antd/es/typography/Link";

const onFinishHandler = (values) => {
  console.log(values);
};

const Login = () => {
  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
        >
          <h1 className="text-center">Login Form</h1>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="text" required />
          </Form.Item>
          <button className="btn btn-primary register-button" type="submit">
            Login
          </button>
          <Link to="/register">Not a User? Register</Link>
        </Form>
      </div>
    </>
  );
};

export default Login;
