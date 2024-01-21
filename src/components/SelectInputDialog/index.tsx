import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import React, { useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SelectInputDialogCreateAndUpdate from './SelectInputDialogCreateAndUpdate';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import { SelectInputDialogTypes } from './type/SelectInputDialogTypes.type';
import { selectInputDialogTypeGenerate } from './helper/selectInputDialogTypeGenerate';
import { useAppDispatch, useAppSelector } from '../../store';
import { capitalizeFirstLetter } from '../../helper/populateString';
import LoadingScreen from '../LoadingScreen';
import { getSelectInputOptions } from '../../store/slice/components/actions/getSelectInputOptions';
import NoDataScreen from '../NoDataScreen';
import ConfirmationDialog from '../ConfirmationDialog';
import { deleteSelectInputOption } from '../../store/slice/components/actions/deleteSelectInputOption';
import { selectInputOptionListInterface } from '../../store/slice/components/interface/selectInputOptionsInterface.interface';
import { CreateOrUpdateType } from './type/CreateOrUpdateType.type';
import {
  MethodType,
  SelectInputDialogType,
} from './enum/SelectInputDialogType.type';

const SelectInputDialog = (props: {
  open: boolean;
  backEvent: () => void;
  onSelect: (val: string) => void;
  type: SelectInputDialogTypes;
}) => {
  const _isType = selectInputDialogTypeGenerate(props.type);
  const [selectDialogCreateAndUpdate, setSelectDialogCreateAndUpdate] =
    React.useState<{
      open: boolean;
      type: CreateOrUpdateType;
      populate: selectInputOptionListInterface;
    }>({
      open: false,
      type: MethodType.CREATE,
      populate: {
        id: '',
        name: '',
      },
    });

  const handleSelectDialogCreateAndUpdateOpen = (param: {
    type: CreateOrUpdateType;
    populate: selectInputOptionListInterface;
  }) => {
    setSelectDialogCreateAndUpdate({
      open: true,
      type: param.type,
      populate: { id: param.populate.id, name: param.populate.name },
    });
  };

  const handleSelectDialogCreateAndUpdateClose = () => {
    setSelectDialogCreateAndUpdate({
      open: false,
      type: MethodType.CREATE,
      populate: { id: '', name: '' },
    });
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useAppDispatch();
  const { selectInputOptions } = useAppSelector((state) => state.components);

  const [selectDialogDelete, setSelectDialogDelete] = React.useState<{
    open: boolean;
    loading: boolean;
    id: string;
    name: string;
  }>({
    open: false,
    loading: false,
    id: '',
    name: '',
  });

  const handleSelectDialogDeleteOpen = (
    option: selectInputOptionListInterface
  ) => {
    setSelectDialogDelete({
      open: true,
      loading: false,
      id: option.id,
      name: option.name,
    });
  };

  const handleSelectDialogDeleteClose = () => {
    setSelectDialogDelete({ open: false, loading: false, id: '', name: '' });
  };

  const handleSelectDialogOnDelete = () => {
    setSelectDialogDelete((prev) => ({
      ...prev,
      loading: true,
    }));

    dispatch(
      deleteSelectInputOption({
        type: props.type,
        id: selectDialogDelete.id,
        successCB: handleSelectDialogDeleteClose,
      })
    );
  };

  useEffect(() => {
    if (
      selectInputOptions[_isType].loading &&
      selectInputOptions[_isType].list.length === 0
    ) {
      dispatch(getSelectInputOptions({ type: props.type }));
    }
  }, [selectInputOptions, _isType, dispatch, props]);

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth={'sm'}
        onClose={() => {}}
        aria-labelledby="user-create-dialog"
        disableEscapeKeyDown={true}
        open={props.open}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: 'white' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.backEvent}
              aria-label="close"
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {capitalizeFirstLetter(_isType)}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ height: '100px', p: '35px' }}>
          <Button
            disabled={props.type === SelectInputDialogType.ROLE ? true : false}
            onClick={() =>
              handleSelectDialogCreateAndUpdateOpen({
                type: MethodType.CREATE,
                populate: { id: '', name: '' },
              })
            }
          >
            {`+ Add New ${_isType}`}
          </Button>
        </Box>
        <DialogContent dividers sx={{ height: '300px' }}>
          {selectInputOptions[_isType].loading ? (
            <LoadingScreen
              message={`Please wait, prepare data ${_isType} ...`}
            />
          ) : (
            <List>
              {selectInputOptions[_isType].list.length === 0 ? (
                <NoDataScreen message={`Data ${_isType} is empty`} />
              ) : (
                selectInputOptions[_isType].list.map((option, optionIndex) => {
                  return (
                    <React.Fragment key={optionIndex}>
                      <ListItem
                        dense
                        button
                        onClick={(e) => {
                          e.stopPropagation;
                          props.onSelect(option.name);
                        }}
                        sx={{ p: '10px' }}
                      >
                        <ListItemText primary={option.name} />
                        {props.type !== SelectInputDialogType.ROLE && (
                          <ListItemSecondaryAction>
                            <IconButton
                              aria-label="edit"
                              onClick={(e) => {
                                e.stopPropagation;
                                console.log('edit', option);
                                handleSelectDialogCreateAndUpdateOpen({
                                  type: MethodType.UPDATE,
                                  populate: {
                                    id: option.id,
                                    name: option.name,
                                  },
                                });
                              }}
                            >
                              <EditIcon />
                            </IconButton>
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              disabled={true}
                              onClick={(e) => {
                                e.stopPropagation;
                                console.log('delete', option);
                                handleSelectDialogDeleteOpen(option);
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        )}
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  );
                })
              )}
            </List>
          )}
        </DialogContent>
      </Dialog>
      {selectDialogCreateAndUpdate.open && (
        <SelectInputDialogCreateAndUpdate
          open={selectDialogCreateAndUpdate.open}
          backEvent={handleSelectDialogCreateAndUpdateClose}
          type={props.type}
          populate={selectDialogCreateAndUpdate.populate}
          methodType={selectDialogCreateAndUpdate.type}
        />
      )}
      {selectDialogDelete.open && (
        <ConfirmationDialog
          open={selectDialogDelete.open}
          titleButtonDisagree={'Cancel'}
          titleButtonAgree={'Delete'}
          title={'Delete'}
          subTitle={`Are you sure you want to delete the ${_isType} - ${selectDialogDelete.name} ?`}
          onClose={handleSelectDialogDeleteClose}
          loading={selectDialogDelete.loading}
          onSubmit={handleSelectDialogOnDelete}
        />
      )}
    </React.Fragment>
  );
};

const MemoizedSelectInputDialog = React.memo(
  SelectInputDialog,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedSelectInputDialog;
