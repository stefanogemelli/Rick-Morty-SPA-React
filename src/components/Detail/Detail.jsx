import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import * as c from "../../variables"



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
        <BoxName>
          <H2Name>{character.name}</H2Name>
        </BoxName>
      </DivImg>

      <DivDetails>
        {/* <BoxH3> */}
          <BgH3>
            <H3>Status: {character.status}</H3>
          </BgH3>

          <BgH3>
            <H3>Gender: {character.gender}</H3>
          </BgH3>

          <BgH3>
          <H3>Specie: {character.species} </H3>
          </BgH3>

          <BgH3>
          <H3>Location: {character.location?.name}</H3>
          </BgH3>

          <BgH3>
          <H3>Origin: {character.origin?.name}</H3>
          </BgH3>
        {/* </BoxH3> */}
      </DivDetails>
        
    </Div>
  </DivContainer>

}

const DivContainer = styled.div`
  width: 100%;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
`
const Div = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  position: relative;
  overflow: hidden;
  height: 460px;
  border: 5px solid red;
`

const DivImg = styled.div`
  height: 100%;
  width: 350px;
  display:flex;
  flex-direction: column;
  align-items: center;
  background-color: ${c.DARK};
  border-radius:0px 15px;
  border: 2px solid white;
  overflow: hidden;
  padding: 2rem;
  padding-bottom: 3rem;
`
const Img = styled.img`
  width: 100%;
  border: 2px solid white;
  border-radius:0px 10px;
`

const BoxName = styled.div`
  width:100%;
  margin-top: 2rem;
  padding:1.5rem;
  border-radius: 5px;
  background-color: #ffffff10;
`

const H2Name = styled.h2`
  font-weight: 300;
  color: ${c.VERDE2};
  -webkit-text-stroke: .7px ${c.TURQUEZA};
  font-size:4rem;
`

const DivDetails = styled.div`
  text-align:start;
  height:92%;
  padding: 2rem;
  background-color: ${c.DARK};
  z-index: -1;
  position: absolute;
  top:4%;
  left:-20px;
  transition: 1s;
  left: 350px;
  border-radius: 0px 15px 15px 0px;
`
const BoxH3 = styled.div`
  background-color: #ffffff10;
  padding: 2rem;
  
`
const H3 = styled.h3`
  font-size: 2.7rem;
  font-weight: 300;
  margin-top: 1.5rem;
  color: #efefef;
`
const BgH3 = styled.div`
  background-color: #ffffff10;
  padding: 1px;
  padding-left: 10px;
  margin: 5px 0px;
  margin-top: 1rem;
`