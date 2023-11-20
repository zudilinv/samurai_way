import React from "react";
import s from "./Header.module.css"
import {headerAvatar} from "../avatar/avatar";

type HeaderType = {

}

export const Header = (props: HeaderType) => {

    return (
        <div className={s.header}>
            <header>
                <img
                    src={headerAvatar}/>
            </header>
        </div>
    );
};

