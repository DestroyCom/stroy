import '../styles/Header.css'

function Header({choixFilm,choixFilmUpdate}){
    return (
        <header>
            <h1 onClick={() => choixFilmUpdate('') }>STROY</h1>
            <input type='text'/>
        </header>
    );
}

export default Header;