import { CssBaseline, Grid } from '@mui/material';
import { memo } from 'react';
import { Fragment } from 'react';
import wallpaper from '../../../assets/jed-villejo-bEcC0nyIp2g-unsplash.webp';

export const LoginBackground = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={8}
        sx={{
          // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundImage: `url(${wallpaper})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Fragment>
  );
};

const MemoizedLoginBackground = memo(
  LoginBackground,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedLoginBackground;
