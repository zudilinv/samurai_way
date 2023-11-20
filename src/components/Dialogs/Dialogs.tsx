import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogMessageType, UsersType} from "../../Redux/state";


export type DialogsPropsType = {
    dialogsMessages: DialogMessageType[]
    users: UsersType[]
}

export const Dialogs = (props: DialogsPropsType) => {


    return (
        <div className={s.dialogs}>
            <DialogItem users={props.users}/>
            <MessageItem messages={props.dialogsMessages}/>
        </div>
    );
};


