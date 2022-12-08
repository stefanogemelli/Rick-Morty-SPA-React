import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
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
         {
            isFav 
            ? (
               <button onClick={handleFavorite}>❤️</button>
            ) 
            : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <ButtonCard onClick={() => onClose(character.id)}>X</ButtonCard>
         <DivImg>
            <img src={character.image} alt={character.name} />
            <BgDark>
               <Link to={`/detail/${character.id}`} >
               <Span>Details...</Span>  
               </Link>
            </BgDark>
         </DivImg>
               <H2Name>{character.name}</H2Name>
         <H2Normal>{character.species}</H2Normal>
         <H2Normal>{character.gender}</H2Normal>


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
   width: fit-content;
   margin: 1em;
   font-weight:700;  
   border: 2px #573784 solid;
   border-radius: 10px;
   background: #46006661;
   backdrop-filter: blur(15px);
   /* box-shadow: 0px 0px 10px 1px #573784; */
   display: flex;
   flex-direction: column;
   overflow: hidden;
   transition: .1s ease-in-out;
   &:hover{
   box-shadow: 0px 0px 7px 3px #a8d5ff;
   }
`
const ButtonCard = styled.button`
   z-index:100;
   border-radius: 3px;
   align-self: flex-end;
   background-color: #BE24F0;
   width: 30px;
   color: #a8d5ff;
   border: 2px solid #a8d5ff;
   font-weight: 300;
   font-size: 1.2em;
   position: absolute;
   top:-30px;
   left:50%;
   transform: translateX(-50%);
   transition: .1s ease-in-out;
   cursor:pointer;
   &:hover{
      border-color: #BE24F0;
      color:#BE24F0;
      background-color:#a8d5ff;
   }
   ${DivCard}:hover & {
      top:1px;
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
const BgDark = styled.div`
   position: absolute;
   width: 100%;
   height: 2.2em;
   bottom: -2.2em;
   background-color: #000000bc;
   transition: .1s ease-in-out;
   ${DivCard}:hover &{
      bottom:0;
   }
`
const H2Name = styled.h2`
   margin: 0;
   align-self:center;
   color: #a8d5ff;
   font-weight: 800;
   font-size: 1.8em;
   text-shadow: 0px 0px 2px #330056;
   @media (max-width: 500px){
      color:red;
   }
`
const H2Normal = styled.h2`
   margin: 0;
   color: #e0e0e0;
   font-weight: 300;
   margin-bottom: 12px;
   text-shadow: 0px 0px 2px white;
`
const Span = styled.span`
   width:100%;
   font-weight:400;
   font-size:1.3em;
   display: inline-block;
   color: #a8d5ff;
   background-color: #4d0080;
   border: 2px solid #a8d5ff;
   border-radius: 3px;
   padding: 3px;
   position:absolute;
   bottom: -30px;
   left: 50%;
   transform: translateX(-50%);
   transition: .1s ease-in-out;
   &:hover{
      color: #4d0080;
      border-color: #4d0080;
      background-color: #a8d5ff;
   }
   ${DivCard}:hover &{
      bottom: 4px;
   }
`