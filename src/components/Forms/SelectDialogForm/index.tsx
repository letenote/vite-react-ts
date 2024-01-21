import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SelectInputDialog from '../../SelectInputDialog';
import { Controller } from 'react-hook-form';
import { SelectInputDialogTypes } from '../../SelectInputDialog/type/SelectInputDialogTypes.type';

type SelectDialogFormType = {
  id: string;
  name: string;
  label: string;
  value: string;
  required: boolean;
  style: {
    marginLeft: string | number;
    width: string;
  };
  error: boolean;
  helperText: string;
  disabled: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  onSelect: (val: string) => void;
  registerField: string;
  SelectInputDialogType: SelectInputDialogTypes;
};

const SelectDialogForm = (props: SelectDialogFormType) => {
  const [selectDialog, setSelectDialog] = React.useState<{ open: boolean }>({
    open: false,
  });

  const handleSelectDialogOpen = () => {
    setSelectDialog({ open: true });
  };

  const handleSelectDialogClose = () => {
    setSelectDialog({ open: false });
  };

  return (
    <React.Fragment>
      <FormControl
        error={props.error}
        disabled={props.disabled}
        sx={{
          marginTop: 2,
          marginBottom: 1,
          ml: {
            xs: 0,
            md: props.style.marginLeft,
          },
          width: {
            xs: '100%',
            md: props.style.width,
          },
        }}
      >
        <Controller
          control={props.control}
          rules={{
            required: { value: props.required, message: props.helperText },
          }}
          name={props.registerField}
          render={({ field }) => {
            return (
              <React.Fragment>
                <Button
                  sx={{
                    height: '56px',
                    pr: '5px',
                  }}
                  color={props.error ? 'error' : 'secondary'}
                  variant="outlined"
                  onClick={handleSelectDialogOpen}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                      position: 'relative',
                    }}
                  >
                    {field.value !== '' && (
                      <Typography
                        variant="button"
                        display="block"
                        gutterBottom
                        sx={{
                          textTransform: 'none',
                          position: 'absolute',
                          top: '-30px',
                          background: 'white',
                          padding: '5px',
                          left: '-7px',
                          fontWeight: '400',
                          fontSize: '12px',
                        }}
                      >
                        {`${props.label}${props.required ? ' *' : ''}`}
                      </Typography>
                    )}
                    <Typography
                      variant="button"
                      display="block"
                      gutterBottom
                      sx={{
                        textTransform: 'none',
                        color: field.value === '' ? 'grey' : 'black',
                      }}
                    >
                      {field.value === ''
                        ? `${props.label}${props.required ? ' *' : ''}`
                        : field.value}
                    </Typography>
                    <ArrowDropDownIcon />
                  </Box>
                </Button>

                {props.error && (
                  <FormHelperText>{props.helperText}</FormHelperText>
                )}
              </React.Fragment>
            );
          }}
        />
      </FormControl>
      {selectDialog.open && (
        <SelectInputDialog
          open={selectDialog.open}
          type={props.SelectInputDialogType}
          backEvent={handleSelectDialogClose}
          onSelect={(val) => {
            handleSelectDialogClose();
            props.onSelect(val);
          }}
        />
      )}
    </React.Fragment>
  );
};

export default SelectDialogForm;
