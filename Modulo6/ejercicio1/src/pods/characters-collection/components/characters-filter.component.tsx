import React, { FC } from "react";
import {
  Paper,
  InputBase,
  IconButton,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useCharacter } from "hooks/character-collection/character-collection.context";
import { useCharactersCollection } from "../character-collection.hook";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

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
      <Box
        sx={{
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          label="Filter"
          id="filter"
          placeholder="Search by name..."
          onChange={(event) => requestSearch(event.target.value)}
          value={name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="Clear"
                  onClick={cancelSearch}
                >
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Paper>
  );
};
