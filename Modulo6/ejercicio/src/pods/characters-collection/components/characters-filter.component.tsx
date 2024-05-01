import React, { FC, useState } from "react";
import { Paper } from "@mui/material";
import SearchBar from "material-ui-search-bar";
import { useCharacter } from "hooks/character-collection/character-collection.context";

export const CharactersFilterContainer: FC = () => {
  const [searched, setSearched] = useState<string>("");
  const { charactersCollection, setCharactersCollection } = useCharacter();

  const requestSearch = (searchedVal: string) => {
    const filteredRows = charactersCollection.charactersList.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setCharactersCollection({
      ...charactersCollection,
      charactersList: filteredRows,
    });
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <Paper>
      <SearchBar
        value={searched}
        onChange={(searchVal) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
        placeholder="Search by name..."
      />
    </Paper>
  );
};
