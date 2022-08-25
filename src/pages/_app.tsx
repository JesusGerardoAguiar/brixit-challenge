import "../styles/global.css";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRouter } from "next/router";
import { UserInfoContext } from "../../context";
import { useQuery } from "react-query";
import * as Services from "../services";
import useReAuth from '../hooks/useReAuth';
function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  const userAuth = useReAuth();
  
 

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
