import React from 'react';
import './App.css';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Project2 from './SecondProject';
import Contact from './ContactMe';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <div className="App">
      <header className="App-header">
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "/AboutMe">
          <AboutMe/> 
        </Route>
        <Route path = "/Projects">
          <Projects/>
        </Route>
        <Route path = "/SecondProject">
          <Project2></Project2>
        </Route>
      </header>
    </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
