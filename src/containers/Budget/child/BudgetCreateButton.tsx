import { Button, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../store";
import { Permission } from "../../../constant/Permission.enum";
import BudgetCreateAndUpdateDialog from "./BudgetCreateAndUpdateDialog";
import { MethodType } from "../../../components/SelectInputDialog/enum/SelectInputDialogType.type";

const BudgetCreateButton = () => {
  const { user } = useAppSelector((state) => state.settings);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  if (!user.permissions.includes(Permission.CREATE_BUDGET)) return null;
  return (
    <React.Fragment>
      <Button
        sx={{ mb: 3 }}
        fullWidth
        size={"medium"}
        // color="secondary"
        variant="outlined"
        onClick={handleOpen}
      >
        <Typography variant="button" display="block" gutterBottom>
          Create
        </Typography>
      </Button>
      {open && (
        <BudgetCreateAndUpdateDialog
          methodType={MethodType.CREATE}
          open={open}
          closeEvent={handleClose}
        />
      )}
    </React.Fragment>
  );
};

const MemoizedBudgetCreateButton = React.memo(
  BudgetCreateButton,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedBudgetCreateButton;
