import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { Link, useLocation } from 'react-router-dom';
import { getBudgets } from '../../../store/slice/page/budget/action/getBudgets';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import MemoizedMUI_Table from '../../../components/Table';
import { TableImpl } from '../../../components/Table/enum/TableImpl';
import BudgetViewDialog from './BudgetViewDialog';
import BudgetCreateAndUpdateDialog from './BudgetCreateAndUpdateDialog';
import { MethodType } from '../../../components/SelectInputDialog/enum/SelectInputDialogType.type';

const BudgetList = () => {
  const dispatch = useAppDispatch();
  const { budget } = useAppSelector((state) => state.pages);
  const { user } = useAppSelector((state) => state.settings);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(getBudgets({ page: value }));
  };

  useEffect(() => {
    dispatch(getBudgets({ page, startDate: '', endDate: '' }));
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

  const [editDialog, setEditDialog] = useState<{
    open: boolean;
    listIndex: number;
  }>({
    open: false,
    listIndex: 0,
  });
  const handleOpenEditDialog = (index: number) =>
    setEditDialog({ open: true, listIndex: index });
  const handleCloseEditDialog = () =>
    setEditDialog({ open: false, listIndex: 0 });

  return (
    <React.Fragment>
      <MemoizedMUI_Table
        impl={TableImpl.BUDGET_PAGE}
        headers={['Name', 'Status', 'Request By', 'Used', 'Cost', 'Created At']}
        getValue={[
          'name',
          'status',
          'requestBy.name',
          'training',
          'cost',
          'createdAt',
        ]}
        datas={budget.list}
        loading={budget.listLoading}
        useAction={true}
        action={{
          view: {
            use: viewListController(user.role),
            onClick: (index: number) => handleOpenViewDialog(index),
          },
          edit: {
            use: editListController(user.role),
            onClick: (index: number) => handleOpenEditDialog(index),
          },
        }}
      />
      <Stack spacing={2} sx={{ alignItems: 'center', mt: 3 }}>
        <Pagination
          page={page}
          count={budget.totalPage}
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/budget${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </Stack>
      {viewDialog.open && (
        <BudgetViewDialog
          open={viewDialog.open}
          closeEvent={handleCloseViewDialog}
          data={budget.list[viewDialog.listIndex]}
        />
      )}
      {editDialog.open && (
        <BudgetCreateAndUpdateDialog
          methodType={MethodType.UPDATE}
          open={editDialog.open}
          closeEvent={handleCloseEditDialog}
          populate={budget.list[editDialog.listIndex]}
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
    case 'hd':
      return true;
    default:
      return false;
  }
};

const MemoizedBudgetList = React.memo(BudgetList, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedBudgetList;
