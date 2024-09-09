import React from "react";
import { Button, Heading, StyledModal } from "./modalStyled";

export default function index({ handleModalClose, message, children }) {
  return (
    <StyledModal
      isOpen={true}
      onRequestClose={handleModalClose}
      shouldCloseOnEsc={false}
    >
      <Heading>{message}</Heading>
      <Button onClick={handleModalClose}>Play Again</Button>
      {children}
    </StyledModal>
  );
}
