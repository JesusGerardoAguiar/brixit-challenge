import React, { useState } from "react";
import { Container, Background } from "./style";
import Sidebar from "./Sidebar";
import { useQuery } from "react-query";
import * as Services from "../../services";

const Login = () => {
  const [loginFormData, setFormData] = useState({ email: "", password: "" });

  const handleUpdateLoginForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const { isSuccess, data, isLoading, isError, refetch } = useQuery(
    ["authUser"],
    () => Services.login(loginFormData),
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );

  const handleLogin = () => {
    refetch();
  };

  return (
    <Container>
      <Sidebar
        loginFormData={loginFormData}
        handleUpdate={handleUpdateLoginForm}
        handleLogin={handleLogin}
        isLoading={isLoading}
      />
      <Background />
    </Container>
  );
};

export default Login;
