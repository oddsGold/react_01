import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./components/redux/redux-store";
import {Provider} from "react-redux";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// let renderTree = () => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <Provider store={store}>
//                 <App />
//             </Provider>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
//
// }
//
// renderTree(store.getState());
//
// store.subscribe(() => {
//     renderTree();
// })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
