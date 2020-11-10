import React, {useState} from 'react'
import './Login.css'
import { Link } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    const signIn = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))

        //some firebase
    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

        //some firebase stuff
    }
     return (
         <div className='login'>
                <Link to='/'>  
                <img 
                    className='login__logo' src=''
                />
                </Link>

                <div className='login__container'>
                    <h1>Sign-in</h1>

                    <form>
                        <h5>E-mail</h5>
                        <input type='text' value={email} onChange={e => setEmail(e.EventTarget.value)} />
                        <h5>Password</h5>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                        <button type='submit' onClick={signIn} className='login__signInButton'>Sign-in</button>
                    </form>
                    <p>
                        You agree to terms and condtions.......
                    </p> 

                    <button onClick={register} className='login__registerButton'> Create an account </button>
                </div>
        </div>
     )
}

export default Login;