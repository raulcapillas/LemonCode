import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { PictureInfo } from "../../constants/interfaces";

interface cardProps {
  pet: PictureInfo;
  handleChange: (event, pet) => void;
  viewPicture: (url) => void;
}

export const CardComponent: React.FC<cardProps> = ({
  pet,
  handleChange,
  viewPicture,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        sx={{ height: 140, cursor: "pointer" }}
        image={pet.picUrl}
        title={pet.title}
        onClick={() => viewPicture(pet.picUrl)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pet.title}
        </Typography>
      </CardContent>
      <CardActions>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={pet.selected}
                onChange={(event) => handleChange(event, pet.id)}
              />
            }
            label="¡Adoptar!"
          />
        </FormGroup>
      </CardActions>
    </Card>
  );
};
