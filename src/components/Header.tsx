import React from "react";
import "./../styles/components/Header.scss";
import {Logo} from "./Logo";
import {useHistory} from "react-router";


const Header = () => {
    const routerHistory = useHistory();

    return (
        <header>
            <Logo onClick={() => {
                routerHistory.push('/');
            }}/>
        </header>
    );
};

export default Header;
