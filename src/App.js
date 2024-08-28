import React from 'react';
import './App.css';


// Importar componentes
import Header from './Components/Header.jsx';
import Project from './Components/Projects.jsx';
import Footer from './Components/Footer.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <Project />
      <Footer />
    </div>
  );
}


export default App;
