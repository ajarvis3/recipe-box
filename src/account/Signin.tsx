import React, { FunctionComponent } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import Button from "@material-ui/core/Button";

import "./Signup.css";
import { emailState, passwordState } from "../recoil";
import useCleanup from "../hooks/Cleanup";
import generalFetch from "./fetch/generalfetch";
import setToken from "./utils/settoken";
import EnterText from "./EnterText";
import { Redirect } from "react-router-dom";
import loginState from "../recoil/LoginState";

/**
 * Sign In Page
 */
const SignIn: FunctionComponent = () => {
   const [password, setPassword] = useRecoilState(passwordState);
   const [email, setEmail] = useRecoilState(emailState);
   const setLogin = useSetRecoilState(loginState);

   useCleanup<string>([setPassword, setEmail], "");

   const onClick = () => {
      const response = generalFetch(
         "auth/signin",
         JSON.stringify({
            email: email,
            password: password,
         }),
         {
            "Content-type": "application/json; charset=UTF-8",
         },
         "POST"
      );
      if (typeof response === "number") {
         alert(`Error ${response}`);
      } else {
         response.then((data) => {
            setLogin(true); // should be a 200 response so
            setToken(data);
            return <Redirect to="/" />;
         });
      }
   };

   return (
      <div id="signUpBox">
         <EnterText fieldName={"Email"} type="text" />

         <EnterText fieldName={"Password"} type="password" />
         <div className="signupButton">
            <Button variant="contained" color="primary" onClick={onClick}>
               Sign In
            </Button>
         </div>
      </div>
   );
};

export default SignIn;
