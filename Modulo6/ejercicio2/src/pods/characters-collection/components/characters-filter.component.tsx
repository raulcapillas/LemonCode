import React, { FC } from "react";
import { Paper } from "@mui/material";
import SearchBar from "material-ui-search-bar";
import { useCharacter } from "hooks/character-collection/character-collection.context";
import { useCharactersCollection } from "../character-collection.hook";

interface Props {
  name: string;
  setName: (name: string) => void;
}

export const CharactersFilterContainer: FC<Props> = ({ name, setName }) => {
  const { setCharactersCollection } = useCharacter();

  const { loadCharactersCollection } = useCharactersCollection(
    setCharactersCollection
  );

  const requestSearch = (name: string) => {
    loadCharactersCollection({ name });
    setName(name);
  };

  const cancelSearch = () => {
    setName("");
  };

  return (
    <Paper>
      <SearchBar
        value={name}
        onChange={(searchName) => requestSearch(searchName)}
        onCancelSearch={() => cancelSearch()}
        placeholder="Search by name..."
      />
    </Paper>
  );
};
