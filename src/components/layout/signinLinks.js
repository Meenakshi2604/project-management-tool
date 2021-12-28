import React from "react";
import { NavLink } from "react-router-dom";

const SignInLinks= () => {
    return(
        <ul className="right">
            <li><NavLink to='/create-project'>New Project</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">MN</NavLink></li>
        </ul>
    )
}

export default SignInLinks;