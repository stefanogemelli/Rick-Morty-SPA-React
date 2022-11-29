import "../styles/SearchBar.css"

export default function SearchBar({ onSearch }) {
   return (
      <div className="searchBar">
         <input type='search' placeholder="Ingresar Id" />
         <button onClick={() => onSearch("hola")}>Agregar</button>
      </div>
   );
}
