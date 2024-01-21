import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import { Controller } from 'react-hook-form';
import { SelectOptionsTypes } from '../type/SelectOptionsTypes.type';

type SelectFormType = {
  id: string;
  name: string;
  label: string;
  required: boolean;
  value: string;
  style: {
    marginLeft: string | number;
    width: string;
    marginTop?: string | number;
    marginBottom?: string | number;
    backgroundColorLabel?: string;
  };
  error: boolean;
  helperText: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  options: SelectOptionsTypes;
  registerField: string;
  disabled: boolean;
};

const SelectForm = (props: SelectFormType) => {
  const {
    marginTop = 2,
    marginBottom = 1,
    backgroundColorLabel = 'white',
  } = props.style;
  return (
    <FormControl
      error={props.error}
      disabled={props.disabled}
      sx={{
        marginTop: marginTop,
        marginBottom: marginBottom,
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
      <InputLabel sx={{ backgroundColor: backgroundColorLabel, pr: 1 }}>{`${
        props.label
      }${props.required ? '*' : ''}`}</InputLabel>
      <Controller
        control={props.control}
        name={props.registerField}
        defaultValue={props.value}
        rules={{
          required: { value: props.required, message: props.helperText },
        }}
        render={({ field }) => {
          return (
            <React.Fragment>
              <Select {...field}>
                {props.options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {props.error && (
                <FormHelperText>{props.helperText}</FormHelperText>
              )}
            </React.Fragment>
          );
        }}
      />
    </FormControl>
  );
};

export default SelectForm;
