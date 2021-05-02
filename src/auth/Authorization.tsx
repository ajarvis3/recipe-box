import { useEffect } from "react";
import { useRecoilState } from "recoil";
import loginState from "../recoil/LoginState";
import IAuthProps from "./types/AuthProps";
import Home from "../home/Home";
import Dashboard from "../dashboard/Dashboard";

const Authorization = (props: IAuthProps) => {
   const [login, setLogin] = useRecoilState(loginState);

   useEffect(() => {
      // auth, check if logged in blah blah blah
      //   setLogin(true);
   }, [login, setLogin]);

   return <>{login ? <Dashboard /> : <Home />}</>;
};

export default Authorization;
