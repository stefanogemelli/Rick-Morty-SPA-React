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
         <Button type='submit'>Add</Button>
         <Span onClick={handleRand}>🎲🎲</Span>
      </Form>
      </DivContainer>
   );
}
const DivContainer = styled.div`
   /* border: 2px solid white; */
   margin-top: 2.5rem;
   width:60%;
   display: flex;
   justify-content: center;
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
   margin-right: 1.2rem;
   background-color: #05050596;
   color: ${c.VERDE1};
   -webkit-text-stroke: .1px  ${c.TURQUEZA};
   outline: none;
   border: none;
   text-align: center;
   border-bottom: 2px solid ${c.TURQUEZA};
   box-shadow: 0px 1px  1px .5px ${c.VERDE1};

   &::placeholder{
      color: ${c.VERDE1};
      -webkit-text-stroke: .4px ${c.TURQUEZA};
      font-weight:300;
      padding: 3px;
      width: 70%;
      box-sizing:border-box;
   }
   &:active{
      background-color:#00b4cc61;
   }
`

const Button = styled.button`
   border-radius: 4px;
   font-size: 2rem;
   font-weight:600;
   /* background: linear-gradient(145deg, #03030348, #00000048); */
   background: #0e0e0e;
   border: 2px solid #00b5cc;
   border-right:none;
   color: #00b5cc;
   -webkit-text-stroke: .2px ${c.VERDE2};
   border-radius: 3px;
   padding: .7rem 1.5rem;
   width: fit-content;
   box-shadow: 1px 0px 2px ${c.TURQUEZA},
   0px 0px 3px 1.5px${c.VERDE2};
   transition: 0.1s;
   &:hover{
      box-shadow: 0px 0px 16px ${c.VERDE2}, 0px 0px 0px 1px ${c.VERDE1};
      color: ${c.VERDE1};
      background-color: #a4d02923;
   }
`
const Span = styled.span`
   letter-spacing:-1.2rem;
   border-radius: 4px;
   font-size: 2rem;
   font-weight:600;
   background: #0e0e0e;
   border: 2px solid #00b5cc;
   border-left: none;
   color: #00b5cc;
   -webkit-text-stroke: .2px ${c.VERDE2};
   border-radius: 3px;
   padding: .5rem 1.7rem .5rem .5rem;
   width: fit-content;
   box-shadow: -1px 0px 2px ${c.TURQUEZA},
   0px 0px 3px 1.5px${c.VERDE2};
   transition: 0.1s;
   &:hover{
      box-shadow: 0px 0px 16px ${c.VERDE2}, 0px 0px 0px 1px ${c.VERDE1};
      color: ${c.VERDE1};
      background-color: #a4d02923;
   }
`
