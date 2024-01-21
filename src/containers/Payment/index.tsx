import Container from '@mui/material/Container';
import React, { Suspense, lazy } from 'react';
import PageTitle from '../../components/PageTitle';
import { CircularProgress } from '@mui/material';
const PaymentFilter = lazy(() => import('./child/PaymentFilter'));
const PaymentList = lazy(() => import('./child/PaymentList'));

const Payment = () => {
  return (
    <Container sx={{ pt: 3 }} maxWidth={false}>
      <PageTitle title={'Payment'} backNavigate={'dashboard'} />
      <Suspense
        fallback={
          <CircularProgress color={'primary'} style={{ marginTop: '50px' }} />
        }
      >
        <PaymentFilter />
        <PaymentList />
      </Suspense>
    </Container>
  );
};

const MemoizedPayment = React.memo(Payment, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedPayment;
