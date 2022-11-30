import './App.css'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters from './data.js'
import styled from 'styled-components'

const DivApp = styled.div`
  box-sizing: border-box;
  width: 100%;
  /* height: 100vh; */
  text-align: center;

`


function App() {

  return (
    <DivApp style={{ padding: '25px' }}>
      <SearchBar
        onSearch={(characterID) => window.alert(characterID)}
      />
      <Cards
        characters={characters}
      />
    </DivApp>
  )
}

export default App
