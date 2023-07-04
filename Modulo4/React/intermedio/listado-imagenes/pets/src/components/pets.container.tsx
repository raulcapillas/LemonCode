import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { PictureInfo } from "../constants/interfaces";
import { ListComponent } from "./list.component";

interface PetsProps {
  pets: PictureInfo[];
}

export const PetsContainer: React.FC<PetsProps> = ({ pets }) => {
  useEffect(() => {}, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <ListComponent pets={pets}></ListComponent>
        </Grid>
      </Box>
    </>
  );
};
