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
    return setCharacter({});
  }, [detailId]);


  // console.log(character)
  return <Div>

    {!character.status ? <SpanA>Vivo</SpanA> : <SpanD>Muerto</SpanD>}
  </Div>

}

const Div = styled.div`
  
`

const SpanA = styled.span`
color: #1da81d;
font-weight: 600;
font-size:2em;
`
const SpanD = styled.span`
color: #b72d2d;
font-weight: 600;
font-size:2em;
`