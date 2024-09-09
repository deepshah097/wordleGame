import React from "react";
import { Tile, TileContainer, TileRow, TilesSection } from "./tilesStyled";

export default function Tiles({ guesses, markers }) {
  return (
    <TilesSection>
      <TileContainer>
        {Object.values(guesses).map((word, wordIndex) => (
          <TileRow key={wordIndex}>
            {word.map((letter, i) => (
              <Tile key={i} hint={markers[wordIndex][i]}>
                {letter}
              </Tile>
            ))}
          </TileRow>
        ))}
      </TileContainer>
    </TilesSection>
  );
}
