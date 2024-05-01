import axios from "axios";
import { CharacterCollection } from "./character-collection.api-model";
import { BASE_URL } from "common/constants/constans";
import { CHARACTER_COLLECTION_MOCK } from "./character-collection.mock";

export const getCharactersCollection = (
  page: number
): Promise<CharacterCollection> => {
  return axios
    .get(`${BASE_URL}/character?page=${page}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return CHARACTER_COLLECTION_MOCK;
    });
};
