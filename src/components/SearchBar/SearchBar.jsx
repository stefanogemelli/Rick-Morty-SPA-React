import styled from 'styled-components'
import { useState } from 'react'
import * as c from "../../variables"

function randomCharacterId(arrRand){
   return Math.floor(Math.random()*(arrRand.length))
}
const arr= []
for(let i=1; i<827; i++){
   arr.push(i);
}

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("")
   const [random, setRandom] = useState(arr)


   const handleChange = (e) => {
      setId(e.target.value)
   }

   const handleRand=()=>{
      const indiceRandom = randomCharacterId(random)
      const valRandom = random[indiceRandom]

      onSearch(valRandom)
      setRandom(random.filter(e=>e!==valRandom))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      onSearch(id)
      setRandom(random.filter(elem=>elem!==id))
      setId("")
   }

   return (
      <DivContainer>

      <Form onSubmit={handleSubmit}>
         <Input onChange={handleChange} type="text" placeholder="Insert Id" value={id} />
         <Add type='submit'>Add</Add>
         <Random onClick={handleRand}>🎲🎲</Random>
      </Form>
      </DivContainer>
   );
}
const DivContainer = styled.div`
   align-self:center;
   justify-self:center;
   display: flex;
   justify-content: center;
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
`

const Form = styled.form`
   display: flex;
   padding: 1.5rem 2.5rem;
   border-radius: 5px;
   border: 1px solid ${c.TURQUEZA};
   box-shadow: 0px 0px 12px ${c.VERDE2};
   width: fit-content;
   align-items:center;
   background-color: #1313132d;
   backdrop-filter: blur(5px);
   transition: .2s ease-in;
   &:hover{
      box-shadow: 0px 0px 16px ${c.VERDE2}, 0px 0px 0px 1px ${c.TURQUEZA};
   }
`

const Input = styled.input`
   width: 130px;
   height: 3.4rem;
   font-size: 2.2rem;
   font-weight: 400;
   margin-right: 1.2rem;
   background-color: #10101048;
   color: ${c.TURQUEZA};
   -webkit-text-stroke: .3px  ${c.VERDE2};
   outline: none;
   border: none;
   text-align: center;
   box-shadow: -1px 1px 2px 1px ${c.VERDE2};
   box-shadow: -2px 2px 2px  ${c.TURQUEZA};

   &::placeholder{
      color: ${c.VERDE2};
      -webkit-text-stroke: .4px ${c.TURQUEZA};
      font-weight:300;
      padding: 3px;
      width: 70%;
      box-sizing:border-box;
      opacity: .8;
   }
   &:active{
      background-color:#00b4cc61;
   }
   &:focus{
      background: linear-gradient(220.55deg, ${c.TURQUEZA} 0%, ${c.VERDE2} 10%, );

   }
`

const Add = styled.button`
   background-color: #101010;
   border: none;
   font-size: 2rem;
   padding: .5rem 1.2rem;
   height: 3.5rem;
   font-weight: 300;
   color: ${c.VERDE2};
   -webkit-text-stroke: .7px ${c.TURQUEZA};
   text-decoration: 1.7px underline;
   box-shadow: 0px 1px 2px 1px ${c.TURQUEZA}, 
               0px 2px 5px 1px ${c.VERDE2};
   transition: .1s;
  &:hover{
      -webkit-text-strok: .7px #000000;
      text-shadow: 0px 0px 1px ${c.TURQUEZA},1px 1px 2px ${c.VERDE2};
      box-shadow: 0px 1px 2px 2px ${c.TURQUEZA}, 
                  0px 2px 5px 3px ${c.VERDE2};
   }
  &:active{
    box-shadow: 0px 1px 2px 2px ${c.TURQUEZA}, 
                0px 2px 5px 3px ${c.VERDE2},
                0px 1px 2px 1px ${c.TURQUEZA} inset, 
                0px 1px 5px 2px ${c.VERDE2} inset;
    -webkit-text-strok: none; 
    text-shadow:none;
  }
`
const Random = styled.span`
   letter-spacing:-1.2rem;
   background-color: #101010;
   border: none;
   font-size: 2rem;
   height: 3.5rem;
   padding: .3rem 2rem;
   padding-left: .5rem;
   font-weight: 300;
   color: ${c.VERDE2};
   -webkit-text-stroke: .7px ${c.TURQUEZA};
   box-shadow: 0px 1px 2px 1px ${c.TURQUEZA}, 
               0px 2px 5px 1px ${c.VERDE2};
   transition: .1s;
   user-select:none;

  &:hover{
      -webkit-text-strok: .7px #000000;
      text-shadow: 0px 0px 1px ${c.TURQUEZA},1px 1px 2px ${c.VERDE2};
      box-shadow: 0px 1px 2px 2px ${c.TURQUEZA}, 
                  0px 2px 5px 3px ${c.VERDE2};
   }
  &:active{
    box-shadow: 0px 1px 2px 2px ${c.TURQUEZA}, 
                0px 2px 5px 3px ${c.VERDE2},
                0px 1px 2px 1px ${c.TURQUEZA} inset, 
                0px 1px 5px 2px ${c.VERDE2} inset;
    -webkit-text-strok: none; 
    text-shadow:none;
  }

`
