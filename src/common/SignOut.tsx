import { useSetRecoilState } from "recoil";
import loginState from "../recoil/LoginState";
import deleteToken from "./utils/deletetoken";

const SignOut = () => {
   const setLogin = useSetRecoilState(loginState);

   const onClick = () => {
      setLogin(false);
      deleteToken();
   };

   return <span onClick={onClick}>Sign out</span>;
};

export default SignOut;
