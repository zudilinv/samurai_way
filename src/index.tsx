import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, state} from "./Redux/state"



ReactDOM.render(
    <BrowserRouter>
        <App state={state} addMessage={addMessage} addPost={addPost}/>
    </BrowserRouter>,
  document.getElementById('root')
);