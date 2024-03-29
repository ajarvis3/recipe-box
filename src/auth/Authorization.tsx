import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import loginState from "../recoil/LoginState";
import Home from "../home/Home";
import Dashboard from "../dashboard/Dashboard";
import authenticatedFetch from "../account/fetch/AuthenticatedFetch";
import setToken from "../account/utils/settoken";
import userIdState from "../recoil/UserId";

const Authorization = () => {
   const [login, setLogin] = useRecoilState(loginState);
   const setUserIdState = useSetRecoilState(userIdState);

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
   }, [login, setLogin, setUserIdState]);

   return <>{login ? <Dashboard /> : <Home />}</>;
};

export default Authorization;
