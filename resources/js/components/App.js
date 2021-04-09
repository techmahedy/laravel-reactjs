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
import Project from './pages/projects/Project';
import ProjectCreate from './pages/projects/ProjectCreate';

class App extends React.Component {

    state = {
       
    }

    render() { 
        return (
            <div>
                <Router>
                    <Header/>
                       <div>
                            <Switch>
                                <Route path="/createproject">
                                    <ProjectCreate/>
                                </Route>
                                <Route path="/project">
                                    <Project/>
                                </Route>
                                <Route path="/">
                                    <Home/>
                                </Route>
                            </Switch>
                       </div>
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
