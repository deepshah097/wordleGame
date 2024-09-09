import "./App.css";
import { useEffect } from "react";
import { Main, Header } from "./indexStyled";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";
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
  }, [handleKeyDown]);

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
          handleModalClose={handleModalClose}
          message={isModalVisible.message}
        />
      )}
    </>
  );
}

export default App;
