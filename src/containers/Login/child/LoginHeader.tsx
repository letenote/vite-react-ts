import { Typography } from '@mui/material';
import { memo } from 'react';
import LogoFWD from '../../../assets/fwd-logo_colour.svg';

const LoginHeader = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography align="left" variant="caption">
        Welcome to
      </Typography>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <img
          src={LogoFWD}
          alt={'FWD Insurance'}
          loading="lazy"
          width={'60px'}
        />
        <Typography align="left" variant="body1" sx={{ ml: 0.5 }}>
          Training Budget
        </Typography>
      </div>
    </div>
  );
};

const MemoizedLoginHeader = memo(LoginHeader, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedLoginHeader;
