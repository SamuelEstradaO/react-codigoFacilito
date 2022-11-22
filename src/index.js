import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

const Saludo = ({ nombre, idioma = 'en' }) => {
  const [name, setName] = useState('');
  return (
    <div>
      <input type="text" onChange={(ev) => setName(ev.target.value)} />
      <p>Hola {name}</p>
    </div>
  );
};

// const Button = () => {
//   const [counter, setCounter] = useState(0);
//   useEffect(() => {
//     console.log('me ejecute');
//     return () => {
//       console.log('Adiós');
//     };
//   }, []);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         Click {counter}
//       </button>
//     </div>
//   );
// };

// Saludar.defaultProps ={
//   idioma: 'en'
// }

const App = () => {
  const [showButton, setShowButton] = useState(true);
  return (
    <div>
      <Saludo />
    </div>
  );
};
render(<App />, document.getElementById('root'));
