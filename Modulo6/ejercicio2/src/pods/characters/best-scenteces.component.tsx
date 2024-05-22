import * as React from "react";
import { TextField, Button } from "@mui/material";
import * as classes from "./character.style";

export const BestScentencesComponent: React.FC = () => {
    return (
      <div className={classes.bestScentences}>
        <TextField
          id="outlined-multiline-flexible"
          label="Best scentences"
          multiline
          maxRows={4}
          fullWidth
        />
        <Button variant="contained">Save</Button>
      </div>
    );
  };
  
