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
  const [keyData, setKeyData] = useState({
    keyList: [],
    keyValueList: [],
  });

  const getData = (list) => {
    return Object.values(list).flat();
  };

  const setData = () => {
    setKeyData({
      keyList: getData(guesses),
      keyValueList: getData(markers),
    });
  };

  useEffect(() => {
    setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round]);
  return (
    <KeyboardSection>
      {keyboardRows.map((keys, i) => (
        <KeyboardRow key={i}>
          {i === 1 && <Flex item={0.5} />}
          {keys.map((key) => (
            <KeyboardButton
              hint={keyData.keyValueList[keyData.keyList.lastIndexOf(key)]}
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
