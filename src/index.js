import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

// const Saludar = ({ nombre, idioma = 'en' }) => {
//   const saludo = idioma === 'es' ? 'Hola' : 'Hello';
//   return (
//     <p>
//       {saludo} {nombre}
//     </p>
//   );
// };

const Button = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('me ejecute');
    return () => {
      console.log('Adiós');
    };
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click {counter}
      </button>
    </div>
  );
};

// Saludar.defaultProps ={
//   idioma: 'en'
// }

const App = () => {
  const [showButton, setShowButton] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setShowButton(false);
        }}
      >
        Eliminar boton
      </button>
      {showButton && <Button />}
    </div>
  );
};
render(<App />, document.getElementById('root'));
