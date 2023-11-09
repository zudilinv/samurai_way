import React from "react";
import s from "./Profile.module.css"
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfileType = {

}
export const Profile = (props: ProfileType) => {
    return (
        <div className={s.profile}>
           <ProfileInfo/>
           <Posts/>
        </div>
    );
};