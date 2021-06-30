import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
function App() {

  return (

    <Router>
      <Switch>
        <Route path = "/" exact component={Home} />
        <Route path = "/register" component={Register} />
        <Route path = "/login" component={Login} />
      </Switch>
    </Router>
    
  );
}

export default App;
