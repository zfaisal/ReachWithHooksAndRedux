import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SearchBox from './components/searchBox';
import './App.css';
import About from './components/About';
import Navi from './components/Nav';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
         <Navi></Navi>
          <Switch>
            <Route path="/" exact component={SearchBox} ></Route>
            <Route path="/about" exact component={About} ></Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
