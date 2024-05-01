import React from "react";
import { CharactersCollectionComponent } from "./characters-collection.component";
import { CharacterProvider } from "../../hooks/character.provider";

export const CharactersCollectionContainer: React.FC = () => {
  return (
    <CharacterProvider>
      <CharactersCollectionComponent />
    </CharacterProvider>
  );
};
