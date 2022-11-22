import React, { useEffect, useState, useRef } from 'react';
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

const Form = ({ showed }) => {
  let [title, setTitle] = useState('');
  let [body, setBody] = useState('');
  const firstInput = useRef();
  useEffect(() => {
    //Actualizar el DOM
    if(showed){
      console.log(firstInput);
      firstInput.current.focus();
    }
  }, [showed]);
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
          ref={firstInput}
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

const Accordion = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Mostrar formulario</button>
      {show && <Form showed={show} />}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Accordion />
    </div>
  );
};
render(<App />, document.getElementById('root'));
