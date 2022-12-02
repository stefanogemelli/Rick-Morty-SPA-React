import styled from 'styled-components'
import { useState } from 'react'

const Form = styled.form`
   margin-top: 2em;
   margin-bottom: 3em;
   display: flex;
   padding: 1em 1.5em;
   border-radius: 5px;
   border: 3px solid #4d0080b5;
   box-shadow: 0px 0px 10px #a8d5ff;
`

const Input = styled.input`
   width: 180px;
   height: 1.5em;
   font-size: 1.5em;
   background-color: transparent;
   outline: none;
   border: none;
   &::placeholder {
     background-color: #4d0080b5;
     color: #a8d5ff;
     padding: 5px;
     width: 95%;
   }
   &:active{
      background-color:#a8d5ff;
      color: #4d0080b5;
   }
`

const Button = styled.button`
   margin-top: 3px;
   height:fit-content;
   padding:0;
   margin-left:.2em;
   display: flex;
   align-items: center;
   position: relative;
   box-sizing: border-box;
   color: #FFF;
   background: #000;
   background-clip: padding-box;
   border: solid 3px transparent;
   border-radius: 4px;
   font-size: 1.5em;
   font-weight:600;
   color: transparent;
   border: none;
   transition:all 0.5s ease-in ;
   &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -5px;
      border-radius: inherit;
      background: linear-gradient(to bottom, #64cbff 0%, #79009e 50%);
      transition: all 0.5s ease-in-out ;
   }
   & span{
      background: linear-gradient(to bottom, #64cbff 0%, #79009e 50%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent; 
      padding: 2px;
      transition: all 2s ease-in-out ;
   }
   &:hover{
   transition: all 0.5s ease-in ;

      &:before {
         transition: all 0.5s ease-in-out ;

         background-image: linear-gradient(to bottom, #64cbff 40%, #79009e 100%);
      }
      & span{
         transition: all 0.5s ease-in-out ;
         background: linear-gradient(to bottom, #64cbff 40%, #79009e 100%);
         -webkit-background-clip: text;
         background-clip: text;
         color: transparent;
      }
   }
`

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("")

   const handleChange = (e) => {
      setId(e.target.value)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      onSearch(id)
      e.target.value = ""
   }

   return (
      <Form onSubmit={handleSubmit}>
         <Input onChange={handleChange} type="text" placeholder="Ingresar Id" />
         <Button><span>Agregar</span></Button>
      </Form>
   );
}
