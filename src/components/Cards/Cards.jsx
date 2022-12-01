import Card from '.././Card/Card';
import styled from 'styled-components';

const Div = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-evenly;
`


export default function Cards({ characters, onClose }) {


   return <Div>
      {
         Array.isArray(characters)
            ? characters.map(e => <Card key={e.id} info={e} onClose={onClose} />)
            : <h2>Sin cards</h2>
      }
   </Div>;
}


