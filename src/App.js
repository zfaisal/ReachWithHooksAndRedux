import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SearchBox from './components/searchBox';
import './App.css';
import About from './components/About';
import Navi from './components/Nav';
import Editable from './components/Editable';
import Stripe from './components/stripe';

function App() {
  return (
    <div className="App">
        <BrowserRouter basename="/dev/ui">
         <Navi></Navi>
          <Switch>
            <Route path="/" exact component={SearchBox} ></Route>
            <Route path="/about" exact component={About} ></Route>
            <Route path="/editable" exact component={Editable} ></Route>
            <Route path="/stripe" exact component={Stripe}></Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
