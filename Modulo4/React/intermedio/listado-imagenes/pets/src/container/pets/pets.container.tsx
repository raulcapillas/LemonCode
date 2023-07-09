import React from "react";
import { PictureInfo } from "../../constants/interfaces";
import { Box, Grid } from "@mui/material";
import { CardComponent } from "../../components";

interface PetsProps {
  pet: string;
  petsList: PictureInfo[];
  setPetsList: (p) => void;
}

export const PetsContainer: React.FC<PetsProps> = ({
  pet,
  petsList,
  setPetsList,
}) => {
  React.useEffect(() => {
    setPetsList(petsList);
  }, [petsList]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const modPetList = petsList.map((p) =>
      p.id === id ? { ...p, selected: event.target.checked } : p
    );

    setPetsList(modPetList);
  };

  const viewPicture = (url: string) => {
    window.open(url, "_blank").focus();
  };

  return (
    <>
      <Box>
        <Grid container>
          {petsList
            .filter((p) => p.id.startsWith(pet))
            .map((p) => (
              <Grid item xs={2} key={p.id} style={{ margin: "2px" }}>
                <CardComponent
                  pet={p}
                  handleChange={handleChange}
                  viewPicture={viewPicture}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};
