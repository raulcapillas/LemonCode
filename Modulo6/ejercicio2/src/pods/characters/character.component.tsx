import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  CardContent,
  CardMedia,
  Card,
  Typography,
  IconButton,
} from "@mui/material";
import { Character } from "./api";
import * as classes from "./character.style";
import DeleteIcon from "@mui/icons-material/Delete";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

interface CharacterProps {
  character: Character;
  deleteScentenceById: (id: string) => void;
  modifyScentenceById: (id: string) => void;
}

export const CharacterComponent: React.FC<CharacterProps> = ({
  character,
  deleteScentenceById,
  modifyScentenceById,
}) => {
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        image={character.image}
        alt={character.name}
        className={classes.cardMedia}
      />
      <CardContent>
        <Typography variant="body2">
          <Typography variant="h5">{`${character.name} (${character.status})`}</Typography>
          <List dense>
            <ListItem>
              <ListItemText primary={`Species: ${character.species}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Gender: ${character.gender}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Origin: ${character.origin.name}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Location: ${character.location.name}`} />
            </ListItem>
          </List>
        </Typography>
        <Typography variant="body2">
          <Typography variant="h6">Best scentences: </Typography>
          <List dense>
            {character.scentences.map((charScentences) => {
              return (
                <ListItem key={charScentences.id}>
                  <ListItemText primary={charScentences.text} />
                  <IconButton
                    onClick={() => deleteScentenceById(charScentences.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => modifyScentenceById(charScentences.id)}
                  >
                    <ChangeCircleIcon />
                  </IconButton>
                </ListItem>
              );
            })}
          </List>
        </Typography>
      </CardContent>
    </Card>
  );
};
