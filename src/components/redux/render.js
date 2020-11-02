import React from 'react';
import ReactDOM from "react-dom";
import App from "../../App";


export let renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );

}
