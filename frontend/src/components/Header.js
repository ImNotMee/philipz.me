import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Philip Zhang
          </Typography>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
