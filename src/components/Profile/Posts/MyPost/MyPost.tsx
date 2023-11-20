import React from "react";
import s from "./MyPost.module.css"
import {profileAvatar, heartLikeAvatar} from "../../../avatar/avatar";
import {PostsType} from "../../../../Redux/state";



type MyPostType = {
    messages: PostsType[]
    addLikes: (id: string) => void
}
export const MyPost = (props: MyPostType) => {

    const messagesList = props.messages.map((m)=>{
        const addLikesHandler = () => props.addLikes(m.id)

        return (
            <div key={m.id}>
                <img
                    src={profileAvatar}/>
                {m.message}
                <div className={s.like}>
                    <img onClick={addLikesHandler}
                         src={heartLikeAvatar}/>
                    {m.like}
                </div>
            </div>
        )
    })


    return (
        <div className={s.item}>

            <div>New post</div>

            <span  className={s.item_post}>
                {messagesList}
            </span>

        </div>
    );
};

