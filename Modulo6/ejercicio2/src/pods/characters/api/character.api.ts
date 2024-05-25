import axios from "axios";
import { Character } from "./character.api-model";
import { BASE_URL } from "common/constants/constans";

const url = `${BASE_URL}/results`;

export const getCharacter = (characterID: number): Promise<Character> => {
  return axios.get(`${url}/${characterID}`).then((response) => {
    return response.data;
  });
};

export const saveScentences = async (
  character: Character
): Promise<boolean> => {
  await axios.put<Character>(`${url}/${character.id}`, character);
  return true;
};
