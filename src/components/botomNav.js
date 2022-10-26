import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Paper from '@mui/material/Paper';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);


  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction  icon={<LinkedInIcon  fontSize="large"/>} href="https://www.linkedin.com/in/connor-mullan-a4068a17a"/>
          <BottomNavigationAction  icon={<GitHubIcon fontSize="large"/>} href="https://github.com/cmullan602"/>
          <BottomNavigationAction icon={<MailOutlineIcon fontSize="large"/>} href="mailto:cmullan602@gmail.com"/>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

