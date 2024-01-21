import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { version } from '../../../package.json';

const FooterVersion = () => {
  return (
    <Box sx={{ textAlign: 'left', marginTop: 'auto' }}>
      <Typography variant="caption" gutterBottom sx={{ color: 'grey' }}>
        FWD Training Budget App, Version {version}
      </Typography>
    </Box>
  );
};

const MemoizedFooterVersion = React.memo(
  FooterVersion,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedFooterVersion;
