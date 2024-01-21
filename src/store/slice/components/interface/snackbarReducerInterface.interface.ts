export interface snackbarReducerInterface {
  open: boolean;
  autoHideDuration: number;
  anchorOrigin: anchorOriginSnackbarReducerInterface;
  severity: 'success' | 'info' | 'warning' | 'error';
  message: string;
}

export interface anchorOriginSnackbarReducerInterface {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
}

export type setSnackbarPayloadType = {
  open: boolean;
  autoHideDuration: number;
  severity: 'success' | 'info' | 'warning' | 'error';
  message: string;
};
