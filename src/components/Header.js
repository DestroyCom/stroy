import '../styles/Header.css'

function Header({choixFilm, choixFilmUpdate, displayFilm,displayFilmUpdate}){
    function search(e){
        e.preventDefault();
        displayFilmUpdate(e.target.value);
    }
    return (
        <header>
            <h1 onClick={() => choixFilmUpdate('') }>STROY</h1>
            <div>
                <i class="fas fa-search fa-lg" className='hidden'></i>
                <input type='text' onChange={(e) => search(e)}/>
            </div>
            
        </header>
    );
}

export default Header;