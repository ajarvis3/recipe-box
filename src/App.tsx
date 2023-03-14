import { FunctionComponent } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Header from "./common/Header";
import SignUp from "./account/Signup";

import {
   createTheme,
   makeStyles,
   ThemeProvider,
} from "@material-ui/core/styles";
import SignIn from "./account/Signin";
import Authorization from "./auth/Authorization";

const useStyles = makeStyles({
   App: {
      height: "100vh",
      padding: 0,
   },
   content: {
      height: "100%",
      marginTop: "20px",
   },
});

const App: FunctionComponent = () => {
   const theme = createTheme({
      palette: {
         primary: {
            main: "#01A299",
            contrastText: "#fff",
         },
         secondary: {
            main: "#6200EE",
            contrastText: "#fff",
         },
      },
      typography: {
         fontFamily: ['"Noto Sans"', "Roboto", "serif"].join(","),
      },
   });

   const classes = useStyles();

   return (
      <RecoilRoot>
         <Router>
            <ThemeProvider theme={theme}>
               <div className={classes.App}>
                  <Header />
                  <div className={classes.content}>
                     <Routes>
                        <Route path="/" element={<Authorization />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/signin" element={<SignIn />} />
                     </Routes>
                  </div>
               </div>
            </ThemeProvider>
         </Router>
      </RecoilRoot>
   );
};

export default App;
