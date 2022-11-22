import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

// const Saludo = ({ nombre, idioma = 'en' }) => {
//   const [name, setName] = useState('');
//   return (
//     <div>
//       <input type="text" onChange={(ev) => setName(ev.target.value)} />
//       <p>Hola {name}</p>
//     </div>
//   );
// };

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

const Form = () => {
  let [title, setTitle] = useState('');
  let [body, setBody] = useState('');
  const sendForm = (ev) => {
    ev.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setTitle('');
        setBody('');
        console.log(json);
      });
  };
  return (
    <form onSubmit={(ev) => sendForm(ev)}>
      <div>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
      </div>
      <div>
        <label htmlFor="body">Publicación</label>
        <textarea
          id="body"
          value={body}
          onChange={(ev) => setBody(ev.target.value)}
        ></textarea>
      </div>
      <input type="submit" value="Enviar" />
    </form>
  );
};

const App = () => {
  return (
    <div>
      <Form />
    </div>
  );
};
render(<App />, document.getElementById('root'));
