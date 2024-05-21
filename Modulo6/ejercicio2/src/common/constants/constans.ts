import { CharactersCollectionVm } from "pods/characters-collection/characters-collection.vm";

//export const BASE_URL = "https://rickandmortyapi.com/api";
export const BASE_URL = "http://localhost:3000/api/character";

export const DEFAULT_CHARACTERS_COLLECTION: CharactersCollectionVm = {
  count: 0,
  pages: 0,
  next: "",
  prev: "",
  charactersList: [],
};
