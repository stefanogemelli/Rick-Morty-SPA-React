import SearchBar from "../SearchBar/SearchBar";
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import s from './styles.module.css'
import * as c from "../../variables"
import logo from '../../images/logo3.png'



export default function NavBar({ onSearch, logout}) {

  // console.log(onSearch)
  return (

    <Nav>
        <Logo></Logo>

        <SearchBar onSearch={onSearch} />
      <DivLinks>
        
        <DivNavLinks>

          <NavLink to="/home" className={s.navLinkA} >
            {({isActive})=>(
            isActive 
            ? <SpanLink className={`${s.navLink} ${s.active}`}>Home</SpanLink> 
            : <SpanLink className={s.navLink}>Home</SpanLink>
            )}
            </NavLink>

          <NavLink to="/favorites" className={s.navLinkA}>
            {({isActive})=>(
            isActive 
            ? <SpanLink className={`${s.navLink} ${s.active}`}>Favorites</SpanLink> 
            : <SpanLink className={s.navLink}>Favorites</SpanLink>
            )}
            </NavLink>

          <NavLink to="/about" className={s.navLinkA}>
            {({isActive})=>(
            isActive 
            ? <SpanLink className={`${s.navLink} ${s.active}`}>About</SpanLink> 
            : <SpanLink className={s.navLink}>About</SpanLink>
            )}
            </NavLink>

        </DivNavLinks>

        <Logout onClick={logout} >Logout</Logout>
      </DivLinks>

    </Nav>

  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
  height: 100px;
  position: -webkit-sticky;
  position: sticky;
  top: -10px;
  transition: 1s ease-in;
  z-index:1000;
  background-color: ${c.DARK};
  margin-bottom: 5rem;
  padding-bottom: 3rem;
  padding-top:3rem;
`
const Logo = styled.div`
  background-image: url(${logo});
  background-size: cover;
  background-repeat: no-repeat;
  width: 320px;
  height: 180px;
  display: inline-block;
  position: absolute;
  left: 10%;
  top: -40px;
`
const DivLinks = styled.div`
  width: 450px;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid white; */
  position: relative;
  
  `
const DivNavLinks = styled.div`
  width: 300px;
  font-size: 2rem;
  padding-left: 10%;
  display:flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;

`
const SpanLink = styled.span`

  
`
const Logout = styled.button`
  background-color: transparent;
  border: none;
  height: fit-content;
  font-size: 2rem;
  padding: .4rem .8rem;
  font-weight: 300;
  line-height: 2rem;
  color: ${c.VERDE2};
  -webkit-text-stroke: .7px ${c.TURQUEZA};
  transition: .1s;

  &:hover{
    color: #8ad029;
  }

`