import React, { useEffect, useState } from "react";
import * as Services from "../services";
import { useRouter } from "next/router";
const useReAuth = () => {
  const router = useRouter();
  const [userAuth, setUserAuth] = useState({
    id: "",
    avatar: "",
    age: 0,
    email: "",
    name: "",
    role: "admin",
    surname: "",
  });
  const getUserInfo = async () => {
    Services.getUserInfo(localStorage.getItem("jwttoken") || "").then(
      (data) => {
        if (data.data.user) {
          setUserAuth({ ...data.data.user });
          router.push("/profile");
        }
      }
    );
  };
  useEffect(() => {
    console.log("once");
    if (!localStorage.getItem("jwttoken")) {
      router.push("/");
    } else {
      getUserInfo();
    }
  }, []);
  return userAuth;
};

export default useReAuth