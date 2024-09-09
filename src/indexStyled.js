import styled from "styled-components";
import Modal from "react-modal";

export const Main = styled.main`
  font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;
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

export const Heading = styled.h2`
  border-bottom: 1px solid #3a3a3c;
  padding-bottom: 8px;
  font-weight: 700;
  font-size: 3.6rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;

export const ModalStyled = styled(Modal)`
  content: {
    top: "50%";
    left: "50%";
    right: "auto";
    bottom: "auto";
    marginright: "-50%";
    transform: "translate(-50%, -50%)";
  }
`;
