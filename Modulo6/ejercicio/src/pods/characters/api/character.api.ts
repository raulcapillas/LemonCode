import axios from "axios";
import { Character } from "./character.api-model";


export const getCharacter = (characterID: number): Promise<Character> => {
    return axios.get(`https://rickandmortyapi.com/api/character/${characterID}`).then((response) => {
        return response.data;
    });
}