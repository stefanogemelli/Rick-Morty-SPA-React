import SearchBar from "../SearchBar/SearchBar";
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import s from './styles.module.css'
import * as c from "../../variables"



export default function NavBar({ onSearch, logout}) {

  // console.log(onSearch)
  return (

    <Nav>
      <DivLinks>
        <DivNavLinks>

          <NavLink to="/home" className={s.navLinkA}><SpanLink className={s.navLink}>Home</SpanLink></NavLink>

          <NavLink to="/favorites" className={s.navLinkA}><SpanLink  className={s.navLink}>Favorites</SpanLink></NavLink>

          <NavLink to="/about" className={s.navLinkA}><SpanLink className={s.navLink}>About</SpanLink></NavLink>

        </DivNavLinks>
        <Logout onClick={logout} >Logout</Logout>
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
  padding: 2rem;
  position: -webkit-sticky;
  position: sticky;
  top: -15px;
  z-index:1000;
`
const DivLinks = styled.div`
  width: 100%;
  display: flex; 
  justify-content: space-around;
`
const DivNavLinks = styled.div`
  width: 150px;
  font-size: 2rem;
  display:flex;
  justify-content: space-between;
`
const SpanLink = styled.span`
  /* text-decoration: none; */
  
`
const Logout = styled.button`
  background-color: #101010;
  border: none;
  align-self: flex-end;
  font-size: 2rem;
  padding: .4rem .8rem;
  font-weight: 300;
  color: ${c.VERDE2};
  -webkit-text-stroke: .7px ${c.TURQUEZA};
  text-decoration: 1.7px underline;
  box-shadow: 0px 1px 2px 1px ${c.TURQUEZA}, 
              0px 2px 5px 1px ${c.VERDE2};
  transition: .1s;

  &:hover{
    -webkit-text-strok: .7px #000000;
    text-shadow: 0px 0px 1px ${c.TURQUEZA},1px 1px 2px ${c.VERDE2};
    box-shadow: 0px 1px 2px 2px ${c.TURQUEZA}, 
                0px 2px 5px 3px ${c.VERDE2};
  }
  &:active{
    box-shadow: 0px 1px 2px 1px ${c.TURQUEZA}, 
                0px 2px 4px 2px ${c.VERDE2},
                0px 1px 2px 1px ${c.TURQUEZA} inset, 
                0px 1px 5px 2px ${c.VERDE2} inset;
  -webkit-text-strok: none; 
  text-shadow:none;
  }
`