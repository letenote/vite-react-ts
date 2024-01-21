import { Button, Typography } from '@mui/material';
import React from 'react';
import UserCreateAndUpdateDialog from './UserCreateAndUpdateDialog';
import { MethodType } from '../../../components/SelectInputDialog/enum/SelectInputDialogType.type';

const UserCreateButton = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button
        fullWidth
        size={'small'}
        variant="outlined"
        onClick={handleOpen}
        sx={{ mb: 3 }}
      >
        <Typography variant="button" display="block" gutterBottom>
          Create
        </Typography>
      </Button>
      {open && (
        <UserCreateAndUpdateDialog
          methodType={MethodType.CREATE}
          open={open}
          closeEvent={handleClose}
        />
      )}
    </React.Fragment>
  );
};

const MemoizedUserCreateButton = React.memo(
  UserCreateButton,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedUserCreateButton;
