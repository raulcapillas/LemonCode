import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ImageBackdrop, ImageButton, ImageSrc, Image } from "./selector.style";
import { menuImages } from "../../constants/constants";

interface props {
  setPet: (animal: string) => void;
}

export const SelectorContainer: React.FC<props> = ({ setPet: setAnimal }) => {
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
