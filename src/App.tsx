import {FunctionComponent} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {RecoilRoot} from 'recoil';

import './App.css';

import Header from './common/Header';
import SignUp from './account/Signup';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SignIn from './account/Signin';
import Authorization from './auth/Authorization'

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
                           <Route path="/" exact component={Authorization} />
                           <Route path="/signup" exact component={SignUp} />
                           <Route path="/signin" exact component={SignIn} />
                           {/* <Route path="/:route" component={Parameter} /> */}
                        </Switch>
                     </div>
              </div>
           </ThemeProvider>
        </Router>
     </RecoilRoot>
  );
}

export default App;
