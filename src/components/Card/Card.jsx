import { Link } from 'react-router-dom';
import styled from 'styled-components'



export default function Card({ info, onClose }) {

   return (
      <DivCard key={info.id}>
         <ButtonCard onClick={() => onClose(info.id)}>X</ButtonCard>
         <DivImg>
            <img src={info.image} alt={info.name} />
            <TitleBg>
               <H2Name>{info.name}</H2Name>
            </TitleBg>
         </DivImg>
         <H2Normal>{info.species}</H2Normal>
         <H2Normal>{info.gender}</H2Normal>

         <Link to={`/detail/${info.id}`} >
            <Span>Más Info...</Span>
         </Link>

      </DivCard>
   );
}


const DivCard = styled.div`
   z-index: 150;
   width: fit-content;
   margin: 1em;
   font-weight:700;  
   border: 2px #573784 solid;
   border-radius: 10px;
   background: #46006661;
   backdrop-filter: blur(15px);
   box-shadow: 0px 0px 10px 1px #573784;
   display: flex;
   flex-direction: column;
   overflow: hidden;
   &:hover{
      /* ButtonCard */
   }
`
const ButtonCard = styled.button`
   z-index:100;
   border-radius: 3px 7px 3px 3px;
   align-self: flex-end;
   background-color: #BE24F0;
   width: 25px;
   color: #a8d5ff;
   border: 2px solid #a8d5ff;
   font-weight: 300;
   font-size: 1.2em;
   position: absolute;
   top:1px;
   right:1px;
   transition: .1s ease-in-out;
   &:hover{
      border-color: #BE24F0;
      color:#BE24F0;
      background-color:#a8d5ff;
   }
`
const DivImg = styled.div`
   position: relative;
   text-align: center;
   display: flex;
   flex-direction: column;
   margin-bottom: 10px;
`
const TitleBg = styled.div`
   text-align: center;
   position: absolute;
   width: 100%;
   bottom: 0;
   background-color: #000000bc;
`
const H2Name = styled.h2`
   margin: 0;
   align-self:center;
   color: #b95cd7;
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
   font-weight:400;
   font-size:1.2em;
   display: inline-block;
   color: #a8d5ff;
   text-shadow: 0px 0px 1px #4d0080b5;
   &:hover{
      color: #4d0080b5;
      text-shadow: 0px 0px 1px #a8d5ff;
   }
`