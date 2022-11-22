import React, { useState } from 'react';
import { render } from 'react-dom';

// const Saludar = ({ nombre, idioma = 'en' }) => {
//   const saludo = idioma === 'es' ? 'Hola' : 'Hello';
//   return (
//     <p>
//       {saludo} {nombre}
//     </p>
//   );
// };

const Button = ( ) => {
  const [counter, setCounter] = useState(0);
  return (<div>
      <p>Presionado: {counter}</p>
      <button onClick={()=>{setCounter(counter+1)}}>Click me!</button>
  </div>)
}

// Saludar.defaultProps ={
//   idioma: 'en'
// }

const App = () => {
  return (
    <div>
      <Button />
    </div>
  );
};
render(<App />, document.getElementById('root'));
