import '../styles/Catalog.css'
import {dataFilms} from '../assets/datas/listFilm'

function Catalog({choixFilm,choixFilmUpdate, displayFilm}){
    let mots = 'discover';
    if(mots.indexOf(displayFilm) > -1){
        console.log("ui")
    }
    return (
        <section>
            <h2>Les films :</h2>
            <div className='displayFilms'>
                {dataFilms.map((film)=>(
                    film.nom.toLowerCase().indexOf(displayFilm.toLowerCase()) > -1 ? 
                    <div onClick={()=>choixFilmUpdate(film.id)}>
                        <img src={film.pochette} alt={film.nom}/>
                        <p>{film.nom}</p>
                        <p>Durée : {film.duree>60 ? Math.round(((film.duree/60) * 100)/100) + ' heures' : film.duree + ' minutes' }</p>
                    </div> : null
                ))}
            </div>
        </section>
    );
}

export default Catalog;