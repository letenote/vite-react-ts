import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { checkAuth } from '../../store/slice/settings/user/actions/checkAuth';
import LoadingScreen from '../LoadingScreen';

const CheckAuth = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <LoadingScreen
      message={'Please wait, we are checking your authorization ...'}
    />
  );
};

const MemoizedCheckAuth = React.memo(CheckAuth, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedCheckAuth;
