import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const TrainingCreateButton = () => {
  return (
    <React.Fragment>
      <Button
        sx={{ mb: 3 }}
        fullWidth
        size={'medium'}
        component={Link}
        to="/training/create"
        variant="outlined"
      >
        <Typography variant="button" display="block" gutterBottom>
          Create
        </Typography>
      </Button>
    </React.Fragment>
  );
};

const MemoizedTrainingCreateButton = React.memo(
  TrainingCreateButton,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedTrainingCreateButton;
