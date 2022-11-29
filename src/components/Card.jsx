import "../styles/Card.css"

export default function Card({ gender, image, name, onClose, species }) {
   return (
      <div className="card" key={name}>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt={name} />
      </div>
   );
}
