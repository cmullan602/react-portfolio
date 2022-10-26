import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';




export const Bio = () => {
  return (
    <div>
      <div class="road" id="aboutme"></div>
      <React.Fragment >
        <CssBaseline />
        <Container maxWidth="xl" >
          <div>
            <p>I'm orgininally from Arizona where I attended Arizona State University. Two years ago during the middle of COVID I moved up to Seattle Washington to finally escape the heat. I have a strong background in sales and management but I wanted to try something new and I'm excited to explore web developement! </p>
            <p>I love to stay active so during the winter you can find me chasing the freshest powder and during the summer you can find me down by the lake or in the mountains camping. When I'm not exploring the wilderness you can find me at the local bar catching up with friends or at a live music event listening to some tasty licks. Catch you at the next Cap Hill Block Party!</p>
            <img class="img" src="https://media3.giphy.com/media/Rsp9jLIy0VZOKlZziw/giphy.gif?cid=ecf05e47i2bb1p0dp6vc05z8hs18ocrio8n0o1d4v8w4t5kp&rid=giphy.gif&ct=g" alt="obi wan kenobi saying hello there." />
          </div>
        </Container>
      </React.Fragment>
    </div>

  );
}