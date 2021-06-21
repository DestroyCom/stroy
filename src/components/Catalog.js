import '../styles/Catalog.css'
import {dataFilms} from '../assets/datas/listFilm'

function Catalog({choixFilm,choixFilmUpdate}){
    return (
        <section>
            <h2>Les films :</h2>
            <div className='displayFilms'>
                {dataFilms.map((film)=>(
                    <div onClick={()=>choixFilmUpdate(film.id)}>
                        <img src={film.pochette} alt={film.nom}/>
                        <p>{film.nom}</p>
                        <p>Durée : {film.duree} minutes</p>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Catalog;