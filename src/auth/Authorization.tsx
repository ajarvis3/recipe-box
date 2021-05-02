import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import loginState from "../recoil/LoginState";
import IAuthProps from "./types/AuthProps";
import Home from "../home/Home";
import Dashboard from "../dashboard/Dashboard";
import authenticatedFetch from "../account/fetch/authenticatedfetch";
import setToken from "../account/utils/settoken";

const Authorization = (props: IAuthProps) => {
   const [login, setLogin] = useRecoilState(loginState);

   useEffect(() => {
      const response = authenticatedFetch(
         "auth/verify",
         JSON.stringify({}),
         "POST"
      );
      response.then((value) => {
         if (typeof value === "number") {
            setLogin(false);
         } else {
            setLogin(true);
            setToken(value);
         }   
      })
      // auth, check if logged in blah blah blah
      //   setLogin(true);
   }, [login, setLogin]);

   return <>{login ? <Dashboard /> : <Home />}</>;
};

export default Authorization;
