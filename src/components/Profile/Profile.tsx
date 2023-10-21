import React from "react";
import s from "./Profile.module.css"
import {Posts} from "./Posts/Posts";

export const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkyGhl6PgqTINUL6P5sEYOedKX7XUFlAxW0TiatrlO&s"}/>
            </div>

            <div>
                avatar + descriptions
                {/*<img*/}
                {/*    src={"https://media.printables.com/media/prints/325160/images/2802634_a592e19c-fe39-4da1-8f09-90dfe67ac06b/thumbs/inside/1280x960/jpg/mighty-ducks.webp"}/>*/}
            </div>
           <Posts/>
        </div>
    );
};