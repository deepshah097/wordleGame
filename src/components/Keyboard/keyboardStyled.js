import styled from "styled-components";

export const KeyboardSection = styled.section`
  height: 200px;
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    width: 80%;
  }
  @media (max-width: 676px) {
    width: 100%;
  }
`;

export const Flex = styled.div`
  ${({ item }) => `flex: ${item};`}
`;

export const KeyboardRow = styled.div`
  width: 100%;
  margin: 0 auto 8px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const KeyboardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0 6px 0 0;
  height: 58px;
  font-size: clamp(0.25rem, 2.5vmin, 1rem);
  ${({ item }) => (item ? `flex: ${item};` : `flex: 1;`)}

  border: 0;
  border-radius: 4px;
  background-color: #818384;
  font-weight: bold;
  text-transform: uppercase;
  color: #d7dadc;

  cursor: pointer;
  user-select: none;

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
      return `background-color: red;`;
    }
  }}
  &:last-of-type {
    margin: 0;
  }
  &:hover {
    background-color: #a5a5a5;
  }
`;
