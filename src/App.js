import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./components/content";
import {BrowserRouter, Route} from "react-router-dom";
import MessagesContainer from "./components/content/Messages/MessagesContainer";
import UsersContainer from "./components/content/Users/UsersContainer";
import ProfileContainer from "./components/content/Profile/ProfileContainer";

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Index}/>
            <Route path="/profile/:userId" component={ProfileContainer}/>
            <Route path="/messages" component={MessagesContainer}/>
            <Route path="/users" component={UsersContainer}/>
        </BrowserRouter>
    );
}

export default App;
