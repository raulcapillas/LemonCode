import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CheckBox } from "@mui/icons-material";
import { PictureInfo } from "../constants/interfaces";

interface PetsProps {
  pets: PictureInfo[];
}

export const ListComponent: React.FC<PetsProps> = ({ pets }) => {
  useEffect(() => {}, []);

  return (
    <>
      {pets.map((pet, index) => (
        <Grid xs={2} sm={4} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={pet.picUrl}
              title={pet.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pet.title}
              </Typography>
            </CardContent>
            <CardActions>
              <CheckBox></CheckBox>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};
