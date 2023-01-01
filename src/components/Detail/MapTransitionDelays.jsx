import { useEffect, useState } from "react";
import styled from "styled-components";

export default function MapTransitionDelays(props) {
  const [transitions, setTransitions] = useState(false);
  const keys = Object.keys(props);
  const initialDelay = props[keys.shift()];

  useEffect(() => {
    setTransitions(true);
  }, []);

  return (
    <>
      {keys.map((key, indice) => (
        <H3
          transitions={transitions}
          delay={initialDelay + ((indice + 1) / 5) ** 0.5}
        >
          {`${key}: ${props[key]}`}
        </H3>
      ))}
    </>
  );
}

const H3 = styled.h3`
  font-size: 2.7rem;
  font-weight: 300;
  margin-top: 1.5rem;
  color: #efefef;
  background-color: #ffffff10;
  line-height: 4rem;
  border-radius: 5px;
  opacity: 0;

  transition: 1.2s ${({ delay }) => delay}s ease;
  ${({ transitions }) => transitions && "opacity: 1;"}
`;
