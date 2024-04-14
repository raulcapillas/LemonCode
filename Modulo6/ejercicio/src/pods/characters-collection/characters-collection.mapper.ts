import * as apiModel from "../characters/api";
import * as apiCharacter from "./api";
import * as viewModel from "./characters-collection.vm";

export const mapFromApiToVm = (
  characters: apiCharacter.CharacterCollection
): viewModel.CharactersCollectionVm => {
  return {
    count: characters.info.count,
    pages: characters.info.pages,
    next: characters.info.next,
    prev: characters.info.prev,
    charactersList: mapCharactersCollection(characters.results),
  };
};

const mapCharactersCollection = (
  characters: apiModel.Character[]
): viewModel.CharactersEntityVm[] => {
  return characters.map((character: apiModel.Character) => ({
    id: character.id,
    name: character.name,
    status: character.status,
    gender: character.gender,
    image: character.image,
    url: character.url,
    created: character.created,
  }));
};
