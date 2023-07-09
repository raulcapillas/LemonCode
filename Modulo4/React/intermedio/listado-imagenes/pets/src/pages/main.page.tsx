import * as React from "react";
import { drawerWidth, kitties } from "../constants/constants";
import { PetsContainer, CartContainer, SelectorContainer } from "../container";
import { Box, Drawer, Grid, IconButton, useTheme } from "@mui/material";
import { kittiesList, puppiesList } from "../constants/constants";
import { PictureInfo } from "../constants/interfaces";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DrawerHeader, Main } from "./main.style";
import { AppBarComponent } from "../components";

export const MainPage: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [pet, setPet] = React.useState<string>(kitties);
  const [petsList, setPetsList] = React.useState<PictureInfo[]>(
    kittiesList.concat(puppiesList)
  );

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBarComponent open={open} handleDrawer={handleDrawer} />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawer}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Grid item xs={3}>
            <CartContainer
              petsList={petsList}
              setPetsList={setPetsList}
            ></CartContainer>
          </Grid>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SelectorContainer setPet={setPet}></SelectorContainer>
            </Grid>
            <Grid item xs={12}>
              <PetsContainer
                pet={pet}
                petsList={petsList}
                setPetsList={setPetsList}
              />
            </Grid>
          </Grid>
        </Main>
      </Box>
    </>
  );
};
