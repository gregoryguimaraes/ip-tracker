import React from 'react'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

import Results from './components/Results';
import {GlobalStorage} from './context/GlobalContext'


function App() {


  return (
    <div className="App">
    <GlobalStorage>
      <Header />

      <Results />

    </GlobalStorage>
    <Footer />
    </div>
  );
}

export default App;
