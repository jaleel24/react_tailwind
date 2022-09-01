import './App.css';
import React, { Fragment } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import data from './data/data.json';

function App() {
  return (
   <Fragment>
     <Header />
    <Hero data={data.Header}/>
   </Fragment>
  );
}

export default App;
