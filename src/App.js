import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screen/HomeScreen';
import Cart from './screen/CartScreen';
import ItemDetail from './components/ItemDetail';
import PremierPage from './screen/PremierPage';

function App() {

  return (

    <Router>
      <Switch>
        <Route path ='/' exact component={Home} />
        <Route path ='/cart' component={Cart} />
        <Route path='/itemdetail/:id' component={ItemDetail} />
        <Route path='/premier' component={PremierPage} />
      </Switch>
    </Router>
  );
}

export default App;
