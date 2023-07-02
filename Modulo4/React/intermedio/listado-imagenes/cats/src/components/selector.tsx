import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ImageBackdrop, ImageButton, ImageSrc, Image } from "./selector.style";
import { kitties, menuImages, puppies } from "../constants/constants";

interface props {
  setAnimal: (animal: String) => void;
}

export const SelectorPage: React.FC<props> = ({setAnimal}) => {

  const handle = (animal: string) => {
    setAnimal(animal);
  };

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      {menuImages.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          onClick={() => handle(image.title)}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
};
