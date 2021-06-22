import {dataFilms} from '../assets/datas/listFilm'
import '../styles/Film.css'

function Film({choixFilm,choixFilmUpdate}){
    var filmDisplay = {}
    dataFilms.forEach((film, index) =>{
        if(film.id === choixFilm){
            filmDisplay = film;
        }
    })

    return (
        <section className='filmPlayer'>
            <h2>{filmDisplay.nom}</h2>
            <video poster={filmDisplay.pochette} controls>
                <source src={filmDisplay.url} type="video/mp4" />
            </video>
            <div>
                <p>{filmDisplay.duree} minutes</p>
                <p>Année de sortie : {filmDisplay.dateDeSortie}</p>
            </div>
            <div>
            <h3>Description :</h3>
            <p>{filmDisplay.description}</p>
            </div>
        </section>
    );
}

export default Film;