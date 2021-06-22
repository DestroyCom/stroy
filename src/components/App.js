import Header from './Header.js'
import Catalog from './Catalog.js'
import Film from './Film.js'
import Footer from './Footer.js'
import '../styles/Global.css'
import {useState} from 'react'

function App() {
  const [choixFilm, choixFilmUpdate] = useState('')
  const [displayFilm, displayFilmUpdate] = useState('')
  console.log(displayFilm)
  return (
    <>
      <Header choixFilm={choixFilm} choixFilmUpdate={choixFilmUpdate} displayFilm={displayFilm} displayFilmUpdate={displayFilmUpdate} />
      {choixFilm === '' ? <Catalog choixFilm={choixFilm} choixFilmUpdate={choixFilmUpdate} displayFilm={displayFilm}/> : <Film choixFilm={choixFilm} choixFilmUpdate={choixFilmUpdate}/>}
      <Footer/>
    </>
  )
}

export default App;
