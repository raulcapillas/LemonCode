import React from "react";
import { CharactersCollectionVm } from "./characters-collection.vm";
import { CharactersTableComponent } from "./components/characters-table.component";

interface Props {
  charactersCollection: CharactersCollectionVm;
}

export const CharactersCollectionComponent: React.FC<Props> = (Props) => {
  const { charactersCollection } = Props;

  return (
    <>
      <CharactersTableComponent
        character={charactersCollection}
      ></CharactersTableComponent>
    </>
  );
};
