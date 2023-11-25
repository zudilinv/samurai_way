import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {MyPost} from "./MyPost/MyPost";
import s from "./Posts.module.css"
import {PostsType} from "../../../Redux/state";


type PostsPropsType = {
    posts: PostsType[]
    addPost: (title: string) => void
}

export const Posts = (props: PostsPropsType) => {
    const [messages, setMessages] = useState<PostsType[]>(props.posts)
    const [title, setTitle] = useState("")

    // const refArea = useRef<HTMLTextAreaElement>(null)
    // const onChangeRefHandler = () => {
    //     if (refArea.current) {
    //         setTitle(refArea.current.value)
    //     }
    // }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => setTitle(e.currentTarget.value)
    const addPostHandler = () => {
        if(title.length) {
            // const newMessage = {id: v1(), message: title, like: 0}
            // setMessages([newMessage, ...messages])
            props.addPost(title)
            setTitle("")
        }
    }
    const addLikesHandler = (id: string) => {
       const newLike = messages.map(m => m.id === id ? {...m, like: m.like + 1}: m)
        setMessages(newLike)

    }
    const onKeyBoardHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && e.ctrlKey ) {
           addPostHandler()
        }
    }

    return (
        <div className={s.posts}>
           <div className={s.postsItem}>
               <div>My posts</div>
               <div>
                   {/*<textarea ref={refArea}  onChange={onChangeRefHandler}/>*/}
                <textarea value={title}
                          onChange={onChangeHandler}
                          onKeyDown={onKeyBoardHandler}
                ></textarea>
               </div>
               <div>
                   <button onClick={addPostHandler}>Add Post</button>
               </div>
           </div>
            <MyPost messages={messages} addLikes={addLikesHandler}/>
        </div>
    );
};

