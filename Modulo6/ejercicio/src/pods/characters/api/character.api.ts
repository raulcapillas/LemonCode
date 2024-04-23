import axios from "axios";
import { Character } from "./character.api-model";
import { DEFAULT_CHARACTER } from "../character.constants";

export const getCharacter = (characterID: number): Promise<Character> => {
  return axios
    .get(`https://rickandmortyapi.com/api/chsaracter/${characterID}`)
    .then((response) => {
      return response.data;
    });
};
