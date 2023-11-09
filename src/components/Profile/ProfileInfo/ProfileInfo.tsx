import React from "react";
import s from "../Profile.module.css"


type ProfileInfoType = {

}
export const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkyGhl6PgqTINUL6P5sEYOedKX7XUFlAxW0TiatrlO&s"}/>
            </div>

            <div className={s.profileItem}>
                avatar + descriptions

            </div>
        </div>
    );
};