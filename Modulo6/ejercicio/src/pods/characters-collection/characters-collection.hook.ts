import * as React from "react";
import { mapFromApiToVm } from "./characters-collection.mapper";
import { CharactersCollectionVm } from "./characters-collection.vm";
import { getCharactersCollection } from "./api";
import { DEFAULT_CHARACTERS_COLLECTION } from "common/constants/constans";

export const useCharactersCollection = () => {
  const [charactersCollection, setCharactersCollection] =
    React.useState<CharactersCollectionVm>(DEFAULT_CHARACTERS_COLLECTION);

  const loadCharactersCollection = (page: number) => {
    getCharactersCollection(page).then((result) => {
      setCharactersCollection(mapFromApiToVm(result));
    });
  };

  return { charactersCollection, loadCharactersCollection };
};
