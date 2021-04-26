import React, {FunctionComponent} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";
import {RecoilRoot} from 'recoil';

import './App.css';

import Header from './common/Header';
import SignUp from './account/Signup';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SignIn from './account/Signin';
import { Button } from '@material-ui/core';

interface IParams {
  route: string
}

const Parameter: FunctionComponent = () => {
  let { route } = useParams<IParams>();
  return (
    <h3>
      {route}
    </h3>
  );
}

const Home: FunctionComponent = () => {
  return (
    <>
      <h1>
        Home
      </h1>

      <Link to={"/signin"}>
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
      </Link>
    </>
)
}

const App: FunctionComponent = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#01A299',
        contrastText: '#fff',
      },
      secondary: {
        main: '#6200EE',
        contrastText: '#fff',
      },
    },
  });
  
  return (
     <RecoilRoot>
        <Router>
           <ThemeProvider theme={theme}>
              <div className="App">
                 <Header />
                 <div className="content">
                    <Switch>
                       <Route path="/" exact component={Home} />
                       <Route path="/signup" exact component={SignUp} />
                       <Route path="/signin" exact component={SignIn} />
                       <Route path="/:route" component={Parameter} />
                    </Switch>
                 </div>
              </div>
           </ThemeProvider>
        </Router>
     </RecoilRoot>
  );
}

export default App;
