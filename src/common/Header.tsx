import React, { FunctionComponent } from "react";

import { Link, Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import loginState from "../recoil/LoginState";
import SignOut from "./SignOut";
import { Box, makeStyles, Typography } from "@material-ui/core";
import useCommonStyles from "./styles";
import SignIn from "./SignIn";
import SignInGoogle from "../account/SignInGoogle";

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
      margin: 0,
   },
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
               {!login && <SignInGoogle />}
               <Routes>
                  {!login ? (
                     <Route path="/" element={<SignIn />} />
                  ) : (
                     <Route path="/" element={<SignOut />} />
                  )}
               </Routes>
            </Typography>
         </Box>
      </Box>
   );
};

export default Header;
