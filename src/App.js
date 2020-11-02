import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./components/content/Profile/Profile";
import Messages from "./components/content/Messages/Messages";
import Index from "./components/content";
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Index}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/messages" component={Messages}/>
        </BrowserRouter>
    );
}

export default App;
