import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Team from './pages/team';
import Welcome from './pages/welcome';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Route
          exact={true}
          path="/"
          render={() => (
            <div className="App">
              < Welcome />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/team"
          render={() => (
            <div className="App">
              <Team />
            </div>
          )}
        />
      </BrowserRouter >
    );
  }
}

export default App;