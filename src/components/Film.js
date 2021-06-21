import {dataFilms} from '../assets/datas/listFilm'
import '../styles/Film.css'

function Film({choixFilm,choixFilmUpdate}){
    var filmDisplay = {}
    dataFilms.forEach((film, index) =>{
        if(film.id == choixFilm){
            filmDisplay = film;
        }
    })

    return (
        <section className='filmPlayer'>
            <h2>{filmDisplay.nom}</h2>
            <video poster={filmDisplay.pochette} controls>
                <source src={filmDisplay.url} type="video/mp4" />
            </video>
        </section>
    );
}

export default Film;