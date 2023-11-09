import React from "react";
import s from "./MyPost.module.css"
import {MessagesType} from "../Posts";

type MyPostType = {
    messages: MessagesType[]
    addLikes: (id: string) => void

}
export const MyPost = (props: MyPostType) => {

    return (
        <div className={s.item}>
            <div>New post</div>

            <span  className={s.item_post}>
                {props.messages.map((m)=>{
                    const addLikesHandler = () => {
                        props.addLikes(m.id)
                    }


                    return (
                        <div key={m.id}>
                            <img
                                src={"https://media.printables.com/media/prints/325160/images/2802634_a592e19c-fe39-4da1-8f09-90dfe67ac06b/thumbs/inside/1280x960/jpg/mighty-ducks.webp"}/>
                            {m.message}
                            <div className={s.like}>
                                <img onClick={addLikesHandler}
                                     src={"https://t3.ftcdn.net/jpg/00/19/89/58/360_F_19895879_uZ0tHguWowgKxb7jgUzuJk7IdXJCYZkI.jpg"}/>
                                {m.like}
                            </div>
                        </div>
                    )
                })}
            </span>

        </div>
    );
};

