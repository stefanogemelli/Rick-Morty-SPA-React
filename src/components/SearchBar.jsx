import styled from 'styled-components'

const DivVar = styled.div`
   margin-top: 2em;
   margin-bottom: 3em;
`
const Button = styled.button`
   font-size: 1.6em;
   font-weight:600;
   background-image: linear-gradient(to bottom, #64cbff 0%, #79009e 90%);
   -webkit-background-clip: text;  
   background-clip: text;
   color: transparent;
   border: 3px solid #79009e;
   box-shadow: 0px 0px 5px #64cbff9b;
   border-radius: 4px;
   transition: .2s ease-in-out;
   &:hover{
      background-image: linear-gradient(to bottom, #64cbff 40%, #79009e 100%);
      border: 3px solid #64cbff;
   }
`
const Input = styled.input`
   width: 200px;
   font-size: 1.5em;
   background-color: transparent;
   outline: none;
   border: none;
   padding: 5px;
   &::placeholder {
  background-color: #4d0080b5;
  color: #a8d5ff;
  padding: 5px;
  width:  95%;
}
`

export default function SearchBar({ onSearch }) {
   return (
      <DivVar>
         <Input type='search' placeholder="Ingresar Id" />
         <Button onClick={() => onSearch("hola")}>Agregar</Button>
      </DivVar>
   );
}
