import styled from "styled-components";
import Modal from "react-modal";

export const Heading = styled.h2`
  padding-bottom: 8px;
  font-weight: 700;
  font-size: 3.6rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;

export const StyledModal = styled(Modal)`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  content {
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
`;

export const Button = styled.button`
  font-size: 1.3rem;
  font-weight: 700;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  background: #37e64c;
  color: white;
  border: none;
  padding: 20px;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background: white;
    color: #37e64c;
    border: 1px solid #37e64c;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;
