import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./components/content/Profile/Profile";
import Index from "./components/content";
import {BrowserRouter, Route} from "react-router-dom";
import MessagesContainer from "./components/content/Messages/MessagesContainer";
import UsersContainer from "./components/content/Users/UsersContainer";

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Index}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/messages" component={MessagesContainer}/>
            <Route path="/users" component={UsersContainer}/>
        </BrowserRouter>
    );
}

export default App;
