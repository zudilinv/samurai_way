import React from "react";
import s from "./Profile.module.css"
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../Redux/state";



type ProfilePropsType = {
    posts: PostsType[]
}
export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.profile}>
           <ProfileInfo/>
           <Posts posts={props.posts}/>
        </div>
    );
};