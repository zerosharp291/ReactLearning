import React, {useState} from 'react';

function App (props) {
  const [name, setName] = useState('James Bond')

  changeName () {
    let names = props.names;
    let name_index = Math.floor(Math.random() * names.length);
    setName(names[name_index]);
  }

  return (
    <div>
        <p>My name is {name}</p>
        <button onClick={changeName}>Change name</button>
    </div>
  )
}

export default App
