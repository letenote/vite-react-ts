/* eslint-disable prefer-const */
import Dialog from "@mui/material/Dialog";
import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import DialogActions from "@mui/material/DialogActions";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import { useAppDispatch, useAppSelector } from "../../../store";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import QueryBuilderRoundedIcon from "@mui/icons-material/QueryBuilderRounded";
import Divider from "@mui/material/Divider";
import moment from "moment";
import { PageTrainingListReducerInterface } from "../../../store/slice/page/training/interface/PageTrainingReducerInterface.interface";
import LoadingScreen from "../../../components/LoadingScreen";
import { getTraining } from "../../../store/slice/page/training/action/getTraining";
import {
  setTrainingDetailData,
  setTrainingDetailLoading,
} from "../../../store/slice/page/training/reducer";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { green } from "@mui/material/colors";

type TrainingViewDialogPropsType = {
  open: boolean;
  closeEvent: () => void;
  data: PageTrainingListReducerInterface;
};

const TrainingViewDialog = (props: TrainingViewDialogPropsType) => {
  const dispatch = useAppDispatch();
  const { training } = useAppSelector((state) => state.pages);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    dispatch(
      getTraining({
        id: props.data.id,
        successCB: () => {},
        failedCB: () => {},
      })
    );

    return () => {
      dispatch(setTrainingDetailLoading({ loading: true }));
      dispatch(
        setTrainingDetailData({
          data: null,
        })
      );
    };
  }, [dispatch, props.data.id]);

  return (
    <Dialog
      id={`training-view-dialog`}
      fullScreen={fullScreen}
      fullWidth={true}
      maxWidth={"sm"}
      aria-labelledby="training-view-dialog"
      disableEscapeKeyDown={true}
      open={props.open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Training Detail
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={props.closeEvent}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers sx={{ pb: "45px", p: "24px 32px" }}>
        <Box sx={{ mt: 1 }}>
          {training.detail.loading ? (
            <Box sx={{ height: "650px" }}>
              <LoadingScreen message={"loading.."} />
            </Box>
          ) : (
            <React.Fragment>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 900 }}>
                {training.detail.data.name}
              </Typography>
              <Typography variant="caption" gutterBottom sx={{ mb: 4 }}>
                Created by, {training.detail.data.createdBy.name} (
                {training.detail.data.createdBy.departement.name}) at{" "}
                {moment(training.detail.data.createdAt).format("DD MMM YYYY")}.
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ mt: 2, mb: 1, fontWeight: 900 }}
              >
                Objective:
              </Typography>
              <Typography variant="body2" gutterBottom>
                {training.detail.data.objective}
              </Typography>
              <Box sx={{ mt: 4, display: "flex", alignItems: "center" }}>
                <QueryBuilderRoundedIcon
                  sx={{ color: "grey", width: "18px", mr: 1 }}
                />
                <Typography variant="body2" gutterBottom>
                  {training.detail.data.duration} Hours.
                </Typography>
                <CalendarMonthRoundedIcon
                  sx={{ color: "grey", width: "18px", ml: 2, mr: 1 }}
                />
                <Typography variant="body2" gutterBottom>
                  {moment(new Date(training.detail.data.startDate)).format(
                    "DD/MM/YYYY"
                  )}{" "}
                  -{" "}
                  {moment(new Date(training.detail.data.endDate)).format(
                    "DD/MM/YYYY"
                  )}
                </Typography>
              </Box>
              <Chip
                size="small"
                label={training.detail.data.trainingType.name}
                variant="outlined"
                sx={{ mt: 2 }}
              />
              <Divider variant="middle" sx={{ mt: 3, mb: 1, ml: 0, mr: 0 }} />
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ mt: 2, mb: 2, fontWeight: 900 }}
              >
                Budget:
              </Typography>
              <Box>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ fontWeight: 900 }}
                >
                  {training.detail.data.budget.name}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 900 }}>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(Number(training.detail.data.budget.cost))}
                </Typography>
                <Typography variant="caption" gutterBottom sx={{ mb: 4 }}>
                  Request by, {training.detail.data.budget.requestBy.name} at{" "}
                  {moment(
                    training.detail.data.budget.requestBy.createdAt
                  ).format("DD MMM YYYY")}
                  .
                </Typography>
              </Box>
              <Chip
                size="small"
                label={training.detail.data.budget.code}
                variant="outlined"
                sx={{ mt: 3 }}
              />
              <Divider variant="middle" sx={{ mt: 3, mb: 1, ml: 0, mr: 0 }} />
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ mt: 2, mb: 2, fontWeight: 900 }}
              >
                {training.detail.data.payments.length} Vendors:
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={{ xs: 1, md: 1 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {training.detail.data.payments.map(
                    (payment, paymentIndex) => {
                      return (
                        <Grid item xs={12} sm={6} md={4} key={paymentIndex}>
                          <ListItem
                            key={paymentIndex}
                            alignItems="flex-start"
                            sx={{ p: 0 }}
                          >
                            <ListItemAvatar
                              sx={{
                                marginRight: "-10px",
                                position: "relative",
                              }}
                            >
                              <WorkIcon sx={{ fontSize: 35, color: "grey" }} />
                              <span
                                style={{
                                  fontSize: "7px",
                                  backgroundColor: payment.isPaid
                                    ? green[500]
                                    : "orange",
                                  color: "white",
                                  padding: "5px",
                                  borderRadius: "10px",
                                  marginRight: "5px",
                                  fontWeight: 900,
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  transform: "translate(-80%, 0%)",
                                }}
                              >
                                {payment.isPaid ? "Paid" : "Unpaid"}
                              </span>
                            </ListItemAvatar>
                            <ListItemText
                              primary={payment.vendor.name}
                              secondary={
                                <React.Fragment>
                                  <span
                                    style={{
                                      fontSize: "12px",
                                      marginTop: "-5px",
                                    }}
                                  >
                                    {new Intl.NumberFormat("id-ID", {
                                      style: "currency",
                                      currency: "IDR",
                                    }).format(Number(payment.cost))}
                                  </span>
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                        </Grid>
                      );
                    }
                  )}
                </Grid>
              </Box>
              {training.detail.data.payments.length > 1 && (
                <React.Fragment>
                  <Divider
                    variant="middle"
                    sx={{ mt: 3, mb: 1, ml: 0, mr: 0 }}
                  />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ mt: 2, mb: 2, fontWeight: 900 }}
                  >
                    Total Vendor Cost:
                  </Typography>
                  <Box>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: 900 }}
                    >
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(
                        Number(
                          training.detail.data.payments.reduce(
                            (accumulator, object) => {
                              return accumulator + Number(object.cost);
                            },
                            0
                          )
                        )
                      )}
                    </Typography>
                  </Box>
                </React.Fragment>
              )}
              <Divider variant="middle" sx={{ mt: 3, mb: 1, ml: 0, mr: 0 }} />
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ mt: 2, mb: 2, fontWeight: 900 }}
              >
                {training.detail.data.participants.length} Participants:
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={{ xs: 1, md: 1 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {training.detail.data.participants.map(
                    (participant, participantIndex) => {
                      return (
                        <Grid item xs={12} sm={6} md={4} key={participantIndex}>
                          <ListItem
                            key={participantIndex}
                            alignItems="flex-start"
                            sx={{ p: 0 }}
                          >
                            <ListItemAvatar sx={{ marginRight: "-10px" }}>
                              <Avatar
                                alt="Remy Sharp"
                                sx={{ width: 35, height: 35 }}
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={participant.name}
                              secondary={
                                <span
                                  style={{
                                    fontSize: "12px",
                                    marginTop: "-5px",
                                  }}
                                >
                                  {participant.departement.name}
                                </span>
                              }
                            />
                          </ListItem>
                        </Grid>
                      );
                    }
                  )}
                </Grid>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <LoadingButton
          loading={false}
          disabled={false}
          variant={"outlined"}
          size={"medium"}
          onClick={props.closeEvent}
        >
          <Typography variant="button" display="block" gutterBottom>
            Close
          </Typography>
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

const MemoizedTrainingViewDialog = React.memo(
  TrainingViewDialog,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedTrainingViewDialog;
