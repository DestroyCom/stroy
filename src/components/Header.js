import '../styles/Header.css'

function Header({choixFilm, choixFilmUpdate, displayFilm,displayFilmUpdate}){
    function search(e){
        e.preventDefault();
        displayFilmUpdate(e.target.value);
        console.log(displayFilm)
    }
    return (
        <header>
            <h1 onClick={() => choixFilmUpdate('') }>STROY</h1>
            <input type='text' onChange={(e) => search(e)}/>
        </header>
    );
}

export default Header;