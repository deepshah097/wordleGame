import { useState, useRef } from "react";
import { TOTAL_WORD_LENGTH } from "../utils/constant";
import { allKeys } from "../components/Keyboard/constant";
import { validateWord } from "../APIs";

const createObjectsList = (length, totalWordLength) =>
  Array.from({ length }).reduce((acc, _, index) => {
    acc[index] = Array(totalWordLength).fill("");
    return acc;
  }, {});

export default function useWordle() {
  const [guesses, setGuesses] = useState(
    createObjectsList(6, TOTAL_WORD_LENGTH)
  );
  const [markers, setMarkers] = useState(
    createObjectsList(6, TOTAL_WORD_LENGTH)
  );
  const [isModalVisible, setModalVisible] = useState({
    show: false,
    message: "",
  });
  let letterIndex = useRef(0);
  let round = useRef(0);

  const win = () => {
    document.removeEventListener("keydown", handleKeyDown);
    setModalVisible({ show: true, message: "You Win! Play Again?" });
  };

  const submit = (score) => {
    const _round = round.current;
    const updatedMarkers = {
      ...markers,
    };

    score.forEach((letter, index) => {
      updatedMarkers[_round][index] =
        letter === 2 ? "green" : letter === 1 ? "yellow" : "grey";
    });

    if (updatedMarkers[_round].every((guess) => guess === "green")) {
      setMarkers(updatedMarkers);
      round.current = _round + 1;
      win();
      return;
    }
    setMarkers(updatedMarkers);
    if (_round === 5) {
      setModalVisible({ show: true, message: "You Loss! Try Again?" });
    } else {
      round.current = _round + 1;
      letterIndex.current = 0;
    }
  };

  const erase = () => {
    const _letterIndex = letterIndex.current;
    const _round = round.current;

    if (_letterIndex !== 0) {
      setGuesses((prev) => {
        const newGuesses = { ...prev };
        newGuesses[_round][_letterIndex - 1] = "";
        return newGuesses;
      });

      setMarkers((prev) => {
        const newMarkers = { ...prev };
        newMarkers[_round] = ["", "", "", "", ""];
        return newMarkers;
      });

      letterIndex.current = _letterIndex - 1;
    }
  };

  const publish = (pressedKey) => {
    const _letterIndex = letterIndex.current;
    const _round = round.current;
    if (_letterIndex < TOTAL_WORD_LENGTH) {
      setGuesses((prev) => {
        const newGuesses = { ...prev };
        newGuesses[_round][_letterIndex] = pressedKey.toLowerCase();
        return newGuesses;
      });
      letterIndex.current = _letterIndex + 1;
    }
  };

  const isWordExist = (word, round) => {
    if (round === 0) return false;
    for (let i = 0; i < round; i++) {
      if (word === guesses[i].join("")) return true;
    }
    return false;
  };

  const handleReset = () => {
    window.location.reload();
  };

  const enterGuess = async (pressedKey) => {
    if (round.current <= TOTAL_WORD_LENGTH) {
      if (pressedKey === "enter" && !guesses[round.current].includes("")) {
        if (!isWordExist(guesses[round.current].join(""), round.current)) {
          const validWord = await validateWord(guesses[round.current].join(""));
          if (validWord?.is_valid_word) {
            submit(validWord?.score);
            return;
          }
        }
        setMarkers((prev) => ({
          ...prev,
          [round.current]: ["wrong", "wrong", "wrong", "wrong", "wrong"],
        }));
        return;
      } else if (pressedKey === "backspace") {
        erase();
      } else if (pressedKey !== "enter") {
        publish(pressedKey);
      }
    } else {
      console.log("No more guesses");
    }
  };

  const handleClick = (key) => {
    const pressedKey = key.toLowerCase();
    enterGuess(pressedKey);
  };

  const handleKeyDown = (e) => {
    const pressedKey = e.key.toLowerCase();

    if (allKeys.includes(pressedKey)) {
      enterGuess(pressedKey);
    }
  };

  const handleModalClose = () => {
    handleReset();
    setModalVisible({ show: false, message: "" });
  };

  return {
    guesses,
    markers,
    isModalVisible,
    handleClick,
    handleKeyDown,
    setModalVisible,
    round,
    handleModalClose,
  };
}
