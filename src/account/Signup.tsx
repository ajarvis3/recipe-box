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

import generalFetch from "./fetch/GeneralFetch";
import useCleanup from "../hooks/Cleanup";
import EnterText from "./EnterText";
import loginState from "../recoil/LoginState";
import setToken from "./utils/settoken";
import { Navigate } from "react-router-dom";
import { Box } from "@material-ui/core";
import useCommonStyles from "./styles";
import userIdState from "../recoil/UserId";

/**
 * Sign Up Page
 */
const SignUp: FunctionComponent = () => {
   const [firstName, setFirstName] = useRecoilState(firstNameState);
   const [lastName, setLastName] = useRecoilState(lastNameState);
   const [password, setPassword] = useRecoilState(passwordState);
   const [email, setEmail] = useRecoilState(emailState);
   const [login, setLogin] = useRecoilState(loginState);
   const setUserId = useSetRecoilState(userIdState);

   const classes = useCommonStyles();

   useCleanup<string>([setFirstName, setLastName, setPassword, setEmail], "");

   const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const response = generalFetch(
         "users/signup",
         JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
         }),
         {
            "Content-type": "application/json; charset=UTF-8",
         },
         "POST"
      );
      response.then((value) => {
         if (typeof value === "number") {
            // do nothing
         } else if (value) {
            setLogin(true);
            setUserId(value.id);
            setToken(value.token);
            return <Navigate to="/" />;
         }
      });
   };

   return !login ? (
      <Box component="form" className={classes.signUpBox} onSubmit={onSubmit}>
         <EnterText fieldName={"First Name"} type="text" />
         <EnterText fieldName={"Last Name"} type="text" />
         <EnterText fieldName={"Email"} type="email" />
         <EnterText fieldName={"Password"} type="password" />
         <Box component="div" className={classes.signUpButton}>
            <Button variant="contained" color="primary" type="submit">
               Sign Up
            </Button>
         </Box>
      </Box>
   ) : (
      <Navigate to="/" />
   );
};

export default SignUp;
