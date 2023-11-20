import React from "react";
import s from "./Sidebar.module.css"
import {SidebarType} from "../../Redux/state";

type SidebarPropsType = {
    sidebarPage: SidebarType
}
export const Sidebar = (props: SidebarPropsType) => {
    return (
        <div className={s.sidebar}>
            Friends
            <div className={s.itemBar}>
                {props.sidebarPage.friends.map(f=> {
                    return (
                    <div key={f.id}>
                        <div className={s.spanItemBar}></div>
                        <div className={s.friends}>{f.name}</div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
};

