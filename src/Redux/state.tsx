import {v1} from "uuid";

export type PostsType = {
    id: string
    message: string
    like: number
}
export type UsersType = {
    id: number
    name: string
}
export type DialogMessageType = {
    id: number
    message: string
}
export type DialogsType = {
    dialogsMessages: DialogMessageType[]
    users: UsersType[]
}
export type ProfileType = {
    posts: PostsType[]
}
export type SidebarType = {
   friends: UsersType[]
}

export type StateType = {
    dialogsPage: DialogsType
    profilePage: ProfileType
    sidebarPage: SidebarType
}

export let state: StateType = {
    dialogsPage: {
        dialogsMessages: [
            {id: 1, message: "Hi, how are you?"},
            {id: 2, message: "Yoo, yoo, hello everyone"},
            {id: 3, message: " Hello, hello, hello!"},
        ],
        users: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Victor"},
        ],
    },
    profilePage: {
        posts: [
            {id: v1(), message: "Yooo, it is my first post too", like: 0},
            {id: v1(), message: "Hi, it is my first post", like: 0},
        ]
    },
    sidebarPage: {
        friends: [
    {id: 1, name: "Sasha"},
    {id: 2, name: "Sergey"},
    {id: 3, name: "Sveta"},
],
    }
}