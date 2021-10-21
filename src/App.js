import React from 'react'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

import Results from './components/Results';
import {GlobalStorage} from './context/GlobalContext'


function App() {
  fetch(process.env.REACT_APP_API_URL || 'http://localhost:80880/api/v1')
  .then(() => console.log('DEU CERTO'))
  .catch(() => console.log('DEU ERRO'))

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
