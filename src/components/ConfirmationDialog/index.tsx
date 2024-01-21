import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';

type ConfirmationDialogType = {
  title: string;
  subTitle: string;
  open: boolean;
  onClose: () => void;
  loading: boolean;
  onSubmit: () => void;
  titleButtonDisagree: string;
  titleButtonAgree: string;
};

const ConfirmationDialog = (props: ConfirmationDialogType) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="confirmation-dialog-title"
      aria-describedby="confirmation-dialog-description"
    >
      <DialogTitle id="confirmation-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="confirmation-dialog-description">
          {props.subTitle}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={props.loading}
          variant="outlined"
          onClick={props.onClose}
        >
          {props.titleButtonDisagree}
        </Button>
        <LoadingButton
          onClick={props.onSubmit}
          loading={props.loading}
          disabled={props.loading}
          variant="contained"
        >
          <span>{props.titleButtonAgree}</span>
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

const MemoizedConfirmationDialog = React.memo(
  ConfirmationDialog,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedConfirmationDialog;
