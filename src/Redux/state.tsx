import {v1} from "uuid";

export type PostsType = {
    id: string
    message: string
    like: number
}
export type UsersType = {
    id: string
    name: string
}
export type DialogMessageType = {
    id: string
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
    sidebar: SidebarType
}

export let state: StateType = {
    dialogsPage: {
        dialogsMessages: [
            {id: v1(), message: "Hi, how are you?"},
            {id: v1(), message: "Yoo, yoo, hello everyone"},
            {id: v1(), message: " Hello, hello, hello!"},
        ],
        users: [
            {id: v1(), name: "Dimych"},
            {id: v1(), name: "Andrew"},
            {id: v1(), name: "Victor"},
        ],
    },
    profilePage: {
        posts: [
            {id: v1(), message: "Yooo, it is my first post too", like: 5},
            {id: v1(), message: "Hi, it is my first post", like: 10},
        ]
    },
    sidebar: {
        friends: [
            {id: v1(), name: "Sasha"},
            {id: v1(), name: "Sergey"},
            {id: v1(), name: "Sveta"},
        ],
    }
}
export const addMessage = (title: string) => {
    const newMessage = {id: v1(), message: title}
    state.dialogsPage.dialogsMessages.unshift(newMessage)
}
export const addPost = (title: string) => {
    const newMessage = {id: v1(), message: title, like: 0}
    state.profilePage.posts.unshift(newMessage)
}