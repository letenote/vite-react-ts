import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { Link, useLocation } from 'react-router-dom';
import { getUsers } from '../../../store/slice/page/user/action/getUsers';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import LoadingScreen from '../../../components/LoadingScreen';
import UserCard from './UserCard';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import NoDataScreen from '../../../components/NoDataScreen';
import Grid from '@mui/material/Grid';

const UserList = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.pages);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(getUsers({ page: value }));
  };

  useEffect(() => {
    dispatch(getUsers({ page }));
  }, [dispatch, page]);

  return (
    <>
      {user.listLoading ? (
        <Box sx={defaultBoxStyle}>
          <LoadingScreen message="Loading.." />
        </Box>
      ) : user.list.length === 0 ? (
        <Box sx={defaultBoxStyle}>
          <NoDataScreen message={'Users Data is Empty'} />
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {user.list.map((user, userIndex) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={userIndex}>
                  <UserCard key={userIndex} userData={user} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}
      <Stack spacing={2} sx={{ alignItems: 'center', mt: 3 }}>
        <Pagination
          page={page}
          count={user.totalPage}
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/user${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </Stack>
    </>
  );
};

const defaultBoxStyle = {
  minHeight: '530px',
  display: 'flex',
  justifyContent: 'center',
};

const MemoizedUserList = React.memo(UserList, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedUserList;
