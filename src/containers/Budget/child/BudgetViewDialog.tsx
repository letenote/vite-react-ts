/* eslint-disable prefer-const */
import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
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
import { useAppDispatch, useAppSelector } from "../../../store";
import { PageBudgetListReducerInterface } from "../../../store/slice/page/budget/interface/PageBudgetReducerInterface.interface";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Divider from "@mui/material/Divider";
import { updateReviewBudget } from "../../../store/slice/page/budget/action/updateReview";
import { getBudgets } from "../../../store/slice/page/budget/action/getBudgets";
import moment from "moment";
import { updateRejectBudget } from "../../../store/slice/page/budget/action/updateReject";
import { updateApproveBudget } from "../../../store/slice/page/budget/action/updateApprove";
import { showRejectAndApproveButtonController } from "../helper/showButton";
import { RoleType } from "../../../constant/Permission.enum";

type BudgetViewDialogPropsType = {
  open: boolean;
  closeEvent: () => void;
  data: PageBudgetListReducerInterface;
};

const steps = ["Review", "Approve"];

const BudgetViewDialog = (props: BudgetViewDialogPropsType) => {
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.settings);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [review, setReview] = useState<{
    loading: boolean;
  }>({
    loading: false,
  });
  const updateBudgetReviewHandler = () => {
    setReview({ loading: true });
    const _payload = {
      budgetId: props.data.id,
      isReviewed: true,
    };

    dispatch(
      updateReviewBudget({
        data: _payload,
        successCB: () => {
          setReview({ loading: true });
          props.closeEvent();
          dispatch(getBudgets({ page }));
        },
      })
    );
  };
  const updateBudgetRejectHandler = () => {
    setReview({ loading: true });
    const _payload = {
      budgetId: props.data.id,
      isReject: true,
    };

    dispatch(
      updateRejectBudget({
        data: _payload,
        successCB: () => {
          setReview({ loading: true });
          props.closeEvent();
          dispatch(getBudgets({ page }));
        },
      })
    );
  };
  const updateBudgetApproveHandler = () => {
    setReview({ loading: true });
    const _payload = {
      budgetId: props.data.id,
      isApprove: true,
    };

    dispatch(
      updateApproveBudget({
        data: _payload,
        successCB: () => {
          setReview({ loading: true });
          props.closeEvent();
          dispatch(getBudgets({ page }));
        },
      })
    );
  };
  return (
    <Dialog
      id={`budget-create-dialog`}
      fullScreen={fullScreen}
      fullWidth={true}
      maxWidth={"sm"}
      aria-labelledby="budget-create-dialog"
      disableEscapeKeyDown={true}
      open={props.open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Budget Detail
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
      <DialogContent dividers sx={{ pb: "45px" }}>
        <Box sx={{ mt: 1 }}>
          {!props.data.isDraft && (
            <Stepper
              activeStep={activeStepController(props.data)}
              alternativeLabel
            >
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel error={activeStepRejectHandler(index, props.data)}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <span>
                        {index === 1
                          ? isRejected(props.data)
                            ? "Reject"
                            : label
                          : label}
                      </span>
                      {index === 0 && props.data.reviewBy !== null && (
                        <Box sx={stepStyle}>
                          <span>{props.data.reviewBy.name}</span>
                          <span>
                            {moment(props.data.reviewAt).format("DD/MM/YYYY")}
                          </span>
                        </Box>
                      )}
                      {index === 1 && props.data.rejectedByChrmo !== null && (
                        <Box sx={stepStyle}>
                          <span>{props.data.rejectedByChrmo.name}</span>
                          <span>
                            {moment(props.data.rejectedByChrmoAt).format(
                              "DD/MM/YYYY"
                            )}
                          </span>
                        </Box>
                      )}
                      {index === 1 && props.data.rejectedByCfo !== null && (
                        <Box sx={stepStyle}>
                          <span>{props.data.rejectedByCfo.name}</span>
                          <span>
                            {moment(props.data.rejectedByCfoAt).format(
                              "DD/MM/YYYY"
                            )}
                          </span>
                        </Box>
                      )}
                      {index === 1 && props.data.approvedByChrmo !== null && (
                        <Box sx={stepStyle}>
                          <span>{props.data.approvedByChrmo.name}</span>
                          <span>
                            {moment(props.data.approvedByChrmoAt).format(
                              "DD/MM/YYYY"
                            )}
                          </span>
                        </Box>
                      )}
                      {index === 1 && props.data.approvedByCfo !== null && (
                        <Box sx={stepStyle}>
                          <span>{props.data.approvedByCfo.name}</span>
                          <span>
                            {moment(props.data.approvedByCfoAt).format(
                              "DD/MM/YYYY"
                            )}
                          </span>
                        </Box>
                      )}
                    </Box>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          )}
          {!props.data.isDraft && (
            <Divider variant="middle" sx={{ mt: 4, mb: 4, ml: 0, mr: 0 }} />
          )}
          <Typography variant="h6" gutterBottom>
            {props.data.name}
          </Typography>
          <Typography variant="subtitle1" display="block" gutterBottom>
            Cost:{" "}
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(Number(props.data.cost))}
          </Typography>
          <Typography variant="caption" gutterBottom sx={{ mb: 4 }}>
            Request by, {props.data.requestBy.name} (
            {props.data.requestBy.departement.name}) at{" "}
            {moment(props.data.createdAt).format("DD MMM YYYY")}.
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            Information:
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {props.data.information}
          </Typography>
          {activeStepController(props.data) === 2 && (
            <React.Fragment>
              <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                Budget code :
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ fontWeight: 900 }}
              >
                {props.data.code}
              </Typography>
            </React.Fragment>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        {user.role === RoleType.HRO && props.data.reviewBy === null && (
          <LoadingButton
            loading={review.loading}
            disabled={review.loading}
            variant="contained"
            size="medium"
            onClick={updateBudgetReviewHandler}
          >
            <Typography variant="button" display="block" gutterBottom>
              Review
            </Typography>
          </LoadingButton>
        )}
        {(user.role === RoleType.CHRMO || user.role === RoleType.CFO) &&
          props.data.reviewBy !== null && (
            <React.Fragment>
              {showRejectAndApproveButtonController(props.data) && (
                <LoadingButton
                  loading={review.loading}
                  disabled={review.loading}
                  variant="outlined"
                  size="medium"
                  onClick={updateBudgetRejectHandler}
                >
                  <Typography variant="button" display="block" gutterBottom>
                    Reject
                  </Typography>
                </LoadingButton>
              )}
              {showRejectAndApproveButtonController(props.data) && (
                <LoadingButton
                  loading={review.loading}
                  disabled={review.loading}
                  variant="contained"
                  size="medium"
                  onClick={updateBudgetApproveHandler}
                >
                  <Typography variant="button" display="block" gutterBottom>
                    Approve
                  </Typography>
                </LoadingButton>
              )}
            </React.Fragment>
          )}
      </DialogActions>
    </Dialog>
  );
};

const isRejected = (data: PageBudgetListReducerInterface): boolean => {
  let temp = [];
  if (data.rejectedByChrmo !== null) {
    temp.push("reject");
  }
  if (data.rejectedByCfo !== null) {
    temp.push("reject");
  }

  return temp.length > 0 ? true : false;
};

const activeStepRejectHandler = (
  index: number,
  data: PageBudgetListReducerInterface
): boolean => {
  if (index < 1) return false;
  if (data.rejectedByCfo !== null) return true;
  if (data.rejectedByChrmo !== null) return true;
  return false;
};

const activeStepController = (data: PageBudgetListReducerInterface): number => {
  if (data.reviewBy === null) return 0;
  if (data.approvedByChrmo !== null || data.approvedByCfo !== null) return 2;
  if (data.approvedByChrmo === null || data.approvedByCfo === null) return 1;
  return 0;
};

const stepStyle = {
  fontSize: "12px",
  fontWeight: "100",
  display: "flex",
  flexDirection: "column",
};

const MemoizedBudgetViewDialog = React.memo(
  BudgetViewDialog,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedBudgetViewDialog;
