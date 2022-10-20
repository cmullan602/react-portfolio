import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid'; 

import data from "./portfolioData.js"


export default function ActionAreaCard() {
  return (
  <Grid container spacing={2}>
    {data.map(({id, title, description, image}) => (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea key={id}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="bloggingtech"
        />
        <CardContent key={id}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    ))}
  </Grid>
  )
}
