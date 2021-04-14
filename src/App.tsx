import React, {FunctionComponent} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import {RecoilRoot} from 'recoil';

import './App.css';

import Header from './common/Header';
import SignUp from './account/Signup';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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
    <h1>
      Home
    </h1>
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
            <Header rightThing={"Sign Up"} />
            <div className="content">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={SignUp} />
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
