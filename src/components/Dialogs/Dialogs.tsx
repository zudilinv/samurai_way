import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogMessageType, UsersType} from "../../Redux/state";


export type DialogsPropsType = {
    dialogsMessages: DialogMessageType[]
    users: UsersType[]
    addMessage: (title: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    // const [dialogsMessages, setDialogsMessages] = useState<DialogMessageType[]>(props.messages)
    const [title, setTitle] = useState("")

    const addMessageHandler = () => {
        if (title.length) {
            // const newMessage = {id: v1(), message: title}
            // setDialogsMessages([newMessage, ...dialogsMessages])
            props.addMessage(title)
            setTitle("")
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => setTitle(e.currentTarget.value)
    const onKeyBoardHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && e.ctrlKey) {
            addMessageHandler()
        }
    }

    return (
        <div>
            <div>
                <div>
                    <textarea
                        value={title}
                        onChange={onChangeHandler}
                        onKeyDown={onKeyBoardHandler}
                    />
                </div>
                <div>
                    <button onClick={addMessageHandler}>Add Message</button>
                </div>
            </div>
            <div className={s.dialogs}>
                <DialogItem users={props.users}/>
                <MessageItem messages={props.dialogsMessages}/>
            </div>
        </div>
    );
};


