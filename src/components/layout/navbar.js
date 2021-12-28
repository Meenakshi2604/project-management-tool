import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./signinLinks";
import SignOutLinks from "./signoutLink";

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">ProjectPlan</Link>
                <SignInLinks/>
                <SignOutLinks/>
            </div>
        </nav>
    )
}

export default Navbar;