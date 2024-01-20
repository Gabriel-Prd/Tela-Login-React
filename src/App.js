import { useState } from 'react';
import tecnoImg from './Assets/FullLogoWhite.svg'
import './styles.css'

function App() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="container">
      <div className='imgTecno'>
        <img src={tecnoImg} alt='TecnoJr'></img>
      </div>

      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">Dashboard</span>

            <div className='wrap-input'>
              <input 
                className= {username !== "" ? "has-val input" : "input"}
                type='text'
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <span className='focus-input' data-placeholder="Username"></span>
            </div>

            <div className='wrap-input'>
              <input 
                className={password !== "" ? "has-val input" : "input"}
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
              <span className='focus-input' data-placeholder="Password"></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Login</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
