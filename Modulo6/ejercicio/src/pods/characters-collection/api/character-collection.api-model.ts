import { Character } from "pods/characters/api";

interface CharacterInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export interface CharacterCollection {
    inf: CharacterInfo;
    results: Character[];
}