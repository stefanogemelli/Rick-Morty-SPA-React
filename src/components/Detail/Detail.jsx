import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../variables";
import MapTransitionDelays from "./MapTransitionDelays";

export default function Detail() {
  let { detailId } = useParams();
  const [character, setCharacter] = useState({});
  const [transitions, setTransitions] = useState(false);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
          setTransitions(true);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({}); // IMPORTANTE  --> ESTO LIMPIA EL STATE CUANDO EL COMPONENTE SE DESMONTA
  }, [detailId]);

  return (
    <DivContainer>
      <Div>
        <DivImg>
          <Img src={character.image} />
          <BoxName>
            <H2Name>{character.name}</H2Name>
          </BoxName>
        </DivImg>

        <DivDetails transitions={transitions} delay={0.5}>
          <MapTransitionDelays
            delay={1}
            Status={character.status}
            Gender={character.gender}
            Specie={character.species}
            Location={character.location?.name}
            Origin={character.origin?.name}
          />
        </DivDetails>
      </Div>
    </DivContainer>
  );
}

const DivContainer = styled.div`
  width: 100%;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
`;
const Div = styled.div`
  width: 750px;
  margin: auto;
  display: flex;
  position: relative;
  overflow: hidden;
  height: 460px;
`;

const DivImg = styled.div`
  height: 100%;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${c.DARK};
  border-radius: 0px 15px;
  border: 2px solid white;
  overflow: hidden;
  padding: 2rem;
  padding-bottom: 3rem;
`;
const Img = styled.img`
  width: 100%;
  border: 2px solid white;
  border-radius: 0px 10px;
`;

const BoxName = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 5px;
  background-color: #ffffff10;
`;

const H2Name = styled.h2`
  font-weight: 300;
  color: ${c.VERDE2};
  -webkit-text-stroke: 0.7px ${c.TURQUEZA};
  font-size: 4rem;
`;

const DivDetails = styled.div`
  text-align: start;
  height: 92%;
  padding: 3rem;
  background-color: ${c.DARK};
  z-index: -1;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top: 4%;
  left: -130px;
  transition: 0.5s ${({ delay }) => delay}s ease-out;
  ${({ transitions }) => transitions && "left: 350px;"}
  border-radius: 0px 15px 15px 0px;
`;
