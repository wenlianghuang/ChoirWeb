import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const footerStyle = {
  backgroundColor: '#f5f5f5',
  padding: '16px',
  textAlign: 'center',
  position: 'absolute',
  top: 100,
  left: 0,
  width: '5%',
  display: 'flex',
  justifyContent: 'flex-start', // align to the left
};

export default function HomePage() {
  return(
    <>
      <div style={footerStyle}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Button color="inherit" href="https://www.facebook.com/豐收合唱團-1234567890/" sx={{ mb: 1 }}>
            Facebook
          </Button>
          <Button color="inherit" href="https://www.youtube.com/channel/UC1234567890" sx={{ mb: 1 }}>
            Youtube
          </Button>
          <Button color="inherit" href="https://line.me/R/ti/p/@1234567890">
            Line
          </Button>
        </Box>
      </div>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              豐收合唱團
            </Typography>
            <Button color="inherit" href="https://www.facebook.com/豐收合唱團-1234567890/">
              Facebook
            </Button>
            <Button color="inherit" href="https://www.youtube.com/channel/UC1234567890">
              Youtube
            </Button>
            <Button color="inherit" href="https://line.me/R/ti/p/@1234567890">
              Line
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  ) 
}