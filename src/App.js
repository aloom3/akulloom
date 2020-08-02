import React from 'react';
import './App.css';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Project2 from './SecondProject';
import Contact from './ContactMe';
import HP from './homepage';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  render() {
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
        <Route path = "/homepage">
          <HP/>
        </Route>
        <Route path = "/Projects">
          <Projects/>
        </Route>
        <Route path = "/SecondProject">
          <Project2></Project2>
        </Route>
        <Route path = "/Contact">
          <Contact/>
        </Route>
      </header>
    </div>
    </Switch>
    </BrowserRouter>
  );
  }
}

export default App;
