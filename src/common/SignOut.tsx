import React from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import loginState from "../recoil/LoginState";
import userIdState from "../recoil/UserId";
import useCommonStyles from "./styles";
import deleteToken from "./utils/deletetoken";

const SignOut = () => {
   const setLogin = useSetRecoilState(loginState);
   const setUserId = useSetRecoilState(userIdState);
   const commonClasses = useCommonStyles();

   const onClick = () => {
      setLogin(false);
      setUserId("");
      deleteToken();
   };

   return (
      <Link
         to="/"
         onClick={onClick}
         className={commonClasses.signInOut + " " + commonClasses.headerLink}
      >
         Sign out
      </Link>
   );
};

export default SignOut;
