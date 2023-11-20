import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {MyPost} from "./MyPost/MyPost";
import s from "./Posts.module.css"
import {v1} from "uuid"
import {PostsType} from "../../../Redux/state";


type PostsPropsType = {
    posts: PostsType[]
}

export const Posts = (props: PostsPropsType) => {
    const [messages, setMessages] = useState<PostsType[]>(props.posts)
    const [title, setTitle] = useState("")


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onClickHandler = () => {
        if(title.length) {
            const newMessage = {id: v1(), message: title, like: 0}
            setMessages([newMessage, ...messages])
            setTitle("")
        }
    }
    const addLikes = (id: string) => {
       const newLike = messages.map(m => m.id === id ? {...m, like: m.like + 1}: m)
        setMessages(newLike)
    }
    const onKeyBoardHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && e.shiftKey ) {
           onClickHandler()
        }
    }

    return (
        <div className={s.posts}>
           <div className={s.postsItem}>
               <div>My posts</div>
               <div>
                <textarea value={title}
                          onChange={onChangeHandler}
                          onKeyDown={onKeyBoardHandler}
                ></textarea>
               </div>
               <div>
                   <button onClick={onClickHandler}>Add Post</button>
               </div>
           </div>
            <MyPost messages={messages} addLikes={addLikes}/>
        </div>
    );
};

