import Container from '@mui/material/Container';
import React, { Suspense, lazy } from 'react';
import PageTitle from '../../components/PageTitle';
import CircularProgress from '@mui/material/CircularProgress';

const TrainingFilter = lazy(() => import('./child/TrainingFilter'));
const TrainingCreateButton = lazy(() => import('./child/TrainingCreateButton'));
const TrainingList = lazy(() => import('./child/TrainingList'));

const Training = () => {
  return (
    <Container sx={{ pt: 3 }} maxWidth={false}>
      <PageTitle title={'Training'} backNavigate={'dashboard'} />
      <Suspense
        fallback={
          <CircularProgress color={'primary'} style={{ marginTop: '50px' }} />
        }
      >
        <TrainingFilter />
        <TrainingCreateButton />
        <TrainingList />
      </Suspense>
    </Container>
  );
};

const MemoizedTraining = React.memo(Training, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedTraining;
