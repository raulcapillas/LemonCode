import axios from "axios";
import { CharacterCollection } from "./character-collection.api-model";
import { BASE_URL } from "common/constants/constans";
import { CHARACTER_COLLECTION_MOCK } from "./character-collection.mock";

const fetchCharacterCollection = (
  params: Record<string, any>
): Promise<CharacterCollection> => {
  const queryParams = new URLSearchParams(params).toString();
  const url = `${BASE_URL}/character${queryParams ? `?${queryParams}` : ""}`;

  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return CHARACTER_COLLECTION_MOCK;
    });
};

export const getCharactersCollection = (
  params: Record<string, any>
): Promise<CharacterCollection> => {
  return fetchCharacterCollection(params);
};
