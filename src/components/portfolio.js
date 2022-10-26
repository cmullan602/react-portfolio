import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';


import data from "./portfolioData.js"


export default function ActionAreaCard() {
  return (
    <Container maxWidth='xl'>

      <Grid2 container spacing={2}>

        {data.map(({ id, title, description, image }) => (
          <Grid2 key={id} xs="auto">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea >
                <CardMedia
                  component="img"
                  height="140"
                  image={image}
                  alt="bloggingtech"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}

      </Grid2>
    </Container>

  )
}
