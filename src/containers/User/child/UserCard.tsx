import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UserCreateAndUpdateDialog from './UserCreateAndUpdateDialog';
import { MethodType } from '../../../components/SelectInputDialog/enum/SelectInputDialogType.type';
import { PageUserListReducerInterface } from '../../../store/slice/page/user/interface/PageUserReducerInterface.interface';
import ConfirmationDialog from '../../../components/ConfirmationDialog';
import { useAppDispatch } from '../../../store';
import { removeUserAction } from '../../../store/slice/page/user/action/removeUser';
import { getUsers } from '../../../store/slice/page/user/action/getUsers';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(() => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: 1,
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
      },
    },
  },
}));

type UserCardPropsType = {
  userData: PageUserListReducerInterface;
};

const UserCard = (props: UserCardPropsType) => {
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [editUser, setEditUser] = useState<{ open: boolean }>({ open: false });
  const handleEditUserClose = () => {
    setEditUser({ open: false });
  };
  const handleEditUserOpen = () => {
    setEditUser({ open: true });
  };

  const [removeUser, setRemoveUser] = useState<{
    open: boolean;
    loading: boolean;
  }>({
    open: false,
    loading: false,
  });
  const handleRemoveUserClose = () => {
    setRemoveUser({ open: false, loading: false });
  };
  const handleRemoveUserOpen = () => {
    setRemoveUser({ open: true, loading: false });
  };

  const handleRemoveUser = () => {
    setRemoveUser((prev) => ({
      ...prev,
      loading: true,
    }));
    dispatch(
      removeUserAction({
        data: { id: props.userData.id },
        successCB: () => {
          handleRemoveUserClose();
          dispatch(getUsers({ page }));
        },
        failedCB: () => {
          setRemoveUser((prev) => ({
            ...prev,
            loading: false,
          }));
        },
      })
    );
  };
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Box sx={{ textAlign: 'left' }}>
            <Chip
              label={props.userData.isActive ? 'Active' : 'Inactive'}
              color={props.userData.isActive ? 'success' : 'error'}
              variant="outlined"
              size="small"
              sx={{ mb: 1 }}
            />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <Typography variant="body1" gutterBottom>
                {props.userData.name}
              </Typography>
              {props.userData.gender === 'male' ? (
                <MaleIcon sx={{ fontSize: 20, ml: 1 }} />
              ) : (
                <FemaleIcon sx={{ fontSize: 20, ml: 1 }} />
              )}
            </Box>
          </Box>
        }
        subheader={
          <Box>
            <Typography variant="body2" gutterBottom sx={{ textAlign: 'left' }}>
              {props.userData.nik}
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ textAlign: 'left' }}>
              {props.userData.email}
            </Typography>
          </Box>
        }
      />
      <CardContent sx={{ textAlign: 'left' }}>
        <Divider sx={{ mb: 2 }} />
        <Typography sx={{ fontSize: '12px' }} color="text.secondary">
          Departemen: {props.userData.departement.name}
        </Typography>
        <Typography sx={{ fontSize: '12px' }} color="text.secondary">
          Level: {props.userData.level.name}
        </Typography>
        <Typography sx={{ fontSize: '12px' }} color="text.secondary">
          Division: {props.userData.division.name}
        </Typography>
      </CardContent>
      <StyledMenu
        id="user-card-menu"
        MenuListProps={{
          'aria-labelledby': 'user-card-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            handleEditUserOpen();
          }}
          disableRipple
        >
          <EditIcon sx={{ mr: 1.5 }} />
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleRemoveUserOpen();
          }}
          disableRipple
        >
          <ToggleOffIcon sx={{ mr: 1.5 }} />
          Inactive
        </MenuItem>
      </StyledMenu>
      {editUser.open && (
        <UserCreateAndUpdateDialog
          open={editUser.open}
          closeEvent={handleEditUserClose}
          methodType={MethodType.UPDATE}
          populate={props.userData}
        />
      )}
      {removeUser.open && (
        <ConfirmationDialog
          open={removeUser.open}
          titleButtonDisagree={'Cancel'}
          titleButtonAgree={'Remove'}
          title={'Remove'}
          subTitle={'Are you sure you want to remove this user ?'}
          onClose={handleRemoveUserClose}
          loading={removeUser.loading}
          onSubmit={handleRemoveUser}
        />
      )}
    </Card>
  );
};

const MemoizedUserCard = React.memo(UserCard, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedUserCard;
