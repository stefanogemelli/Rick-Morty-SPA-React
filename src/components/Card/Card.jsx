import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'
import * as c from "../../variables"
import { addFavorite, removeFavorite } from '../../redux/actions';


function Card({ character, onClose, addFavorite, removeFavorite, myFavorites }) {
   const [isFav, setIsFav] = useState(false)

   useEffect(()=>{
      myFavorites.forEach(e => {
         if(e.id === character.id){
            setIsFav(true)
         }
      })
   },[myFavorites])

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         removeFavorite(character.id)
      }else{
         setIsFav(true)
         addFavorite(character)
      }
   }

   return (
         <DivCard key={character.id}>

            {onClose && <ButtonCard onClick={() => onClose(character.id)}>X</ButtonCard>}
            
            <DivImg onDoubleClick={handleFavorite}>


               <img src={character.image} alt={character.name} />
            </DivImg>

               {  fav(isFav,handleFavorite) }
            <H2Name>{character.name}</H2Name>
            <H2Normal>{character.species}</H2Normal>
            <H2Normal>{character.gender}</H2Normal>
            <Link to={`/detail/${character.id}`} >
               <Details>Details...</Details>  
            </Link>

         </DivCard>
   );
}

const mapStateToProps = (state)=>{
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (personaje) => dispatch(addFavorite(personaje)),
      removeFavorite: (id) => dispatch(removeFavorite(id))
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)


const DivCard = styled.div`
   z-index: 150;
   width: 270px;
   height: fit-content;
   margin: 10px;
   font-weight:700;  
   border-radius: 7px;
   background: ${c.DARK};
   backdrop-filter: blur(5px);
   border: 2px solid ${c.VERDE2};
   box-shadow: 0px 0px 7px 1px ${c.TURQUEZA};
   display: flex;
   flex-direction: column;
   overflow: hidden;
   transition: .1s ease-in;
   &:hover{
      box-shadow: 0px 0px 5px 2px ${c.VERDE1},
         0px 0px 10px 4px ${c.TURQUEZA};
   }
`

const FavF = styled.button`
   background-color: transparent;
   font-size: 2.5rem;
   border:none;
   position: absolute;
   bottom:25%;
   right:3%;
   transition: 0s;
   text-shadow: 0px 1px 3px whitesmoke;
   transform-origin: 50% 50%;
   &:hover{
      font-size: 2.7rem;
      right:2.5%;
      bottom: 24.5%;
   }
`

const favAnimation = keyframes`
   0% { transform: scale(1);}
 30% { transform: scale(.95);}
 40% { transform: scale(1.05);}
 100% { transform: scale(1);}
`

const FavT = styled.button`
   background-color: transparent;
   font-size: 3rem;
   border:none;
   position: absolute;
   bottom:24%;
   right:2%;
   text-shadow: 0px 1px 3px whitesmoke;
   animation: ${favAnimation} 1s infinite;
`

function fav (isFav,handleFavorite) {
   return ( isFav 
   ? (
      <FavT onClick={handleFavorite}>❤️</FavT>
   ) 
   : (
      <FavF onClick={handleFavorite}>🤍</FavF>
   )
   )
}

const ButtonCard = styled.button`
   z-index:100;
   border-radius: 3px;
   align-self: flex-end;
   width: 30px;
   font-size: 2.2rem;
   background-color: ${c.VERDE2};
   color: ${c.DARK};
   -webkit-text-stroke: .5px ${c.DARK};
   box-shadow: 0px 0px 4px 2px ${c.DARK};
   font-weight: 300;
   position: absolute;
   top:-35px;
   opacity:0;
   left:50%;
   transform: translateX(-50%);
   transition: .1s;
   cursor:pointer;
   &:hover{
      color: ${c.VERDE2};
      background-color: ${c.DARK};
      -webkit-text-stroke: .5px ${c.TURQUEZA};
      box-shadow: -1px -1px 2px 2px ${c.VERDE2};
   }
   ${DivCard}:hover & {
      top:1px;
      opacity:100;
   }
`
const DivImg = styled.div`
   position: relative;
   text-align: center;
   display: flex;
   flex-direction: column;
   margin-bottom: 10px;
   overflow: hidden;

`
const H2Name = styled.h2`
   margin: 0;
   align-self:center;
   font-size: 3rem;
   font-weight: 300;
   color: ${c.TURQUEZA};
   -webkit-text-stroke: .7px ${c.VERDE2};
   @media (max-width: 500px){
      color:red;
   }
   ${DivCard}:hover &{
      color: ${c.VERDE1};
      -webkit-text-stroke: 1px ${c.TURQUEZA};
   }
`
const H2Normal = styled.h2`
   margin: 0;
   color: #e0e0e0;
   font-weight: 300;
   font-size:2rem;
   text-shadow: 0px 0px 2px white;
`
const Details = styled.span`
   width:97%;
   margin-top: 10px;
   font-weight:400;
   font-size:2rem;
   display: inline-block;
   font-size: 2.2rem;
   background-color: ${c.VERDE2};
   color: ${c.DARK};
   -webkit-text-stroke: .5px ${c.DARK};
   box-shadow: 0px 0px 4px 2px ${c.DARK};
   border-radius: 3px;
   padding: 3px;
   margin-bottom:5px;
   align-self:center;
   transition: .1s ease-in-out;
   &:hover{
      color: ${c.VERDE2};
      background-color: ${c.DARK};
      -webkit-text-stroke: .3px ${c.TURQUEZA};
      box-shadow: 1px 1px 2px 2px ${c.VERDE2};
   }
   ${DivCard}:hover &{
      bottom: 4px;
   }
`