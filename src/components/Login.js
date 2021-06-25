import React, { useState } from 'react'
import '../styles/Login.css'
import users from '../assets/datas/users'

function Login(){
    const [username, usernameUpdate] = useState('');
    const [password, passwordUpdate] = useState('');

    console.log('login', typeof(localStorage.getItem('login')))

    function verifUsername(users, e){
        e.preventDefault();
        for(let id in users){
            if((users[id].username === username) && (users[id].mdp === password)){
                localStorage.setItem('login', true);
                localStorage.setItem('user', id);
                console.log('connecté')
                document.location.reload();
                break;
            }
            else{
                localStorage.setItem('login', false);
            }
        }
    }

    function pasCo(){
        return (
            <div>
            <h2>Connectez-vous</h2>
            <div>
            <label>Username</label>
            <input type='text' onChange={(e) => usernameUpdate(e.target.value)}></input>
            </div>
            <div>
            <label>Password</label>
            <input type='text' onChange={(e) => passwordUpdate(e.target.value)}></input>
            </div>
            <a onClick={(e)=>verifUsername(users, e)}>ENTER</a>
            </div>)
    }

    function destroyLog(){
        localStorage.clear();
        localStorage.setItem('user', null);
        document.location.reload();
    }

    function co(users){
        let num = localStorage.getItem('user');
        return (
            <div>
            <h2>Hello, {users[num].username}</h2>
            <p>Vous etes actuellement connecté en mode premium !</p>
            <p>Votre mot de passe est "{users[num].mdp}"</p>
            <a onClick={(e)=>destroyLog()}>SE DECONNECTER</a>
            </div>)
    }
 
    return (
        <section className='login'>
            {localStorage.getItem('login') === ('false' || 'null' || null) ? pasCo() : co(users) }
            
        </section>
    );
}

export default Login;