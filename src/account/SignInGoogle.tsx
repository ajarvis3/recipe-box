import { GoogleLogin } from "@react-oauth/google";
import generalFetch from "./fetch/GeneralFetch";

const SignInGoogle = () => (
   <GoogleLogin
      nonce=""
      onSuccess={(credentialResponse) => {
         generalFetch(
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
         console.log(
            JSON.stringify({
               credential: credentialResponse.credential,
               clientId: credentialResponse.clientId,
            })
         );
      }}
      onError={() => {
         console.log("Login Failed");
      }}
   />
);

export default SignInGoogle;
