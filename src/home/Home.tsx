import { Button } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home: FunctionComponent = () => {
   return (
      <>
         <h1>Home</h1>

         <Link to={"/signin"} className="signupButton">
            <Button variant="contained" color="primary">
               Sign In
            </Button>
         </Link>
      </>
   );
};

export default Home;
