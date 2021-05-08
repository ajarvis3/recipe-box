import React, { FunctionComponent } from 'react';

import { Link, Switch, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import loginState from "../recoil/LoginState";
import SignOut from './SignOut';
import { Box, makeStyles, Typography } from "@material-ui/core";
import useCommonStyles from "./styles";

const useStyles = makeStyles({
   title: {
      fontSize: "3rem",
      left: 0,
      margin: 0,
   },
   header: {
      width: "100%",
      margin: 0,
      backgroundColor: "#01A299",
      color: "white",
      padding: 0,
      display: "flex",
      flexDirection: "row",
   },
   headerItemWrapper: {
      width: "50%",
      padding: "10px",
  },
  headerRightSide: {
      float: "right",
      margin: 0
   }
  
}); 
  

/**
 * Header Function Component
 * App name, whatever
 */
const Header: FunctionComponent = () => {
    const login = useRecoilValue(loginState);
    const classes = useStyles();
    const commonClasses = useCommonStyles();

    return (
       <Box component="div" className={classes.header}>
          <Box component="span" className={classes.headerItemWrapper}>
             <Typography variant="h1" className={classes.title}>
                <Link to="/" className={commonClasses.headerLink}>
                   Recipe Box
                </Link>
             </Typography>
          </Box>
          <Box component="span" className={classes.headerItemWrapper}>
             <Typography variant="h3" className={classes.headerRightSide}>
                <Switch>
                   {!login ? (
                      <Route path="/" exact>
                         <Link to={"/signup"} className={commonClasses.headerLink + " " + commonClasses.signInOut}>
                            Sign Up
                         </Link>
                      </Route>
                   ) : (
                      <SignOut />
                   )}
                </Switch>
             </Typography>
          </Box>
       </Box>
    );
}

export default Header;