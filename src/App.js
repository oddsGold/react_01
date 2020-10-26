import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/sections/Header";
import LeftNavbar from "./components/sections/LeftNavbar";
import Profile from "./components/content/Profile";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />

        <div className="wrapper-row">

          <LeftNavbar />

          <div className="content">
              <Profile />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
