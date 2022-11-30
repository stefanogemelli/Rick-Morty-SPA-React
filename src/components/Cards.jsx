import styled from 'styled-components';
import Card from './Card';

const DivCards = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-evenly;
`


export default function Cards({ characters }) {

   const cardList = characters.map(e => <Card key={e.name} name={e.name} species={e.species} gender={e.gender} image={e.image} onClose={() => alert('Emulamos que se cierra la card')} />)

   return <DivCards>
      {cardList}
   </DivCards>;
}


