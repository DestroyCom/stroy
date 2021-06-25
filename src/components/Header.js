import '../styles/Header.css'
import React from 'react'
import {
    Link,
  } from "react-router-dom";

function Header({choixFilm, choixFilmUpdate, displayFilm,displayFilmUpdate}){
    function search(e){
        e.preventDefault();
        displayFilmUpdate(e.target.value);
    }
    return (
        <header>
            <h1 onClick={() => choixFilmUpdate('') }><Link to='/'>STROY</Link></h1>
            <div>
                <i class="fas fa-search fa-lg hidden" ></i>
                <input type='text' onChange={(e) => search(e)}/>
                <Link to='login' id='log'><i class="fas fa-sign-in-alt fa-lg"></i></Link>
            </div>
            
        </header>
    );
}

export default Header;