import Card from '.././Card/Card';
import styled from 'styled-components';

const Div = styled.div`
margin-top: 50px;
   display: grid;
   grid-template-columns: repeat(4, 400px);
   justify-items: center;
   row-gap: 15px;
   justify-content: center;
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


