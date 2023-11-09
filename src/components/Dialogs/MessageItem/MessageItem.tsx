import React from "react";
import s from "../Dialogs.module.css"
import {DialogMessageType} from "../Dialogs";


type MessageItemType = {
messages: DialogMessageType[]
}
export const MessageItem = (props: MessageItemType) => {

    return (
            <div className={s.messagesItems}>
                {props.messages.map(m=> {
                    return (
                        <div key={m.id}
                             className={s.message}
                        >
                            {m.message}
                        </div>
                    )
                })}
            </div>
    );
};


