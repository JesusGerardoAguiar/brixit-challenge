import React, { useEffect, useState } from "react";
import * as Services from "../services";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
const useSession = () => {
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
    Services.getUserInfo(localStorage.getItem("jwttoken") || "")
      .then((data) => {
        if (data.data.user) {
          setUserAuth({ ...data.data.user });
          if (router.pathname !== "/profile") {
            router.push("/profile");
            toast.success("Welcome Back!");
          }
        }
      })
      .catch(() => {
        router.push("/");
        toast.success("Please login again");
      });
  };
  useEffect(() => {
    if (!localStorage.getItem("jwttoken")) {
      toast.error("Please, login with your credentials again!");
      router.push("/");
    } else {
      getUserInfo();
    }
  }, []);
  return userAuth;
};

export default useSession;
