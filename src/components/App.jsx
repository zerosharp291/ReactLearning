import React, {useState} from 'react';

function App (props) {
  const [name, setName] = useState(props.names[0])

  function changeName () {
    let index = props.name.indexOf(name);
    let length = props.name.length - 1;
    if (index === length) {
      setName(0);
    } else {
      setName(index + 1)
    }
  }
  return (
    <div>
        <p>My name is {name}</p>
        <button onClick={changeName}>Change name</button>
    </div>
  )
}

export default App
