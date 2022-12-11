import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"



export default function Detail() {
  let { detailId } = useParams()
  const [character, setCharacter] = useState({})



  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch((err) => {
        window.alert('No hay personajes con ese ID');
      });
    return setCharacter({});   // IMPORTANTE  ---> ESTO LIMPIA EL STATE CUANDO EL COMPONENTE SE DESMONTA!!
  }, [detailId]);

  console.log(character)

  return <DivContainer>
    <Div>
      <DivImg>
        <Img src={character.image} />
        <H2Name>{character.name}</H2Name>
      </DivImg>
      <DivDetails>
        <H3>Status: {character.status}</H3>
        <H3>Gender: {character.gender}</H3>
        <H3>Specie: {character.species} </H3>
        <H3>Location: {character.location?.name}</H3>
        <H3>Origin: {character.origin?.name}</H3>
      </DivDetails>
        
    </Div>
  </DivContainer>

}

const DivContainer = styled.div`
/* margin-top: 30vh; */
  width: 100%;
  height: 80vh;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Div = styled.div`
  width: 1000px;
  height: 550px;
  border: 2px solid green;
  display: flex;
  align-items: center;
`
const DivDetails = styled.div`
  text-align:start;
  border: 2px solid blue;
  font-size: 1.5rem;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 3rem;
`
const DivImg = styled.div`
  height: 80%;
  width: 35%;
  display:flex;
  flex-direction: column;
  border: 2px solid white;
  justify-content: space-between;
`
const Img = styled.img`
  align-self: flex-start;
  width: 100%;
  border-radius: 15px;
`
const H2Name = styled.h2`
  -webkit-text-stroke: 1px #0583a9;
  -webkit-text-fill-color: #6424a4;
  font-weight: 600;
  font-size:4rem;
  margin-bottom: 1em;
`

const H3 = styled.h3`
  font-size: 2em;
  margin-top: .7em;
`