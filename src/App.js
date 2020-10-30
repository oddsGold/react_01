import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/sections/Header";
import LeftNavbar from "./components/sections/LeftNavbar";
import Profile from "./components/content/Profile/Profile";
import Messages from "./components/content/Messages/Messages";
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Route path="/profile" component={Profile}/>
            <Route path="/messages" component={Messages}/>
        </BrowserRouter>
    );
}

export default App;
