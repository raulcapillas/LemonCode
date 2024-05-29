import * as React from "react";
import { TextField, Button } from "@mui/material";
import * as classes from "./character.style";
import { useBestScentences } from "hooks";

interface Props {
  addNewScentence: (value: string) => void;
}

export const BestScentencesComponent: React.FC<Props> = ({
  addNewScentence: handleBestScentences,
}) => {
  const { bestScentences, setBestScentences } = useBestScentences();

  const handleOnClick = (newBestScentences: string) => {
    handleBestScentences(newBestScentences);
    setBestScentences("");
  };

  return (
    <div className={classes.bestScentences}>
      <TextField
        id="outlined-multiline-flexible"
        value={bestScentences}
        onChange={(e) => setBestScentences(e.target.value)}
        label="Best scentences"
        multiline
        maxRows={4}
        fullWidth
      />
      <Button
        variant="contained"
        onClick={() => handleOnClick(bestScentences)}
      >
        Save
      </Button>
    </div>
  );
};
