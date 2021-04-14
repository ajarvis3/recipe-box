import React, { FunctionComponent } from 'react';
import './Header.css';

import { Link } from "react-router-dom";  

/**
 * Child Props
 * Will have to change type when I use icons
 */
interface ChildProps {
    rightThing: string
}

/**
 * Header Function Component
 * App name, whatever
 */
const Header: FunctionComponent<ChildProps> = (props: ChildProps) => {
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
                    <Link to={"/signup"} className="headerLink">
                        {props.rightThing}
                    </Link>
                </h3>
            </span>    
        </div>
    )
}

export default Header;