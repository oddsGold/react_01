import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./components/content";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MessagesContainer from "./components/content/Messages/MessagesContainer";
import UsersContainer from "./components/content/Users/UsersContainer";
import ProfileContainer from "./components/content/Profile/ProfileContainer";
import AuthFormContainer from "./components/content/Login/AuthFormContainer";
import Preloader from "./components/sections/preloader";
import {connect} from "react-redux";
import {initializedSuccessApp} from "./components/redux/app-reducer";

function App(props) {

    useEffect(() => {
        props.initializedSuccessApp();
    },[])

    if(!props.initialized){
        return <Preloader/>
    }
    return (
        <Router>
            <Route exact path="/" component={Index}/>
            <Route path="/login" component={AuthFormContainer}/>
            <Route path='/profile/:userId?' component={ProfileContainer}/>
            <Route path="/messages" component={MessagesContainer}/>
            <Route path="/users" component={UsersContainer}/>
        </Router>
    );
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

export default connect(mapStateToProps,
    {
        initializedSuccessApp,
    })(App);
