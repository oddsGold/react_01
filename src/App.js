import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./components/content";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MessagesContainer from "./components/content/Messages/MessagesContainer";
import UsersContainer from "./components/content/Users/UsersContainer";
import ProfileContainer from "./components/content/Profile/ProfileContainer";
import AuthForm from "./components/content/AuthForm";

function App() {
    return (
        <Router>
            <Route exact path="/" component={Index}/>
            <Route exact path="/login" component={AuthForm}/>
            <Route path='/profile/:userId?' component={ProfileContainer}/>
            <Route path="/messages" component={MessagesContainer}/>
            <Route path="/users" component={UsersContainer}/>
        </Router>
    );
}

export default App;
