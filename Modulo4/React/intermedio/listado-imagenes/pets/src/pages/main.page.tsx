import * as React from "react";
import { SelectorContainer } from "../components/selector.container";
import { CartContainer } from "../components/cart.container";
import { kitties } from "../constants/constants";
import { PetsContainer } from "../components/pets.container";
import { Box, Grid } from "@mui/material";
import { kittiesList, puppiesList } from "../constants/constants";

export const MainPage: React.FC = () => {
  const [animal, setAnimal] = React.useState<String>(kitties);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <SelectorContainer setAnimal={setAnimal}></SelectorContainer>
          </Grid>
          <Grid xs={8}>
            {animal == kitties ? (
              <PetsContainer pets={kittiesList} />
            ) : (
              <PetsContainer pets={puppiesList} />
            )}
          </Grid>

          <Grid xs={4}>
            <CartContainer></CartContainer>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
