import "./App.css";
import { useEffect } from "react";
import Modal from "react-modal";
import { Main, Header, Heading } from "./indexStyled";
import Keyboard from "./components/Keyboard";
import Tiles from "./components/Tiles";
import useWordle from "./hooks/useWordle";

function App() {
  const {
    guesses,
    handleClick,
    markers,
    handleKeyDown,
    isModalVisible,
    round,
    handleModalClose,
  } = useWordle();

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Main>
        <Header>Welcome to WORDLE Game</Header>
        <Tiles guesses={guesses} markers={markers} />
        <Keyboard
          round={round.current}
          guesses={guesses}
          markers={markers}
          handleClick={handleClick}
        />
      </Main>
      {isModalVisible.show && (
        <Modal
          isOpen={true}
          onRequestClose={handleModalClose}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <Heading>{isModalVisible.message}</Heading>
        </Modal>
      )}
    </>
  );
}

export default App;
