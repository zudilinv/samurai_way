import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

type NavbarType = {

}
export const Navbar = (props: NavbarType) => {
    return (
            <nav className={s.navbar}>
                <div className={s.item}><NavLink to={"/profile"} activeClassName={s.active}>Profile</NavLink></div>
                <div className={s.item}><NavLink to={"/dialogs"} activeClassName={s.active}>Messages</NavLink></div>
                <div className={s.item}><NavLink to={"/music"} activeClassName={s.active}>Music</NavLink></div>
                <div className={s.item}><NavLink to={"/news"} activeClassName={s.active}>News</NavLink></div>
                <div className={s.item}><a href={"/settings"}>Settings</a></div>
            </nav>
    );

};

