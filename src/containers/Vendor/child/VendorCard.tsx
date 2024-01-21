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
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MethodType } from '../../../components/SelectInputDialog/enum/SelectInputDialogType.type';
import ConfirmationDialog from '../../../components/ConfirmationDialog';
import { useAppDispatch } from '../../../store';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { PageVendorListReducerInterface } from '../../../store/slice/page/vendor/interface/PageVendorReducerInterface.interface';
import moment from 'moment';
import { removeVendorAction } from '../../../store/slice/page/vendor/action/removeVendor';
import { getVendors } from '../../../store/slice/page/vendor/action/getVendors';
import VendorCreateAndUpdateDialog from './VendorCreateAndUpdateDialog';

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

type VendorCardPropsType = {
  vendorData: PageVendorListReducerInterface;
};

const VendorCard = (props: VendorCardPropsType) => {
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

  const [editVendor, setEditVendor] = useState<{ open: boolean }>({
    open: false,
  });
  const handleEditVendorClose = () => {
    setEditVendor({ open: false });
  };
  const handleEditVendorOpen = () => {
    setEditVendor({ open: true });
  };

  const [removeVendor, setRemoveVendor] = useState<{
    open: boolean;
    loading: boolean;
  }>({
    open: false,
    loading: false,
  });
  const handleRemoveVendorClose = () => {
    setRemoveVendor({ open: false, loading: false });
  };
  const handleRemoveVendorOpen = () => {
    setRemoveVendor({ open: true, loading: false });
  };

  const handleRemoveVendor = () => {
    setRemoveVendor((prev) => ({
      ...prev,
      loading: true,
    }));
    dispatch(
      removeVendorAction({
        data: { id: props.vendorData.id },
        successCB: () => {
          handleRemoveVendorClose();
          dispatch(getVendors({ page }));
        },
        failedCB: () => {
          setRemoveVendor((prev) => ({
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
              label={props.vendorData.isActive ? 'Active' : 'Inactive'}
              color={props.vendorData.isActive ? 'success' : 'error'}
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
                {props.vendorData.name}
              </Typography>
            </Box>
          </Box>
        }
        subheader={
          <Box>
            <Typography variant="body2" gutterBottom sx={{ textAlign: 'left' }}>
              {props.vendorData.phone}
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ textAlign: 'left' }}>
              {props.vendorData.email}
            </Typography>
          </Box>
        }
      />
      <CardContent sx={{ textAlign: 'left' }}>
        <Typography sx={{ mt: 1 }} variant="caption" color="text.secondary">
          Created: {moment(props.vendorData.createdAt).format('DD-MM-YYYY')}
        </Typography>
        <Divider sx={{ mb: 2, mt: 1 }} />
        <Chip label={props.vendorData.vendorType.name} size="small" />
      </CardContent>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            handleEditVendorOpen();
          }}
          disableRipple
        >
          <EditIcon sx={{ mr: 1.5 }} />
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleRemoveVendorOpen();
          }}
          disableRipple
        >
          <ToggleOffIcon sx={{ mr: 1.5 }} />
          Inactive
        </MenuItem>
      </StyledMenu>
      {editVendor.open && (
        <VendorCreateAndUpdateDialog
          open={editVendor.open}
          closeEvent={handleEditVendorClose}
          methodType={MethodType.UPDATE}
          populate={props.vendorData}
        />
      )}
      {removeVendor.open && (
        <ConfirmationDialog
          open={removeVendor.open}
          titleButtonDisagree={'Cancel'}
          titleButtonAgree={'Inactive'}
          title={'Inactive'}
          subTitle={'Are you sure you want to inactive this vendor ?'}
          onClose={handleRemoveVendorClose}
          loading={removeVendor.loading}
          onSubmit={handleRemoveVendor}
        />
      )}
    </Card>
  );
};

const MemoizedVendorCard = React.memo(VendorCard, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedVendorCard;
