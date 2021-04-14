import React, { FunctionComponent } from 'react';
import './Header.css';

import { Link, Switch, Route } from "react-router-dom";  

/**
 * Header Function Component
 * App name, whatever
 */
const Header: FunctionComponent = () => {
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
                        <Route path="/" exact>
                            <Link to={"/signup"} className="headerLink">
                                Sign Up
                            </Link>
                        </Route>
                    </Switch>
                </h3>
            </span>    
        </div>
    )
}

export default Header;