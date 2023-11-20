import React from "react";
import s from "../Profile.module.css"
import {beachBackgroundAvatar} from "../../avatar/avatar";


type ProfileInfoType = {

}
export const ProfileInfo = (props: ProfileInfoType) => {

    return (
        <div className={s.profileInfo}>
            <div>
                <img
                    src={beachBackgroundAvatar}/>
            </div>

            <div className={s.profileItem}>
                avatar + descriptions

            </div>
        </div>
    );
};