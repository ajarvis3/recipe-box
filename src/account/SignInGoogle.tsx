import { GoogleLogin } from "@react-oauth/google";
import { useSetRecoilState } from "recoil";
import loginState from "../recoil/LoginState";
import userIdState from "../recoil/UserId";
import generalFetch from "./fetch/GeneralFetch";
import setToken from "./utils/settoken";

const SignInGoogle = () => {
   const setLogin = useSetRecoilState(loginState);
   const setUserId = useSetRecoilState(userIdState);

   return (
      <GoogleLogin
         nonce=""
         onSuccess={(credentialResponse) => {
            const response = generalFetch<{
               id: string;
               token: string;
            }>(
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
               if (!value.ok) {
                  console.error(value.error);
                  return;
               }

               if (value.data) {
                  setLogin(true);
                  setUserId(value.data.id);
                  setToken(value.data);
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
