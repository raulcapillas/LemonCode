import React, { FC, createContext, useContext, useState } from "react";
import { DEFAULT_CHARACTERS_COLLECTION } from "common/constants/constans";
import { CharactersCollectionVm } from "pods/characters-collection/characters-collection.vm";
import { CharacterContext } from "./character-collection.context";

interface Props {
  children: React.ReactNode;
}

export const CharacterProvider: FC<Props> = ({ children }) => {
  const [charactersCollection, setCharactersCollection] =
    useState<CharactersCollectionVm>(DEFAULT_CHARACTERS_COLLECTION);

  return (
    <CharacterContext.Provider
      value={{ charactersCollection, setCharactersCollection }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
