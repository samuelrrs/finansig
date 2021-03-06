import React, {useState} from 'react';
import logo from '../assets/logo.png'
import './Login.css'



export default  function Login ({history}) {
    const [username, setUsername] =useState('')

    function handleSubmit(e) {
        e.preventDefault()

        console.log(username)
        history.push('/main')
    }

  


    return (

       <div className="login-container">
           <form onSubmit={handleSubmit}>
               
           <img src={logo}  alt="Finansig"/>
           
           
           <input 
           placeholder= "Digite seu CNPJ"
            value={username} 
            onChange={e => setUsername(e.target.value)}
            />
           <button type="submit"> Entrar </button>
            </form>
           
       </div>

       
    )
}

