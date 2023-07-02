import React, { useState, useEffect } from "react";
import { Box, Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { cats } from "../constants/constants";
import { CheckBox } from "@mui/icons-material";

export const KittiesPage: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cats.map((cat, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={cat.picUrl}
                  title={cat.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {cat.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <CheckBox></CheckBox>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
