import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import MemoizedMUI_Table from "../../../components/Table";
import { TableImpl } from "../../../components/Table/enum/TableImpl";
import { getTrainings } from "../../../store/slice/page/training/action/getTrainings";
import TrainingViewDialog from "./TrainingViewDialog";
import { RoleType } from "../../../constant/Permission.enum";

const TrainingList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { training } = useAppSelector((state) => state.pages);
  const { user } = useAppSelector((state) => state.settings);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(getTrainings({ page: value }));
  };

  useEffect(() => {
    dispatch(getTrainings({ page }));
  }, [dispatch, page]);

  const [viewDialog, setViewDialog] = useState<{
    open: boolean;
    listIndex: number;
  }>({
    open: false,
    listIndex: 0,
  });
  const handleOpenViewDialog = (index: number) =>
    setViewDialog({ open: true, listIndex: index });
  const handleCloseViewDialog = () =>
    setViewDialog({ open: false, listIndex: 0 });
  const handleOpenEditDialog = (index: number) => {
    return navigate(`/training/create?u=${training.list[index].id}`);
  };

  return (
    <React.Fragment>
      <MemoizedMUI_Table
        impl={TableImpl.TRAINING_PAGE}
        headers={[
          "Training Name",
          "Type",
          "Participants",
          "Budget",
          "Status",
          "Cost",
          "Date",
        ]}
        getValue={[
          "name",
          "trainingType.name",
          "participants",
          "budget.cost",
          "payments.isPaid",
          "cost",
          "startDate",
        ]}
        datas={training.list}
        loading={training.listLoading}
        useAction={true}
        action={{
          view: {
            use: viewListController(user.role),
            onClick: (_index: number) => handleOpenViewDialog(_index),
          },
          edit: {
            use: editListController(user.role),
            onClick: (_index: number) => handleOpenEditDialog(_index),
          },
        }}
      />
      <Stack spacing={2} sx={{ alignItems: "center", mt: 3 }}>
        <Pagination
          page={page}
          count={training.totalPage}
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/training${item.page === 1 ? "" : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </Stack>
      {viewDialog.open && (
        <TrainingViewDialog
          open={viewDialog.open}
          closeEvent={handleCloseViewDialog}
          data={training.list[viewDialog.listIndex]}
        />
      )}
    </React.Fragment>
  );
};

const viewListController = (role: string): boolean => {
  switch (role) {
    default:
      return true;
  }
};

const editListController = (role: string): boolean => {
  switch (role) {
    case RoleType.HR:
      return true;
    default:
      return false;
  }
};

const MemoizedTrainingList = React.memo(
  TrainingList,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedTrainingList;
