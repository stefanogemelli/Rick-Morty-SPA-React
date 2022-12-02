import SearchBar from "../SearchBar/SearchBar";
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding-right: 20%;
`


export default function NavBar({ onSearch }) {

  // console.log(onSearch)
  return (

    <Nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>

      <SearchBar onSearch={onSearch} />

    </Nav>


  )
}