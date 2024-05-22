import * as React from "react";
import {
  CardActionArea,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  CardContent,
  CardMedia,
  Card,
  Typography,
} from "@mui/material";
import { Character } from "./api";
import * as classes from "./character.style";

interface CharacterProps {
  character: Character;
}

export const CharacterComponent: React.FC<CharacterProps> = ({ character }) => {
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
          Best scentences
          <List dense>
            <ListItem>
              <ListItemText primary={`Scentences 1`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Scentences 2`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Scentences 3`} />
            </ListItem>
          </List>
        </Typography>
      </CardContent>
    </Card>
  );
};
