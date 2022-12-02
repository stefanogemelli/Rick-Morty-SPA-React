import './App.css'
import styled from 'styled-components'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


const DivApp = styled.div`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
`


function App() {
  const [characters, setCharacters] = useState([])

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (characters.filter(e => e.id === data.id).length) {
            alert('El personaje ya se encuentra en la colección')
          } else {
            // console.log(data)
            setCharacters((oldChars) => [...oldChars, data]);
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
    <DivApp style={{ padding: '25px' }}>

      <NavBar onSearch={onSearch} />

      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}> </Route>

        <Route path='/about' element={<About />} ></Route>

        <Route path='/detail/:detailId' element={<Detail />} ></Route>

      </Routes>


    </DivApp >
  )
}

export default App
