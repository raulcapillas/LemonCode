import axios from "axios";
import { CharacterCollection } from "./character-collection.api-model";


export const getCharactersCollection = (): Promise<CharacterCollection> => {
    return axios.get("https://rickandmortyapi.com/api/character").then((response) => {
        return response.data;
    })
};