import React from "react";
import {Post} from "./Post/Post";

export const Posts = () => {
    return (
        <div className={"post"}>
            My posts
            <div>New post</div>
            <Post/>
        </div>
    );
};

