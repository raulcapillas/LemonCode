import React from "react";
import { Character, getCharacter } from "./api";

interface Props {
    characterId: number;
}

export const CharacterContainer: React.FC<Props> = ({characterId}) => {

    const [character, setCharacter] = React.useState<Character | null>(null);

    React.useEffect(() => {
        getCharacter(characterId).then((character) => {
            setCharacter(character);
        });;
    }, []);

    return (
        <h1>{character?.name}</h1>
    )
}