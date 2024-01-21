import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import React, { Suspense, lazy } from 'react';
import PageTitle from '../../components/PageTitle';
const VendorCreateButton = lazy(() => import('./child/VendorCreateButton'));
const VendorFilter = lazy(() => import('./child/VendorFilter'));
const VendorList = lazy(() => import('./child/VendorList'));
const Box = lazy(() => import('@mui/material/Box'));

const Vendor = () => {
  return (
    <Container sx={{ pt: 3 }} maxWidth={false}>
      <PageTitle title={'Vendor'} backNavigate={'dashboard'} />
      <Suspense
        fallback={
          <CircularProgress color={'primary'} style={{ marginTop: '50px' }} />
        }
      >
        <VendorFilter />
        <VendorCreateButton />
        <Box sx={{ mt: 3 }}>
          <VendorList />
        </Box>
      </Suspense>
    </Container>
  );
};

const MemoizedVendor = React.memo(Vendor, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedVendor;
