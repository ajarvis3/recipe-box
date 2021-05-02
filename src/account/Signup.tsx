import React, { FunctionComponent } from "react";
import { useRecoilState } from "recoil";
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

/**
 * Sign Up Page
 */
const SignUp: FunctionComponent = () => {
   const [firstName, setFirstName] = useRecoilState(firstNameState);
   const [lastName, setLastName] = useRecoilState(lastNameState);
   const [password, setPassword] = useRecoilState(passwordState);
   const [email, setEmail] = useRecoilState(emailState);

   useCleanup<string>([setFirstName, setLastName, setPassword, setEmail], "");

   const onClick = () => {
      generalFetch(
         "users/signup",
         JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            password: password,
            email: email,
         }),
         {
            "Content-type": "application/json; charset=UTF-8",
         },
         "POST"
      );
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
