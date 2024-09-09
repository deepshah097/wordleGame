import styled, { keyframes, css } from "styled-components";

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

export const TilesSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
export const TileContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 5px;

  height: 420px;
  width: 350px;
`;
export const TileRow = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`;
export const Tile = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #3a3a3c;
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 3.2rem;
  text-transform: uppercase;

  ${({ hint }) => {
    if (hint === "green") {
      return `background-color: #6aaa64;`;
    }
    if (hint === "yellow") {
      return `background-color: #b59f3b;`;
    }
    if (hint === "grey") {
      return `background-color: #3a3a3c;`;
    }
    if (hint === "wrong") {
      return css`
        background-color: red;
        animation: ${shakeAnimation} 0.5s ease;
      `;
    }
  }}

  user-select: none;
`;
