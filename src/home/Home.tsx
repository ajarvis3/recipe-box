import { Button, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home: FunctionComponent = () => {
   return (
      <>
         <Typography variant='h1'>Home</Typography>

         <Link to={"/signin"} className="signupButton">
            <Button variant="contained" color="primary">
               Sign In
            </Button>
         </Link>
      </>
   );
};

export default Home;
