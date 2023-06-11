import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const oceanBackgroundStyle = {
  backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  height: 'calc(100vh - 64px)', // set height to 100% minus the height of the footer
};

const footerStyle = {
  backgroundColor: '#ffffcc',
  padding: '16px',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  left: 0,
  height: '64px', // set height to 64px
  width: '100%', // set width to 100%
};

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'row', // change to row
  height: '100%',
  justifyContent: 'pace-between', // change to flex-start
  alignItems: 'center', // change to center
};

const buttonStyle = {
  fontSize: '24px',
  marginRight: '16px', // add margin to separate buttons
  color: '#000000', // set color to black
  '&:hover': {
    backgroundColor: '#000000', // set background color to black on hover
    color: '#ffffcc', // set text color to white on hover
  },
};

export default function HomePage() {
  return (
    <>
      <div style={{ height: '100%' }}>
        <AppBar position="relative" color="primary" sx={{ height: '100%', marginBottom: 0 }}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h4" style={{ flexGrow: 1, textAlign: 'center' }}>
              豐收聖樂團
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div style={{ ...oceanBackgroundStyle, padding: '16px', textAlign: 'center', marginTop: '0px' }}>
        {/* Add content for yellow section */}
      </div>
      <div style={oceanBackgroundStyle}>
        {/* Add ocean background image */}
      </div>
      <div style={footerStyle}>
        <Box sx={{ ...buttonContainerStyle }}>
          <Button color="inherit" href="https://www.facebook.com/豐收聖樂團-1234567890/" sx={{ ...buttonStyle }}>
            Facebook
          </Button>
          <Button color="inherit" href="https://www.youtube.com/channel/UC1234567890" sx={{ ...buttonStyle }}>
            Youtube
          </Button>
          <Button color="inherit" href="https://line.me/R/ti/p/@1234567890" sx={{ ...buttonStyle }}>
            Line
          </Button>
        </Box>
      </div>
    </>
  );
}
