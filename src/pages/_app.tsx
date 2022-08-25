import "../styles/global.css";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRouter } from "next/router";
import { UserInfoContext } from "../../context";
import { useQuery } from "react-query";
import * as Services from "../services";
function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  const [userAuth, setUserAuth] = useState({
    id: "",
    avatar: "",
    age: 0,
    email: "",
    name: "",
    role: "admin",
    surname: "",
  });
  const router = useRouter();
  
 

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

  // useEffect(() => {},[isSuccess, data])
  return (
    <QueryClientProvider client={queryClient}>
      <UserInfoContext.Provider value={{ ...userAuth }}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </UserInfoContext.Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
