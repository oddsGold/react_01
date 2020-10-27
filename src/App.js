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
            <div className="wrapper">
                <div className="container">
                    <Header/>

                    <div className="wrapper-row">

                        <LeftNavbar/>

                        <div className="content">
                            <Route path="/Profile" component={Profile}/>
                            <Route path="/Messages" component={Messages}/>
                        </div>

                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
