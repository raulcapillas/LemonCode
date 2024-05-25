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

export const createScentences = (
  characterID: number,
  text: string
): Promise<Character> => {
  return axios
    .post(`${BASE_URL}/${characterID}/scentences`, { text })
    .then((response) => {
      return response.data;
    });
}

export const updateScentences = (
  characterID: number,
  sentenceID: number,
  text: string
): Promise<Character> => {
  return axios
    .put(`${BASE_URL}/${characterID}/scentences/${sentenceID}`, { text })
    .then((response) => {
      return response.data;
    });
}

export const deleteScentences = (
  characterID: number,
  sentenceID: number
): Promise<Character> => {
  return axios
    .delete(`${BASE_URL}/${characterID}/scentences/${sentenceID}`)
    .then((response) => {
      return response.data;
    });
}