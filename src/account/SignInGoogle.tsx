import { GoogleLogin } from "@react-oauth/google";

const SignInGoogle = () => (
   <GoogleLogin
      nonce=""
      native_login_uri="http://localhost:8080/auth"
      onSuccess={(credentialResponse) => {
         console.log(credentialResponse);
      }}
      onError={() => {
         console.log("Login Failed");
      }}
   />
);

export default SignInGoogle;
