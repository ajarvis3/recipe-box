import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
   signIn: {
      "&:hover": {
         content: '""',
         color: "black",
         transitionDuration: ".5s",
      },
      "textDecoration": "none",
      "color": "white",
      "fontSize": "2rem",
   },
});

const Home: FunctionComponent = () => {
   const classes = useStyles();
   return (
      <>
         <Typography variant='h1'>Home</Typography>

         <Link to={"/signin"} className={classes.signIn}>
            <Button variant="contained" color="primary">
               Sign In
            </Button>
         </Link>
      </>
   );
};

export default Home;
