import React from "react";
import { PictureInfo } from "../../constants/interfaces";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

interface cartProps {
  petsList: PictureInfo[];
  setPetsList: (p) => void;
}

export const CartContainer: React.FC<cartProps> = ({
  petsList,
  setPetsList,
}) => {
  console.log(petsList);

  const handleClick = (id: string) => {
    const modPetList = petsList.map((p) =>
      p.id === id ? { ...p, selected: false } : p
    );

    setPetsList(modPetList);
  };

  React.useEffect(() => {
    setPetsList(petsList);
  }, [petsList]);

  return (
    <>
      <Typography variant="h5">
        <ShoppingCartIcon />
        Cart
      </Typography>
      <Divider />
      <List>
        {petsList.map((pet) => {
          return pet.selected ? (
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleClick(pet.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar
                  alt={pet.title}
                  src={pet.picUrl}
                  sx={{ width: 56, height: 56 }}
                />
              </ListItemAvatar>
              <ListItemText primary={pet.title} />
            </ListItem>
          ) : (
            ""
          );
        })}
      </List>
    </>
  );
};
