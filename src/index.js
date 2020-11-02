import React from 'react';
import {renderTree} from "./components/redux/render";
import * as serviceWorker from './serviceWorker';

renderTree();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
