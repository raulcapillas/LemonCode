import React from "react";
import { CharactersEntityVm } from "./characters-collection.vm";
import { CharactersTableComponent } from "./components/characters-table.component";

interface Props {
  charactersCollection: CharactersEntityVm[];
}

export const CharactersCollectionComponent: React.FC<Props> = (Props) => {
  const { charactersCollection } = Props;

  return (
    <>
      <CharactersTableComponent></CharactersTableComponent>
      {charactersCollection.map((character) => {
        return <p>{character.name}</p>;
      })}
    </>
  );
};
