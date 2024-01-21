import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { Link, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import MemoizedMUI_Table from '../../../components/Table';
import { TableImpl } from '../../../components/Table/enum/TableImpl';
import { getPayments } from '../../../store/slice/page/payment/action/getPayments';
import PaymentViewDialog from './PaymentViewDialog';
import { getPayment } from '../../../store/slice/page/payment/action/getPayment';

const PaymentList = () => {
  const dispatch = useAppDispatch();
  const { payment } = useAppSelector((state) => state.pages);
  const { user } = useAppSelector((state) => state.settings);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(getPayments({ page: value }));
  };

  useEffect(() => {
    dispatch(getPayments({ page }));
  }, [dispatch, page]);

  const [viewDialog, setViewDialog] = useState<{
    open: boolean;
    listIndex: number;
  }>({
    open: false,
    listIndex: 0,
  });
  const handleOpenViewDialog = (index: number) => {
    setViewDialog({ open: true, listIndex: index });
    dispatch(getPayment({ data: payment.list[index] }));
  };
  const handleCloseViewDialog = () =>
    setViewDialog({ open: false, listIndex: 0 });
  // const handleOpenEditDialog = (index: number) => {
  //   return navigate(`/training/create?u=${training.list[index].id}`);
  // };

  return (
    <React.Fragment>
      <MemoizedMUI_Table
        impl={TableImpl.PAYMENT_PAGE}
        headers={['Vendor Name', 'Type', 'Status', 'Created At', 'Cost']}
        getValue={[
          'vendor.name',
          'vendor.vendorType.name',
          'isPaid',
          'createdAt',
          'cost',
        ]}
        datas={payment.list}
        loading={payment.listLoading}
        useAction={true}
        action={{
          view: {
            use: user.permissions.includes('payment/read'),
            onClick: (_index: number) => handleOpenViewDialog(_index),
          },
          edit: {
            use: false,
            onClick: () => {},
          },
        }}
      />
      <Stack spacing={2} sx={{ alignItems: 'center', mt: 3 }}>
        <Pagination
          page={page}
          count={payment.totalPage}
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/payment${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </Stack>
      {viewDialog.open && (
        <PaymentViewDialog
          open={viewDialog.open}
          closeEvent={handleCloseViewDialog}
          data={payment.detail.data}
        />
      )}
    </React.Fragment>
  );
};

const MemoizedPaymentList = React.memo(PaymentList, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedPaymentList;
