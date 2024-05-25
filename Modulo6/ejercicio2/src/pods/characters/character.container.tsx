import React from "react";
import { Character, saveScentences, getCharacter, scentences } from "./api";
import { useParams } from "react-router-dom";
import { CharacterComponent } from "./character.component";
import { DEFAULT_CHARACTER } from "./character.constants";
import { BestScentencesComponent } from "./best-scenteces.component";
import * as classes from "./character.style";
import { Divider } from "@mui/material";
import { deleteBestScentencesById } from "./character.business";
import { v4 as uuidv4 } from 'uuid';

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

  const addNewScentence = (scenteces: string) => {
    const newBestScentences: scentences = {
      id: uuidv4(),
      text: scenteces,
    };

    const updateCharacter = {
      ...character,
      scentences: [...character.scentences, newBestScentences],
    };

    setCharacter(updateCharacter);
    saveScentences(updateCharacter);
  };

  const deleteScentenceById = (id: string) => {
    const newBestScentences = deleteBestScentencesById(id, character.scentences);
    setCharacter({ ...character, scentences: newBestScentences });
    saveScentences({ ...character, scentences: newBestScentences });
  }

  return (
    <div className={classes.content}>
      <BestScentencesComponent addNewScentence={addNewScentence} />
      <Divider>&nbsp;</Divider>
      <CharacterComponent character={character} deleteScentenceById={deleteScentenceById}></CharacterComponent>
    </div>
  );
};
