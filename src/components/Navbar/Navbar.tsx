import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {Sidebar} from "../Sidebar/Sidebar";
import {SidebarType} from "../../Redux/state";


type NavbarPropsType = {
    sidebarPage: SidebarType
}
export const Navbar = (props: NavbarPropsType) => {
    return (
            <nav className={s.navbar}>
                <div className={s.item}><NavLink to={"/profile"} activeClassName={s.active}>Profile</NavLink></div>
                <div className={s.item}><NavLink to={"/dialogs"} activeClassName={s.active}>Messages</NavLink></div>
                <div className={s.item}><NavLink to={"/music"} activeClassName={s.active}>Music</NavLink></div>
                <div className={s.item}><NavLink to={"/news"} activeClassName={s.active}>News</NavLink></div>
                <div className={s.item}><a href={"/settings"}>Settings</a></div>
               <Sidebar sidebarPage={props.sidebarPage}/>
            </nav>
    );

};

