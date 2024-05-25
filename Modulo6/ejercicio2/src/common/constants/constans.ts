import { CharactersCollectionVm } from "pods/characters-collection/characters-collection.vm";

export const BASE_URL = "/api";

export const DEFAULT_CHARACTERS_COLLECTION: CharactersCollectionVm = {
  count: 0,
  pages: 0,
  next: "",
  prev: "",
  charactersList: [],
};
