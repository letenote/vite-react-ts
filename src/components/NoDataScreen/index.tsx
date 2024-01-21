import React from 'react';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Typography from '@mui/material/Typography';
import grey from '@mui/material/colors/grey';

const NoDataScreen = (props: { message: string }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <FolderOpenIcon
        style={{ marginTop: '50px', color: grey[400], fontSize: 50 }}
      />
      <Typography
        align="center"
        sx={{ mt: 2, color: grey[500] }}
        variant="body2"
      >
        {props.message}
      </Typography>
    </div>
  );
};

const MemoizedNoDataScreen = React.memo(
  NoDataScreen,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedNoDataScreen;
