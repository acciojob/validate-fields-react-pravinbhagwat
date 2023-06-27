
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [name, setName] = useState('');
  let [pass, setPass] = useState('');
  let [error, setError] = useState('');

  function submitHandle(e){
    e.preventDefault();
    if(name=='' || pass==''){
      setError('Both username and password are required.');
      return;
    }
    setError('');
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={submitHandle}>
          <label for='username'>Username: </label>
          <input type="text" id="username" onChange={(e)=>{setName(e.target.value)}}></input>
          <br></br>
          <label for='password'>Password: </label>
          <input type="password" id="password" onChange={(e)=>{setPass(e.target.value)}}></input>
          <br></br>
          <br></br>
          {
            error?
            <p id='errorMessage'>{error}</p>:
            <p></p>
          }
          <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default App