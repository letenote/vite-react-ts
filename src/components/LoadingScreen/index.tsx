import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const LoadingScreen = (props: { message: string; marginTop?: string }) => {
  const { marginTop = '50px' } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CircularProgress color={'primary'} style={{ marginTop: marginTop }} />
      <Typography align="center" sx={{ mt: 3 }} variant="body2">
        {props.message}
      </Typography>
    </div>
  );
};

const MemoizedLoadingScreen = React.memo(
  LoadingScreen,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedLoadingScreen;
