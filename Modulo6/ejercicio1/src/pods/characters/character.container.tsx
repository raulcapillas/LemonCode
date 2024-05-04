import React from "react";
import { Character, getCharacter } from "./api";
import { useParams } from "react-router-dom";
import { CharacterComponent } from "./character.component";
import { DEFAULT_CHARACTER } from "./character.constants";

export const CharacterContainer: React.FC = () => {
  const [character, setCharacter] = React.useState<Character>(DEFAULT_CHARACTER);

  const { id } = useParams();

  React.useEffect(() => {
    getCharacter(+id).then((character) => {
      setCharacter(character);
    }).catch((error) => {
        console.log(error);
        setCharacter(DEFAULT_CHARACTER);
    });
  }, []);

  return <CharacterComponent character={character}></CharacterComponent>;
};
