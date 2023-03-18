import { GoogleLogin } from "@react-oauth/google";
import { Navigate } from "react-router";
import { useRecoilState, useSetRecoilState } from "recoil";
import loginState from "../recoil/LoginState";
import userIdState from "../recoil/UserId";
import generalFetch from "./fetch/GeneralFetch";
import setToken from "./utils/settoken";

const SignInGoogle = () => {
   const [login, setLogin] = useRecoilState(loginState);
   const setUserId = useSetRecoilState(userIdState);

   return (
      <GoogleLogin
         nonce=""
         onSuccess={(credentialResponse) => {
            const response = generalFetch(
               "auth/oauth",
               JSON.stringify({
                  credential: credentialResponse.credential,
                  clientId: credentialResponse.clientId,
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
                  return <Navigate to="/" />;
               }
            });
         }}
         onError={() => {
            console.log("Login Failed");
         }}
      />
   );
};

export default SignInGoogle;
