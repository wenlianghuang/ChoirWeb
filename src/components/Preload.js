import { AppBar, Box, Button, TextField, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
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
  position: 'relative',
  top:0 ,
  left: 0,
  height: '100vh', // 修改高度為100vh
  width: '150px', // 修改寬度為64px
};

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'column', // 將方向改為垂直
  justifyContent: 'flex-start', // 元素靠上對齊
  height: '100%', // 充滿父元素高度
  alignItems: 'flex-start', // 元素靠左對齊
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

export default function Preload() {
  return (
    <>
      <div style={{ height: '100%' }}>
        <AppBar position="relative" color="primary" sx={{ height: '100%', marginBottom: 0 }}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h4" style={{ flexGrow: 1, textAlign: 'center' }}>
              Preload
            </Typography>
          </Toolbar>
        </AppBar>
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
          <Button
            
            color="inherit"
            component={Link}
            to="/"
            sx={{ ...buttonStyle }}
        >
            Preload
        </Button>
        </Box>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100% - 64px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '32px',position: 'relative',top:'-500px' }}>
          <TextField label="Name" variant="outlined" sx={{ marginBottom: '16px' }} />
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',position:'relative',top:'-500px' }}>
          <TextField label="Email" variant="outlined" sx={{ marginBottom: '16px' }} />
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
