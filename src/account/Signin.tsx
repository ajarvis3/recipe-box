import React, { FunctionComponent } from "react";
import { useRecoilState } from "recoil";
import Button from "@material-ui/core/Button";

import "./Signup.css";
import { emailState, passwordState } from "../recoil";
import useCleanup from "../hooks/Cleanup";
import generalFetch from "./fetch/generalfetch";
import setToken from "./utils/settoken";
import EnterText from "./EnterText";
import { Redirect } from "react-router-dom";
import loginState from "../recoil/LoginState";
import { Box } from "@material-ui/core";
import useCommonStyles from "./styles";
import userIdState from "../recoil/UserId";

/**
 * Sign In Page
 */
const SignIn: FunctionComponent = () => {
   const [password, setPassword] = useRecoilState(passwordState);
   const [email, setEmail] = useRecoilState(emailState);
   const [login, setLogin] = useRecoilState(loginState);
   const [userId, setUserId] = useRecoilState(userIdState);

   const classes = useCommonStyles();

   useCleanup<string>([setPassword, setEmail], "");

   const onClick = (e: React.SyntheticEvent) => {
      e.preventDefault();
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
      response.then((value) => {
         if (typeof value === "number") {
            // do nothing
         } else if (value) {
            setLogin(true);
            setUserId(value.id);
            setToken(value);
            return <Redirect to="/" />;
         }
      });
   };

   return !login ? (
      <Box component="form" className={classes.signUpBox} onSubmit={onClick}>
         <EnterText fieldName={"Email"} type="text" />

         <EnterText fieldName={"Password"} type="password" />
         <Box component="div" className={classes.signUpButton}>
            <Button variant="contained" color="primary" type="submit">
               Sign In
            </Button>
         </Box>
      </Box>
   ) : (
      <Redirect to="/" />
   );
};

export default SignIn;
