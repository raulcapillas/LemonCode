import React from "react";
import { Character, getCharacter } from "./api";
import { useParams } from "react-router-dom";

export const CharacterContainer: React.FC = () => {

    const [character, setCharacter] = React.useState<Character | null>(null);

    const { id } = useParams();

    React.useEffect(() => {
        getCharacter(+id).then((character) => {
            setCharacter(character);
        });;
    }, []);

    return (
        <h1>{character?.name}</h1>
    )
}