import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {LogContext} from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {

    const {isLogged, setIsLogged} = useContext(LogContext);

    const logout = () => {
        setIsLogged(false);
        localStorage.removeItem('isLogged');
    }

    return (
        <div className='navbar'>
            <div className="navbar__links">
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/404">404 Page</Link>
                <MyButton onClick={logout}>Sign out</MyButton>
            </div>
        </div>
    );
};

export default Navbar;