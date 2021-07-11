import React from 'react';
import './App.css';
import { useState } from 'react';

// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// component
import Register from './components/Register';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// screen
import Home from './screen/HomeScreen';

function App() {

  const [sideToggle, setSideTogle] = useState(false);

  return (

    <Router>
      <NavBar click={() => setSideTogle(true)} />
      <main>
        <Switch>
          <Route path = "/" exact component={Home} />
          <Route path = "/register" component={Register} />
          <Route path = "/login" component={Login} />
        </Switch>
      </main>
      <Footer />
    </Router>
    
  );
}

export default App;