import * as apiModel from "../characters/api";
import * as apiCharacter from './api'
import * as viewModel from "./characters-collection.vm";

export const mapFromApiToVm = (
  characters: apiCharacter.CharacterCollection
): viewModel.CharactersEntityVm[] => {
  return characters.results.map((character: apiModel.Character) => ({
    id: character.id,
    name: character.name,
    status: character.status,
    gender: character.gender,
    image: character.image,
    url: character.url,
    created: character.created,
  }));
};
