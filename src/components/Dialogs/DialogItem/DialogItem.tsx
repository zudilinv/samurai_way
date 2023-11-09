import React from "react";
import s from "../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {UsersType} from "../Dialogs";

type DialogItemType = {
users: UsersType[]
}
export const DialogItem = (props: DialogItemType) => {



    return (
            <div className={s.dialogsItems}>
                {props.users.map(u=> {
                    return (
                        <div className={s.dialog + " " + s.active}>
                            <NavLink to={`/dialogs/${u.id}`} activeClassName={s.active}>{u.name}</NavLink>
                        </div>
                    )
                })}
            </div>
    );
};


