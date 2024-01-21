import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import React, { Suspense, lazy } from 'react';
import PageTitle from '../../components/PageTitle';
const BudgetFilter = lazy(() => import('./child/BudgetFilter'));
const BudgetCreateButton = lazy(() => import('./child/BudgetCreateButton'));
const BudgetList = lazy(() => import('./child/BudgetList'));

const Budget = () => {
  return (
    <Container sx={{ pt: 3 }} maxWidth={false}>
      <PageTitle title={'Budget'} backNavigate={'dashboard'} />
      <Suspense
        fallback={
          <CircularProgress color={'primary'} style={{ marginTop: '50px' }} />
        }
      >
        <BudgetFilter />
        <BudgetCreateButton />
        <BudgetList />
      </Suspense>
    </Container>
  );
};

const MemoizedBudget = React.memo(Budget, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedBudget;
