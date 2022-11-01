import React, {useState} from 'react';
import axios from 'axios';

function Login () {
  const [error, setError] = useState (false);
  const [password, setPassword] = useState ('');
  const [username, setUsername] = useState ('');
  const [user, setUser] = useState ({});


  const handleClick = async (e) => {
    e.preventDefault();
    try{
      const {data} = axios.get("https://jsonplaceholder.typicode.com/users/1");
      setUser(data);
    } catch(err) {
        setError(true);
    }
  }
  return (
    <div className="container">
      <form>
        <input

          type="text"
          placeholder="username"
          value={username}
          onChange={e => setUsername (e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword (e.target.value)}
        />
        <button 
        disabled={!username || !password}
        onClick={handleClick}
        >Login</button>
        <span
          data-testid="error"
          style={{visibility: error ? 'visible' : 'hidden'}}
        >
          Something went wrong
        </span>
      </form>
    </div>
  );
}

export default Login;
