import React from "react";
import s from "./Sidebar.module.css"
import {SidebarType} from "../../Redux/state";

type SidebarPropsType = {
    sidebar: SidebarType
}
export const Sidebar = (props: SidebarPropsType) => {

    const sidebarList = ( <div className={s.itemBar}>
        {props.sidebar.friends.map(f=> {
            return (
                <div key={f.id}>
                    <div className={s.spanItemBar}></div>
                    <div className={s.friends}>{f.name}</div>
                </div>
            )
        })}
    </div> )

    return (
        <div className={s.sidebar}>
            Friends
            {sidebarList}
        </div>
    );
};

