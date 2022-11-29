import './App.css'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters from './data.js'

function App() {

  return (
    <div className='App' style={{ padding: '25px' }}>
      <SearchBar
        onSearch={(characterID) => window.alert(characterID)}
      />
      <Cards
        characters={characters}
      />
      <hr />
    </div>
  )
}

export default App
