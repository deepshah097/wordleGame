import React, { useEffect, useState } from "react";
import {
  Flex,
  KeyboardButton,
  KeyboardRow,
  KeyboardSection,
} from "./keyboardStyled";
import { keyboardRows } from "./constant";
import BackspaceIcon from "../../assets/images/backArrow.svg";

export default function Keyboard({ handleClick, guesses, markers, round }) {
  const [keyList, setKeyList] = useState([]);
  const [keyValueList, setKeyValueList] = useState([]);

  const setData = () => {
    setKeyList([...[0, 1, 2, 3, 4, 5].map((i) => guesses[i])].flat());
    setKeyValueList([...[0, 1, 2, 3, 4, 5].map((i) => markers[i])].flat());
  };

  useEffect(() => {
    setData();
  }, [round]); // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <KeyboardSection>
      {keyboardRows.map((keys, i) => (
        <KeyboardRow key={i}>
          {i === 1 && <Flex item={0.5} />}
          {keys.map((key) => (
            <KeyboardButton
              hint={keyValueList[keyList.lastIndexOf(key)]}
              key={key}
              onClick={() => handleClick(key)}
              flex={["enter", "backspace"].includes(key) ? 1.5 : 1}
            >
              {key === "backspace" ? (
                <img src={BackspaceIcon} alt="backarrow" />
              ) : (
                key
              )}
            </KeyboardButton>
          ))}
          {i === 1 && <Flex item={0.5} />}
        </KeyboardRow>
      ))}
    </KeyboardSection>
  );
}
