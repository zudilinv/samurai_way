import React from "react";
import s from "../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {UsersType} from "../../../Redux/state";
import {dialogAvatar} from "../../avatar/avatar";


type DialogItemType = {
users: UsersType[]
}
export const DialogItem = (props: DialogItemType) => {

    const dialogsList = props.users.map(u=> {
        return (
            <div key={u.id}
                className={s.dialog + " " + s.active}>
                <NavLink to={`/dialogs/${u.id}`} activeClassName={s.active}>
                    {
                        <div className={s.names}>
                           <img src={dialogAvatar}/>
                            <span>{u.name}</span>
                        </div>
                    }</NavLink>
            </div>
        )
    })

    return (
            <div className={s.dialogsItems}>
                {dialogsList}
            </div>
    );
};


