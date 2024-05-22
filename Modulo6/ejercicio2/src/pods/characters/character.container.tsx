import React from "react";
import { Character, getCharacter } from "./api";
import { useParams } from "react-router-dom";
import { CharacterComponent } from "./character.component";
import { DEFAULT_CHARACTER } from "./character.constants";
import { BestScentencesComponent } from "./best-scenteces.component";
import * as classes from "./character.style";
import { Divider, Typography } from "@mui/material";

export const CharacterContainer: React.FC = () => {
  const [character, setCharacter] =
    React.useState<Character>(DEFAULT_CHARACTER);

  const { id } = useParams();

  React.useEffect(() => {
    getCharacter(+id)
      .then((character) => {
        setCharacter(character);
      })
      .catch((error) => {
        console.log(error);
        setCharacter(DEFAULT_CHARACTER);
      });
  }, []);

  return (
    <div className={classes.content}>
      <Divider><Typography variant="h5">{`${character.name} (${character.status})`}</Typography></Divider>
      <BestScentencesComponent />
      <Divider>&nbsp;</Divider>
      <CharacterComponent character={character}></CharacterComponent>
    </div>
  );
};
