import { Character } from "pods/characters/api";

export interface CharacterInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface CharacterCollection {
  info: CharacterInfo;
  results: Character[];
}
