import React, { useEffect, useState } from "react";
import { Container, Background } from "./style";
import Sidebar from "./Sidebar";
import { useQuery } from "react-query";
import * as Services from "../../services";
import { useRouter } from "next/router"

const Login = () => {
  const [loginFormData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();
  const handleUpdateLoginForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const { isSuccess, data, isLoading, isError, refetch, error } = useQuery(
    ["authUser"],
    () => Services.login(loginFormData),
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if(isSuccess){
      localStorage.setItem('jwttoken', data.data.jwt);

      router.push("/profile")
    }
  },[isSuccess, data])

  const handleLogin = () => {
    refetch();
  };
  console.log(isError)
  return (
    <Container>
      <Sidebar
        loginFormData={loginFormData}
        handleUpdate={handleUpdateLoginForm}
        handleLogin={handleLogin}
        isLoading={isLoading}
        isError={isError}
        error={error?.response?.data.message}
      />
      <Background />
    </Container>
  );
};

export default Login;
