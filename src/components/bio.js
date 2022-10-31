import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import data from './bioData';
import Grid2 from '@mui/material/Unstable_Grid2';





export const Bio = () => {
  return (
    <div>
      <div class="road" id="aboutme"></div>
      <React.Fragment >
        <CssBaseline />
        <Container maxWidth="md" >
          <div>
            <h1>Hi! I'm Connor</h1>
            <p class="bio">I'm orgininally from Arizona where I attended Arizona State University. Two years ago during the middle of COVID I moved up to Seattle Washington to finally escape the heat. I have a strong background in sales and management but I wanted to try something new and enrolled in a full stack code bootcamp at the University of Washington where I've mastered the following technologies: </p>
            <Grid2 container spacing={1} id="icon-flow">
              {data.map(({id, title, icon}) => (
                <Grid2 key={id} id="flex-col">
                  <img class="icon" src={icon} alt="description" />
                  <span>{title}</span>
                </Grid2>
              ))}
            </Grid2>
            <p class="bio">I love to stay active so during the winter you can find me chasing the freshest powder and during the summer you can find me down by the lake or in the mountains camping. When I'm not exploring the wilderness you can find me at the local bar catching up with friends or at a live music event listening to some tasty licks.</p>
            <h2>Thanks for coming check out my work below!</h2>
            <img class="img" src="https://media3.giphy.com/media/Rsp9jLIy0VZOKlZziw/giphy.gif?cid=ecf05e47i2bb1p0dp6vc05z8hs18ocrio8n0o1d4v8w4t5kp&rid=giphy.gif&ct=g" alt="obi wan kenobi saying hello there." />
          </div>
        </Container>
      </React.Fragment>
    </div>

  );
}