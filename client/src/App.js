import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/nav';
import Footer from './components/footer';
import Header from './components/header'
import Profile from './components/profile';
import Explore from './components/explore';
import AddChallenge from './components/addChallenge';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Switch>
          <Route exact path='/' component={Explore} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/add-challenges' component={AddChallenge} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
