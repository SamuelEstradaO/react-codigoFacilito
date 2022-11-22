import React, { Component } from 'react';
import { render } from 'react-dom';

const Saludar = ({ nombre, idioma = 'en' }) => {
  const saludo = idioma === 'es' ? 'Hola' : 'Hello';
  return (
    <p>
      {saludo} {nombre}
    </p>
  );
};

// Saludar.defaultProps ={
//   idioma: 'en'
// }

const App = () => {
  return (
    <div>
      <Saludar nombre="Samuel"/>
    </div>
  );
};
render(<App />, document.getElementById('root'));
