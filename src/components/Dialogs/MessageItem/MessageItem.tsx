import React from "react";
import s from "../Dialogs.module.css"
import {DialogMessageType} from "../../../Redux/state";


type MessageItemType = {
messages: DialogMessageType[]
}
export const MessageItem = (props: MessageItemType) => {

    const messagesItemList = props.messages.map(m=> {
        return (
            <div key={m.id}
                 className={s.message}
            >
                {m.message}
            </div>
        )
    })

    return (
            <div className={s.messagesItems}>
                {messagesItemList}
            </div>
    );
};


