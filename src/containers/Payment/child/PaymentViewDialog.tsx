/* eslint-disable prefer-const */
import Dialog from '@mui/material/Dialog';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import DialogActions from '@mui/material/DialogActions';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import { useAppSelector } from '../../../store';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import Divider from '@mui/material/Divider';
import moment from 'moment';
import { PagePaymentListReducerInterface } from '../../../store/slice/page/payment/interface/PagePaymentReducerInterface.interface';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { green, red } from '@mui/material/colors';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import PaymentUpdateDialog from './PaymentUpdateDialog';
import LoadingScreen from '../../../components/LoadingScreen';

type PaymentViewDialogPropsType = {
  open: boolean;
  closeEvent: () => void;
  data: PagePaymentListReducerInterface;
};

const PaymentViewDialog = (props: PaymentViewDialogPropsType) => {
  const { user } = useAppSelector((state) => state.settings);
  const { payment } = useAppSelector((state) => state.pages);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [update, setUpdate] = useState<{
    open: boolean;
    loading: boolean;
  }>({
    open: false,
    loading: false,
  });

  const updateDialogOpenHandler = () => {
    setUpdate((prev) => ({
      ...prev,
      open: true,
    }));
  };
  const updateDialogCloseHandler = () => {
    setUpdate((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <Dialog
      id={`payment-create-dialog`}
      fullScreen={fullScreen}
      fullWidth={true}
      maxWidth={'sm'}
      aria-labelledby="payment-create-dialog"
      disableEscapeKeyDown={true}
      open={props.open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Payment Detail
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={props.closeEvent}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers sx={{ pb: '45px', p: '24px 32px' }}>
        {payment.detail.loading ? (
          <Box sx={{ height: '650px' }}>
            <LoadingScreen message={'loading..'} />
          </Box>
        ) : (
          <Box sx={{ mt: 1 }}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ mt: 1, mb: 2, fontWeight: 900 }}
            >
              Vendor:
            </Typography>
            <Grid container spacing={2} sx={{ p: 3 }}>
              <Grid
                xs={12}
                md={4}
                item
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <ListItem alignItems="flex-start" sx={{ p: 0 }}>
                  <ListItemAvatar
                    sx={{
                      marginRight: '10px',
                      position: 'relative',
                    }}
                  >
                    <WorkIcon sx={{ fontSize: 40, color: 'grey' }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography variant="body1" gutterBottom>
                          {props.data.vendor.name}
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <span
                          style={{
                            fontSize: '12px',
                            marginTop: '-5px',
                          }}
                        >
                          {props.data.vendor.vendorType.name}
                        </span>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </Grid>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ m: '0px 20px', display: { xs: 'none', md: 'block' } }}
              />
              <Grid
                xs={12}
                md={3}
                item
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <ListItem alignItems="flex-start" sx={{ p: 0 }}>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography variant="body1" gutterBottom>
                          Cost
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <span
                          style={{
                            fontSize: '12px',
                            marginTop: '-5px',
                            fontWeight: 900,
                          }}
                        >
                          {new Intl.NumberFormat('id-ID', {
                            style: 'currency',
                            currency: 'IDR',
                          }).format(Number(props.data.cost))}
                        </span>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </Grid>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ m: '0px 20px', display: { xs: 'none', md: 'block' } }}
              />
              <Grid
                xs={12}
                md={3}
                item
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <ListItem alignItems="flex-start" sx={{ p: 0 }}>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography variant="body1" gutterBottom>
                          Status
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginTop: 0.8,
                        }}
                      >
                        <span
                          style={{
                            fontSize: '14px',
                            fontWeight: 900,
                            color: props.data.isPaid ? green[500] : red[500],
                          }}
                        >
                          {props.data.isPaid ? 'Paid' : 'Unpaid'}
                        </span>
                        {props.data.isPaid && props.data.date !== null && (
                          <span
                            style={{
                              fontSize: '12px',
                              marginLeft: '5px',
                            }}
                          >
                            at{' '}
                            <span
                              style={{
                                fontSize: '10px',
                                fontWeight: 900,
                              }}
                            >
                              {moment(new Date(props.data.date)).format(
                                'DD MMM YYYY'
                              )}
                              .
                            </span>
                          </span>
                        )}
                        {user.permissions.includes('payment/update') &&
                          !props.data.isPaid && (
                            <IconButton
                              aria-label="delete"
                              size="small"
                              sx={{ ml: 1, mt: 0 }}
                              onClick={updateDialogOpenHandler}
                            >
                              <SettingsIcon fontSize="inherit" />
                            </IconButton>
                          )}
                      </span>
                    }
                  />
                </ListItem>
              </Grid>
            </Grid>
            <Divider variant="middle" sx={{ mt: 1, mb: 1, ml: 0, mr: 0 }} />
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ mt: 2, mb: 2, fontWeight: 900 }}
            >
              Invoice:
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mt: -2, mb: 2 }}>
              {props.data.invoice}
            </Typography>
            {props.data.isPaid && props.data.notes !== '' && (
              <React.Fragment>
                <Divider variant="middle" sx={{ mt: 1, mb: 1, ml: 0, mr: 0 }} />
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{ mt: 2, mb: 2, fontWeight: 900 }}
                >
                  Payment Notes:
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ mt: -2, mb: 2 }}>
                  {props.data.notes}
                </Typography>
              </React.Fragment>
            )}
            <Divider variant="middle" sx={{ mt: 1, mb: 1, ml: 0, mr: 0 }} />
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ mt: 2, mb: 2, fontWeight: 900 }}
            >
              Training:
            </Typography>
            <Box>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 900 }}>
                {props.data.training.name}
              </Typography>
              <Typography variant="caption" gutterBottom sx={{ mb: 4 }}>
                Created by, {props.data.training.createdBy.name} (
                {props.data.training.createdBy.departement.name}) at{' '}
                {moment(props.data.createdAt).format('DD MMM YYYY')}.
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ mt: 2, mb: 1, fontWeight: 900 }}
              >
                Objective:
              </Typography>
              <Typography variant="body2" gutterBottom>
                {props.data.training.objective}
              </Typography>
              <Box
                sx={{
                  mt: 4,
                  display: 'flex',
                  alignItems: {
                    xs: 'start',
                    md: 'center',
                  },
                  flexDirection: {
                    xs: 'column',
                    md: 'row',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <PeopleIcon sx={{ color: 'grey', width: '18px', mr: 1 }} />
                  <Typography variant="body2" gutterBottom>
                    {props.data.training.participants.length} Participants.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <QueryBuilderRoundedIcon
                    sx={{
                      color: 'grey',
                      width: '18px',
                      ml: { xs: 0, md: 2 },
                      mr: 1,
                    }}
                  />
                  <Typography variant="body2" gutterBottom>
                    {props.data.training.duration} Hours.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <CalendarMonthRoundedIcon
                    sx={{
                      color: 'grey',
                      width: '18px',
                      ml: { xs: 0, md: 2 },
                      mr: 1,
                    }}
                  />
                  <Typography variant="body2" gutterBottom>
                    {moment(new Date(props.data.training.startDate)).format(
                      'DD/MM/YYYY'
                    )}{' '}
                    -{' '}
                    {moment(new Date(props.data.training.endDate)).format(
                      'DD/MM/YYYY'
                    )}
                  </Typography>
                </Box>
              </Box>
              <Chip
                size="small"
                label={props.data.training.trainingType.name}
                variant="outlined"
                sx={{ mt: 2 }}
              />
            </Box>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <LoadingButton
          loading={false}
          disabled={false}
          variant="outlined"
          size="medium"
          onClick={props.closeEvent}
        >
          <Typography variant="button" display="block" gutterBottom>
            Close
          </Typography>
        </LoadingButton>
      </DialogActions>
      {update.open && (
        <PaymentUpdateDialog
          open={update.open}
          data={props.data}
          closeEvent={updateDialogCloseHandler}
        />
      )}
    </Dialog>
  );
};

const MemoizedPaymentViewDialog = React.memo(
  PaymentViewDialog,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedPaymentViewDialog;
