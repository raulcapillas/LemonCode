import { mapFromApiToVm } from "./characters-collection.mapper";
import { CharacterCollection, getCharactersCollection } from "./api";
import { CharactersCollectionVm } from "./characters-collection.vm";

export const useCharactersCollection = (
  setCharactersCollection: (character: CharactersCollectionVm) => void
) => {
  const loadCharactersCollection = () => {
    getCharactersCollection()
      .then((data: CharacterCollection) => {
        setCharactersCollection(mapFromApiToVm(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { loadCharactersCollection };
};
