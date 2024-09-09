import styled from "styled-components";

export const Main = styled.main`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  flex-grow: 1;
  font-weight: 700;
  font-size: clamp(1rem, 4vmin, 4rem);
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;
