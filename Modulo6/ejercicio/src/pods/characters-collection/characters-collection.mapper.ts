import * as apiModel from "./api";
import * as viewModel from "./characters-collection.vm";

export const mapFromApiToVm = (
  characters: apiModel.CharacterCollection
): viewModel.CharactersEntityVm[] => {
  return characters.results.map((character: apiModel.CharacterResult) => ({
    id: character.id,
    name: character.name,
    status: character.status,
    gender: character.gender,
    image: character.image,
    url: character.url,
    created: character.created,
  }));
};
