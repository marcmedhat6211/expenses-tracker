//This is the entry point of the project
import ReactDOM from 'react-dom'; // react and react DOM are the react libraries that we're going to use

import './index.css';
import App from './App'; //we neglected the .js because it is a js file

//this is calling the div with id root in public/index.html file
//note: the index.html file is the only html file in the project (that is why it is called a SPA (single page application))
//this line is saying => put the app component in the root div
ReactDOM.render( < App / > , document.getElementById('root'));