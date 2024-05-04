import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  CardHeader,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Character } from "./api";

interface CharacterProps {
  character: Character;
}

export const CharacterComponent: React.FC<CharacterProps> = ({ character }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }}>
      <CardHeader title={character.name} subheader={character.status} />
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
