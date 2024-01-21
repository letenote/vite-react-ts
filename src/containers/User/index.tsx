import React, { Suspense, lazy } from 'react';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import PageTitle from '../../components/PageTitle';
const UserCreateButton = lazy(() => import('./child/UserCreateButton'));
const UserList = lazy(() => import('./child/UserList'));
const UserFilter = lazy(() => import('./child/UserFilter'));

const User = () => {
  return (
    <Container sx={{ pt: 3 }} maxWidth={false}>
      <PageTitle title={'User'} backNavigate={'dashboard'} />
      <Suspense
        fallback={
          <CircularProgress color={'primary'} style={{ marginTop: '50px' }} />
        }
      >
        <UserFilter />
        <UserCreateButton />
        <UserList />
      </Suspense>
    </Container>
  );
};

const MemoizedUser = React.memo(User, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedUser;
