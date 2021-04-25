import React, { FunctionComponent, useCallback } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import Button from "@material-ui/core/Button";

import "./Signup.css";
import generalFetch from "./fetch/generalfetch";

const emailState = atom({
   key: "emailState", // unique ID (with respect to other atoms/selectors)
   default: "", // default value (aka initial value)
});

const passwordState = atom({
   key: "passwordState",
   default: "",
});

const firstNameState = atom({
   key: "firstNameState",
   default: "",
});

const lastNameState = atom({
   key: "lastNameState",
   default: "",
});

/**
 * Used as props for text input
 */
interface TextProps {
   text: string;
   setText: (text: string) => void;
   fieldName: string;
   type: string;
}

/**
 * General Text Input
 */
const EnterText: FunctionComponent<TextProps> = (props: TextProps) => {
   const { text, setText, fieldName, type } = props;

   const changeState = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
         setText(event.target.value);
      },
      [setText]
   );

   return (
      <div className="enterText">
         <div>{fieldName}:</div>
         <input
            type={type}
            placeholder={fieldName}
            value={text}
            className="enterTextInput"
            onChange={changeState}
         />
      </div>
   );
};

/**
 * Area to enter the first name
 */
const FirstName: FunctionComponent = () => {
   const [firstName, setFirstName] = useRecoilState(firstNameState);

   return (
      <EnterText
         text={firstName}
         setText={setFirstName}
         fieldName={"First Name"}
         type="text"
      />
   );
};

/**
 * Area to enter the last name
 */
const LastName: FunctionComponent = () => {
   const [lastName, setLastName] = useRecoilState(lastNameState);

   return (
      <EnterText
         text={lastName}
         setText={setLastName}
         fieldName={"Last Name"}
         type="email"
      />
   );
};

/**
 * Area to enter the email
 */
const Email: FunctionComponent = () => {
   const [email, setEmail] = useRecoilState(emailState);

   return (
      <EnterText
         text={email}
         setText={setEmail}
         fieldName={"Email"}
         type="text"
      />
   );
};

/**
 * Area to enter the password
 */
const Password: FunctionComponent = () => {
   const [password, setPassword] = useRecoilState(passwordState);

   return (
      <EnterText
         text={password}
         setText={setPassword}
         fieldName={"Password"}
         type="password"
      />
   );
};

/**
 * Sign Up Page
 */
const SignUp: FunctionComponent = () => {
   const firstName = useRecoilValue(firstNameState);
   const lastName = useRecoilValue(lastNameState);
   const password = useRecoilValue(passwordState);
   const email = useRecoilValue(emailState);

   const onClick = () => {
     generalFetch(
       "users/signup",
       JSON.stringify({
         firstName: firstName,
         lastName: lastName,
         password: password,
         email: email,
       }),
       undefined
     );
   };

   return (
     <div id="signUpBox">
       <FirstName />
       <LastName />
       <Email />
       <Password />
       <div className="signupButton">
         <Button variant="contained" color="primary" onClick={onClick}>
           Sign Up
         </Button>
       </div>
     </div>
   );
};

export default SignUp;
