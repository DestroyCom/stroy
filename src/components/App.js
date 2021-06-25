import Header from './Header.js'
import Catalog from './Catalog.js'
import Film from './Film.js'
import Footer from './Footer.js'
import Login  from './Login.js'
import '../styles/Global.css'
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

if(localStorage.getItem('login')=== null){
  localStorage.setItem('login', false);
  localStorage.setItem('user', false);
}
if(localStorage.getItem('user')=== null){
  localStorage.setItem('user', false);
}
if(localStorage.getItem('film')=== null){
  localStorage.setItem('film', false);
}

function App() {
  const [choixFilm, choixFilmUpdate] = useState('')
  const [displayFilm, displayFilmUpdate] = useState('')
  return (
    
      <Router>
        <Header choixFilm={choixFilm} choixFilmUpdate={choixFilmUpdate} displayFilm={displayFilm} displayFilmUpdate={displayFilmUpdate} />
        <Switch>
          <Route path='/player'>
            <Film choixFilm={choixFilm} choixFilmUpdate={choixFilmUpdate}/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/'>
            <Catalog choixFilm={choixFilm} choixFilmUpdate={choixFilmUpdate} displayFilm={displayFilm}/>
          </Route>
        </Switch>
        <Footer/> 
      </Router>

  )
}

export default App;
