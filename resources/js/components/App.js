import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Home from './pages/Home';
import { Button } from 'react-bootstrap';

class App extends React.Component {

    state = {
       
    }

    render() { 
        return (
            <div>
                <Router>
                    <Header/>
                        <h1>Welcome to home</h1>
                    <Footer/>
                </Router>
            </div>
        );
    }
}
 
export default App;

if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}
