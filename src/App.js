import styled from 'styled-components'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import Error404 from './components/Error404/Error404'
import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
// import img from "./images/bgDetail.jpg"


const DivApp = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  `
/* background-image: url(${img}) */


function App() {
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  const { pathname } = useLocation()
  // console.log(pathname)
  const navigate = useNavigate()


  const [username, password] = ["hola@gmail.com", "Hola123"]
  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true)
      navigate('/home')
    }
  }
  const logout = () => {
    setAccess(false)
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (!characters.filter(e => e.id === data.id).length) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            alert('El personaje ya se encuentra en la colección')
            // console.log(data)
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(e => e.id !== id))
  }

  return (
    <DivApp>

      {pathname !== "/" ? <NavBar onSearch={onSearch} logout={logout} /> : null}


      <Routes>

        <Route path='/' element={<Form login={login} />} />

        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />

        <Route path='/about' element={<About />} />

        <Route path='/detail/:detailId' element={<Detail />} />

        <Route path='/favorites' element={<Favorites />} />

        <Route path='/*' element={<Error404 />} />

      </Routes>


    </DivApp >
  )
}



export default App
