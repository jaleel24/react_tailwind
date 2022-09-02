import './App.css';
import React, { Fragment } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import data from './data/data.json';
import {Route , Switch, Redirect} from 'react-router-dom';

function App() {
  return (
   <Fragment>
    <Header />
    <Switch>
    {/* <Route path='/'></Route> */}
    <Route path='/' exact><Redirect to="/home" /></Route>
     
   <Route path='/home' exact><Hero data={data.Header}/></Route>
   <Route path='/about'><About data={data.About}/></Route>
   </Switch>
   </Fragment>
   
  );
}

export default App;
