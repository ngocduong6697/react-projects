import './App.css';
import React, { useState, useRef } from 'react';


const UsernameForm = ({onSubmitUsername}) => {
  const usernameInputRef = useRef();
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('usernameInputRef', usernameInputRef)
    onSubmitUsername(usernameInputRef.current.value)
  }
  const handleChange = (e) => {
    const { value } = e.target;
    const isLowerCase = value === value.toLowerCase();
    setError(isLowerCase ? null : 'Username must be lower case')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input id="usernameInput" type="text" ref={usernameInputRef} onChange={handleChange} />
      </div>
      <div role='alert' style={{ color: 'red' }}>{error}</div>
      <button disabled={(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => console.log(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
