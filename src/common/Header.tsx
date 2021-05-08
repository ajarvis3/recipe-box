import React, { FunctionComponent } from 'react';
import './Header.css';

import { Link, Switch, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import loginState from "../recoil/LoginState";
import SignOut from './SignOut';
import { Box, Typography } from '@material-ui/core';
  

/**
 * Header Function Component
 * App name, whatever
 */
const Header: FunctionComponent = () => {
    const login = useRecoilValue(loginState);

    return (
        <Box component='div' className="header">
            <Box component='span' className="headerItemWrapper">
                <Typography variant='h1' className="appName">
                    <Link to="/" className="headerLink">
                        Recipe Box
                    </Link>
                </Typography>
            </Box>
            <Box component='span' className="headerItemWrapper">
                <Typography variant='h3' className="headerRightSide">
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
                </Typography>
            </Box>    
        </Box>
    )
}

export default Header;