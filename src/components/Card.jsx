import styled from 'styled-components'

const DivCard = styled.div`
   z-index: 150;
   width: fit-content;
   margin: 1em;
   color: #000000;
   font-weight:700;  
   border: 2px #573784 solid;
   border-radius: 10px;
   background: #46006661;
   backdrop-filter: blur(15px);
   box-shadow: 0px 0px 10px 1px #573784;
   display: flex;
   flex-direction: column;
   overflow: hidden;
`
const ButtonCard = styled.button`
   z-index:100;
   border-radius: 3px 7px 3px 3px;
   align-self: flex-end;
   background-color: #BE24F0;
   color: white;
   font-weight: bold;
   position: absolute;
   top:1px;
   right:1px;
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
   color: #b4b4b4;
   margin-bottom: 12px;
   text-shadow: 0px 0px 2px white;

`

export default function Card({ gender, image, name, onClose, species }) {
   return (
      <DivCard key={name}>
         <ButtonCard onClick={onClose}>X</ButtonCard>
         <DivImg>
            <img src={image} alt={name} />
            <TitleBg>
               <H2Name>{name}</H2Name>
            </TitleBg>
         </DivImg>
         <H2Normal>{species}</H2Normal>
         <H2Normal>{gender}</H2Normal>

      </DivCard>
   );
}
