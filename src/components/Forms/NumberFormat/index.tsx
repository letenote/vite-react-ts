/* eslint-disable @typescript-eslint/no-explicit-any */
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import React from 'react';
import { Controller } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

function NumberFormatCustom(props: any) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator={'.'}
      decimalSeparator={','}
      allowLeadingZeros={false}
      allowNegative={false}
      decimalScale={2}
      prefix={''}
      suffix={''}
      // isNumericString
    />
  );
}

type NumberFormatPropsType = {
  id: string;
  name: string;
  label: string;
  required: boolean;
  value: string;
  style: {
    marginLeft: string | number;
    width: string;
  };
  error: boolean;
  helperText: string;
  control: any;
  registerField: string;
  disabled: boolean;
  prefix?: string;
  startAdornment?: boolean;
  suffix?: string;
  endAdornment?: boolean;
};

const NumberFormat = (props: NumberFormatPropsType) => {
  const {
    prefix = 'Rp',
    startAdornment = true,
    suffix = '',
    endAdornment = false,
  } = props;
  return (
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
      <InputLabel
        sx={{
          backgroundColor: 'white',
          pr: 1,
          position: 'absolute',
          top: '-23px',
          fontSize: '12px',
        }}
      >{`${props.label}${props.required ? ' *' : ''}`}</InputLabel>
      <Controller
        control={props.control}
        name={props.registerField}
        defaultValue={props.value}
        rules={{
          required: { value: props.required, message: props.helperText },
        }}
        render={({ field }) => {
          console.log('field', { field, props });
          return (
            <React.Fragment>
              <TextField
                {...field}
                id="input-number-format"
                InputProps={{
                  startAdornment: startAdornment && !endAdornment && (
                    <InputAdornment position="start">{prefix}</InputAdornment>
                  ),
                  endAdornment: endAdornment && !startAdornment && (
                    <InputAdornment position="start">{suffix}</InputAdornment>
                  ),
                  inputComponent: NumberFormatCustom,
                }}
                error={props.error}
                helperText={props.error ? props.helperText : ''}
              />
            </React.Fragment>
          );
        }}
      />
    </FormControl>
  );
};

export default NumberFormat;
