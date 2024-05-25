import * as React from "react";
import { TextField, Button } from "@mui/material";
import * as classes from "./character.style";
import { createScentences } from "./api";

export const BestScentencesComponent: React.FC = () => {

  const [bestScentences, setBestScentences] = React.useState<string>("");

  const handleChange = (scenteces) => {
    createScentences(1, scenteces);
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
        <Button variant="contained" onClick={() => handleChange(bestScentences)}>Save</Button>
      </div>
    );
  };
  
