import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";


type DialogsType = {

}
export type UsersType = {
    id: number
    name: string
}
export type DialogMessageType = {
    id: number
    message: string
}
export const Dialogs = (props: DialogsType) => {

    const messages: DialogMessageType[] = [
        {id: 1, message: "Hi, how are you?"},
        {id: 2, message: "Yoo, yoo, hello everyone"},
        {id: 3, message: " Hello, hello, hello!"},
    ]
    const users: UsersType[] = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Victor"},
    ]

    return (
        <div className={s.dialogs}>
           <DialogItem users={users}/>
           <MessageItem messages={messages}/>
        </div>
    );
};


