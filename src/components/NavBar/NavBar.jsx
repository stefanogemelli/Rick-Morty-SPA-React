import SearchBar from "../SearchBar/SearchBar";
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import s from './styles.module.css'



export default function NavBar({ onSearch, logout}) {

  // console.log(onSearch)
  return (

    <Nav>
      <DivLinks>
        <DivNavLinks>
          <NavLink to="/home" className={s.navLink}>Home</NavLink>
          <NavLink to="/favorites" className={s.navLink}>Favorites</NavLink>
          <NavLink to="/about" className={s.navLink}>About</NavLink>
        </DivNavLinks>
        <Span onClick={logout}>Logout</Span>
      </DivLinks>

      <SearchBar onSearch={onSearch} />
    </Nav>

  )
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-right: 20%;
  align-items:center;
  padding: 2em;
  /* position: absolute; */
`
const DivLinks = styled.div`
  width: 100%;
  display: flex; 
  justify-content: space-around;
`
const DivNavLinks = styled.div`
  width: 150px;
  font-size:1.4em;
  display:flex;
  justify-content: space-between;

`
const Span = styled.span`
  align-self: flex-end;
  font-size:1.2em;
`