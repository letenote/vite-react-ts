import { Button, Typography } from '@mui/material';
import React from 'react';
import VendorCreateAndUpdateDialog from './VendorCreateAndUpdateDialog';
import { MethodType } from '../../../components/SelectInputDialog/enum/SelectInputDialogType.type';

const VendorCreateButton = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button fullWidth size={'small'} variant="outlined" onClick={handleOpen}>
        <Typography variant="button" display="block" gutterBottom>
          Create
        </Typography>
      </Button>
      {open && (
        <VendorCreateAndUpdateDialog
          methodType={MethodType.CREATE}
          open={open}
          closeEvent={handleClose}
        />
      )}
    </React.Fragment>
  );
};

const MemoizedVendorCreateButton = React.memo(
  VendorCreateButton,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedVendorCreateButton;
