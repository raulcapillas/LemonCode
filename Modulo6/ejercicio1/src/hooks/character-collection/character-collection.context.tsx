import { CharactersCollectionVm } from "pods/characters-collection/characters-collection.vm";
import { createContext, useContext } from "react";

interface CharacterContext {
  charactersCollection: CharactersCollectionVm;
  setCharactersCollection: (character: CharactersCollectionVm) => void;
}

export const CharacterContext = createContext<CharacterContext>(null);

export const useCharacter = (): CharacterContext => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error("useCharacter must be used within a CharacterProvider");
  }

  return context;
};
