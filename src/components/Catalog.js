import '../styles/Catalog.css'
import {dataFilms} from '../assets/datas/listFilm'
import React from 'react'

function Catalog({choixFilm,choixFilmUpdate, displayFilm}){
    var logged = localStorage.getItem('login');

    function choiceFilm(film){
        console.log('click', film)
        localStorage.setItem('film', film);
        window.location = 'player';
        
    }

    function loggedOrNot(isLogged, film){
        if(film.premium === true && isLogged === 'true'){
            return (<div onClick={()=>choiceFilm(film.id)}>
                        <img src={film.pochette} alt={film.nom}/>
                        <p>{film.nom}</p>
                        <p>Durée : {film.duree>60 ? Math.round(((film.duree/60) * 100)/100) + ' heures' : film.duree + ' minutes' }</p>
                    </div>)
        }
        else if(film.premium === false){
            return (<div onClick={()=>choiceFilm(film.id)}>
                        <img src={film.pochette} alt={film.nom}/>
                        <p>{film.nom}</p>
                        <p>Durée : {film.duree>60 ? Math.round(((film.duree/60) * 100)/100) + ' heures' : film.duree + ' minutes' }</p>
                    </div>)
        }
    }

    return (
        <section className='catalog'>
            <h2>Les films :</h2>
            <div className='displayFilms'>
                {dataFilms.map((film)=>(
                    film.nom.toLowerCase().indexOf(displayFilm.toLowerCase()) > -1 ? 
                    loggedOrNot(logged, film) : null
                ))}
            </div>
        </section>
    );
}

export default Catalog;