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

          <NavLink to="/home" className={`${s.navLinkA}  ${s.active}`} ><SpanLink className={`${s.navLink} `}>Home</SpanLink></NavLink>

          <NavLink to="/favorites" className={s.navLinkA}><SpanLink className={s.navLink}>Favorites</SpanLink></NavLink>

          <NavLink to="/about" className={s.navLinkA}><SpanLink className={s.navLink}>About</SpanLink></NavLink>

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
  /* text-decoration: none; */
  
`
const Logout = styled.button`
  background-color: #101010;
  border: none;
  /* align-self: flex-start; */
  height: fit-content;
  font-size: 2rem;
  padding: .4rem .8rem;
  font-weight: 300;
  line-height: 2rem;
  color: ${c.VERDE2};
  -webkit-text-stroke: .7px ${c.TURQUEZA};
  /* text-decoration: 1.7px underline; */
  /* box-shadow: 0px 1px 2px 1px ${c.TURQUEZA}, 
              0px 2px 5px 1px ${c.VERDE2}; */
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