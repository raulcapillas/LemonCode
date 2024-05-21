import axios from "axios";
import { Character } from "./character.api-model";
import { BASE_URL } from "common/constants/constans";

export const getCharacter = (characterID: number): Promise<Character> => {
  return axios
    .get(`${BASE_URL}/${characterID}`)
    .then((response) => {
      return response.data;
    });
};
