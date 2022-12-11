import Card from '.././Card/Card';
import styled from 'styled-components';

const BgContainer = styled.div`
   /* margin-top: 50px; */
   display: flex;
   width:100%;
   /* height: fit-content; */
   justify-content: center;
`
const CardsContainer = styled.div`
   display: grid;
   width: 90%;
   grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
   grid-auto-rows: 500px;
   gap: 5px;
   justify-items: center;
   
`


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


