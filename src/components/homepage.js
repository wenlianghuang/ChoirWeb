import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <div style={{ height: '100%' }}>
        <Typography variant="h4" style={{ textAlign: 'center', marginTop: '50px' }}>
          Hello Preload
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/preload"
          sx={{ display: 'block', margin: '50px auto',width: '5cm',height: '60px' }}
        >
          To Preload
        </Button>
      </div>
    </>
  );
}