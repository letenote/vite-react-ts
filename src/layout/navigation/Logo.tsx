import Typography from '@mui/material/Typography';
import LogoFWD from '../../assets/fwd-logo_colour.svg';
import { memo } from 'react';
import React from 'react';

type LogoPropsType = {
  isCollapse: boolean;
};
const Logo = (props: LogoPropsType) => (
  <div style={{ display: 'flex', alignItems: 'baseline' }}>
    {props.isCollapse ? (
      <img src={LogoFWD} alt={'FWD Insurance'} loading="lazy" width={'30px'} />
    ) : (
      <React.Fragment>
        <img
          src={LogoFWD}
          alt={'FWD Insurance'}
          loading="lazy"
          width={'50px'}
        />
        <Typography align="left" variant="caption" sx={{ ml: 0.8 }}>
          Training Budget
        </Typography>
      </React.Fragment>
    )}
  </div>
);

const MemoizedLogo = memo(Logo, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});
export default MemoizedLogo;
