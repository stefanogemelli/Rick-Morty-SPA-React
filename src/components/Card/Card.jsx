import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
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
      <BgCard>
         <DivCard key={character.id}>

            {onClose && <ButtonCard onClick={() => onClose(character.id)}>X</ButtonCard>}
            
            <DivImg onDoubleClick={handleFavorite}>

               {  fav(isFav,handleFavorite) }

               <img src={character.image} alt={character.name} />
            </DivImg>

            <H2Name>{character.name}</H2Name>
            <H2Normal>{character.species}</H2Normal>
            <H2Normal>{character.gender}</H2Normal>
            <Link to={`/detail/${character.id}`} >
               <Details>Details...</Details>  
            </Link>

         </DivCard>
      </BgCard>
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

const BgCard = styled.div`
   width: 100%;
   height: 100%;
   background-color: #4040405f;
   backdrop-filter: blur(10px);
   display:flex;
   justify-content: center;
   align-items:center;
   border: 1px solid #0f0f0f;
`


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

const Fav = styled.button`
   background-color: transparent;
   font-size: 2.5rem;
   border:none;
   position: absolute;
   bottom:5%;
   right:7%;
`
function fav (isFav,handleFavorite) {
   return ( isFav 
   ? (
      <Fav onClick={handleFavorite}>❤️</Fav>
   ) 
   : (
      <Fav onClick={handleFavorite}>🤍</Fav>
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