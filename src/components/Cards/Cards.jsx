import Card from '.././Card/Card';
import styled from 'styled-components';



export default function Cards({ characters, onClose }) {

   return <BgContainer>
      <CardsContainer>
         {
            Array.isArray(characters)
               ? characters.map(e => <Card key={e.id} character={e} onClose={onClose} />)
               : <h2>Sin cards</h2>
         }
      </CardsContainer>
   </BgContainer>;
}




const BgContainer = styled.div`
   display: flex;
   width:100%;
   justify-content: center;
`
const CardsContainer = styled.div`
   display: grid;
   width: 90%;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
   grid-auto-rows: 450px;
   gap: 5px;
   justify-items: center;
   
`