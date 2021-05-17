import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import loginState from "../recoil/LoginState";
import IAuthProps from "./types/AuthProps";
import Home from "../home/Home";
import Dashboard from "../dashboard/Dashboard";
import authenticatedFetch from "../account/fetch/authenticatedfetch";
import setToken from "../account/utils/settoken";
import userIdState from "../recoil/UserId";

const Authorization = (props: IAuthProps) => {
   const [login, setLogin] = useRecoilState(loginState);
   const [userId, setUserIdState] = useRecoilState(userIdState);

   useEffect(() => {
      const response = authenticatedFetch(
         "auth/verify",
         JSON.stringify({}),
         "POST"
      );
      response.then((value) => {
         if (typeof value === "number") {
            setLogin(false);
         } else if (value) {
            setLogin(true);
            setToken(value.token);
            setUserIdState(value.id);
         }
      });
      // auth, check if logged in blah blah blah
      //   setLogin(true);
   }, [login, setLogin]);

   return <>{login ? <Dashboard /> : <Home />}</>;
};

export default Authorization;
