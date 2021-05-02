import React, { FunctionComponent } from 'react';
import './Header.css';

import { Link, Switch, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import loginState from "../recoil/LoginState";
import SignOut from './SignOut';
  

/**
 * Header Function Component
 * App name, whatever
 */
const Header: FunctionComponent = () => {
    const login = useRecoilValue(loginState);

    return (
        <div className="header">
            <span className="headerItemWrapper">
                <h1 className="appName">
                    <Link to="/" className="headerLink">
                        Recipe Box
                    </Link>
                </h1>
            </span>
            <span className="headerItemWrapper">
                <h3 className="headerRightSide">
                    <Switch>
                        {!login ? 
                            <Route path="/" exact>
                                <Link to={"/signup"} className="headerLink">
                                    Sign Up
                                </Link>
                            </Route>
                            : <SignOut />
                        }
                    </Switch>
                </h3>
            </span>    
        </div>
    )
}

export default Header;