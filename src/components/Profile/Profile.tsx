import React from "react";
import s from "./Profile.module.css"
import {Posts} from "./Posts/Posts";

type ProfileType = {

}
export const Profile = (props: ProfileType) => {
    return (
        <div className={s.profile}>
            <div>
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkyGhl6PgqTINUL6P5sEYOedKX7XUFlAxW0TiatrlO&s"}/>
            </div>

            <div>
                avatar + descriptions

            </div>
           <Posts/>
        </div>
    );
};