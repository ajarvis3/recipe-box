import React, { FunctionComponent } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import Button from "@material-ui/core/Button";

import "./Signup.css";
import {
   emailState,
   firstNameState,
   lastNameState,
   passwordState,
} from "../recoil";

import generalFetch from "./fetch/generalfetch";
import useCleanup from "../hooks/Cleanup";
import EnterText from "./EnterText";
import loginState from "../recoil/LoginState";
import setToken from "./utils/settoken";
import { Redirect } from "react-router-dom";

/**
 * Sign Up Page
 */
const SignUp: FunctionComponent = () => {
   const setFirstName = useSetRecoilState(firstNameState);
   const setLastName = useSetRecoilState(lastNameState);
   const [password, setPassword] = useRecoilState(passwordState);
   const [email, setEmail] = useRecoilState(emailState);
   const setLogin = useSetRecoilState(loginState);

   useCleanup<string>([setFirstName, setLastName, setPassword, setEmail], "");

   const onClick = () => {
      const response = generalFetch(
         "users/signup",
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
         <EnterText fieldName={"First Name"} type="text" />
         <EnterText fieldName={"Last Name"} type="email" />
         <EnterText fieldName={"Email"} type="text" />
         <EnterText fieldName={"Password"} type="password" />
         <div className="signupButton">
            <Button variant="contained" color="primary" onClick={onClick}>
               Sign Up
            </Button>
         </div>
      </div>
   );
};

export default SignUp;
