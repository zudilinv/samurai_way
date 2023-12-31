import React from "react";
import "./App.css"
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {StateType} from "./Redux/state";

export type AppType = {
    state: StateType
    addMessage: (title: string) => void
    addPost: (title: string) => void
}
function App(props: AppType) {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar sidebar={props.state.sidebar}/>
            <div className={"app-wrapper-content"}>
                <Route path={"/profile"}
                       render={()=> <Profile posts={props.state.profilePage.posts} addPost={props.addPost}/>}
                />
                <Route path={"/dialogs"}
                       render={()=> <Dialogs users={props.state.dialogsPage.users}
                    dialogsMessages={props.state.dialogsPage.dialogsMessages}
                                             addMessage={props.addMessage}
                       />}
                />
                <Route path={"/music"} component={Music} />
                <Route path={"/news"} component={News} />
                <Route path={"/settings"} component={Settings} />
            </div>
        </div>
    );
}

export default App;
