import { FunctionComponent } from "react";
import { useRecoilState } from "recoil";
import Button from "@material-ui/core/Button";

import "./Signup.css";
import {
   emailState,
   passwordState,
} from "../recoil";
import useCleanup from "../hooks/Cleanup";
import generalFetch from "./fetch/generalfetch";
import setToken from "./utils/settoken";
import EnterText from "./EnterText";


/**
 * Sign In Page
 */
const SignIn: FunctionComponent = () => {
   const [password, setPassword] = useRecoilState(passwordState);
   const [email, setEmail] = useRecoilState(emailState);

   useCleanup<string>([setPassword, setEmail], "");

   const onClick = () => {
      generalFetch(
         "auth/signin",
         JSON.stringify({
            email: email,
            password: password,
         }),
         {
            "Content-type": "application/json; charset=UTF-8",
         },
         "POST"
      ).then((data) => setToken(data))
   }

   return (
      <div id="signUpBox">
         <EnterText
            fieldName={"Email"}
            type="text"
         />

         <EnterText
            fieldName={"Password"}
            type="password"
         />
         <div className="signupButton">
            <Button variant="contained" color="primary" onClick={onClick}>
               Sign In
            </Button>
         </div>
      </div>
   );
};;

export default SignIn;
