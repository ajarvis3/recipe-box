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
      const response = authenticatedFetch<{
         id: string;
         token: string;
      }>(
         "auth/verify",
         JSON.stringify({}),
         "POST"
      );
      response.then((value) => {
         if (!value.ok || !value.data) {
            setLogin(false);
         } else {
            setLogin(true);
            setToken(value.data);
            setUserIdState(value.data.id);
         }
      });
      // auth, check if logged in blah blah blah
      //   setLogin(true);
   }, [login, setLogin, setUserIdState]);

   return <>{login ? <Dashboard /> : <Home />}</>;
};

export default Authorization;
