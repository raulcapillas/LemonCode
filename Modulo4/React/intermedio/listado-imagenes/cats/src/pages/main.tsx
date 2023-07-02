import * as React from "react";
import { SelectorPage } from "../components/selector";
import { CartPage } from "../components/cart";
import { kitties } from "../constants/constants";
import { PuppiesPage } from "../components/puppies";
import { KittiesPage } from "../components/kitties";
import { Box, Grid } from "@mui/material";

export const MainPage: React.FC = () => {
  const [animal, setAnimal] = React.useState<String>(kitties);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <SelectorPage setAnimal={setAnimal}></SelectorPage>
          </Grid>
          <Grid xs={8}>
            {animal == kitties ? (
              <KittiesPage></KittiesPage>
            ) : (
              <PuppiesPage></PuppiesPage>
            )}
          </Grid>

          <Grid xs={4}>
            <CartPage></CartPage>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
