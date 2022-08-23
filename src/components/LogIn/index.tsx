import React, { useState } from "react";
import { Container, Background } from "./style";
import Sidebar from "./Sidebar";

const Login = () => {
  const [loginFormData, setFormData] = useState({ email: "", password: "" });

  const handleUpdateLoginForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Sidebar
        loginFormData={loginFormData}
        handleUpdate={handleUpdateLoginForm}
      />
      <Background />
    </Container>
  );
};

export default Login;
