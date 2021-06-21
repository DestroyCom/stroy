import Header from './Header.js'
import Catalog from './Catalog.js'
import Film from './Film.js'
import '../styles/Global.css'
import {useState} from 'react'

function App() {
  const [choixFilm, choixFilmUpdate] = useState('')
  return (
    <>
      <Header choixFilm={choixFilm} choixFilmUpdate={choixFilmUpdate}/>
      {choixFilm === '' ? <Catalog choixFilm={choixFilm} choixFilmUpdate={choixFilmUpdate}/> : <Film choixFilm={choixFilm} choixFilmUpdate={choixFilmUpdate}/>}
      
    </>
  )
}

export default App;
