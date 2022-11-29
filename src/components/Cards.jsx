import '../styles/Cards.css'
import Card from './Card';

export default function Cards({ characters }) {

   // console.log(props)

   // const { characters } = props;  // {characters: Array}
   // console.log(characters)

   const cardList = characters.map(e => <Card key={e.name} name={e.name} species={e.species} gender={e.gender} image={e.image} onClose={() => alert('Emulamos que se cierra la card')} />)

   return <div className='cardList'>
      {cardList}
   </div>;
}


