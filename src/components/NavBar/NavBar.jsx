import SearchBar from "../SearchBar/SearchBar";
import styled from 'styled-components'


const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding-right: 20%;
`


export default function NavBar({ onSearch }) {

  // console.log(onSearch)
  return (
    <Nav>
      <SearchBar onSearch={onSearch} />
    </Nav>
  )
}