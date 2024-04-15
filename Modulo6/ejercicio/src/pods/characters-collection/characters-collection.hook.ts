import * as React from "react";
import { mapFromApiToVm } from "./characters-collection.mapper";
import { CharactersCollectionVm } from "./characters-collection.vm";
import { getCharactersCollection } from "./api";

export const useCharactersCollection = () => {
  const [charactersCollection, setCharactersCollection] =
    React.useState<CharactersCollectionVm>({} as CharactersCollectionVm);

  const loadCharactersCollection = () => {
    getCharactersCollection().then((result) => {
      setCharactersCollection(mapFromApiToVm(result));
    });
  };

  return { charactersCollection, loadCharactersCollection };
};
