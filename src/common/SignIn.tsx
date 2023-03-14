import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import useCommonStyles from "./styles";

const SignIn: FunctionComponent = () => {
   const commonClasses = useCommonStyles();

   return (
      <Link
         to={"/signup"}
         className={commonClasses.headerLink + " " + commonClasses.signInOut}
      >
         Sign Up
      </Link>
   );
};

export default SignIn;
