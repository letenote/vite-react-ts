import FormControl from '@mui/material/FormControl';
import React from 'react';
import { Controller } from 'react-hook-form';
// import dayjs, { Dayjs } from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
// import DateRangePicker from '@mui/lab/DateRangePicker';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRange } from '@mui/x-date-pickers-pro';

/**
 * docs
 * https://mui.com/x/react-date-pickers/validation/
 */

type DateRangeFormType = {
  id: string;
  name: string;
  label: {
    start: string;
    end: string;
  };
  required: boolean;
  value: DateRange<Date>;
  style: {
    marginLeft: string | number;
    width: string;
    marginTop?: string | number;
    marginBottom?: string | number;
    formatDisplay?: string;
  };
  error: boolean;
  helperText: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  registerField: string;
  disabled: boolean;
};

const DateRangeForm = (props: DateRangeFormType) => {
  const {
    marginTop = 2,
    marginBottom = 1,
    formatDisplay = 'DD MMM YYYY',
  } = props.style;
  return (
    <FormControl
      // error={props.error}
      // disabled={props.disabled}
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
      <Controller
        control={props.control}
        name={props.registerField}
        defaultValue={props.value}
        rules={{
          required: {
            value: props.required,
            message: 'Start date is required',
          },
        }}
        render={({ field }) => {
          return (
            <React.Fragment>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <DemoContainer
                  components={['DateRangePicker']}
                  sx={{ mt: 0, mb: 0, pt: 0, p: 0 }}
                > */}
                <DateRangePicker
                  {...field}
                  // value={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
                  inputRef={field.ref}
                  value={props.value}
                  disabled={props.disabled}
                  format={formatDisplay}
                  localeText={{
                    start: props.label.start,
                    end: props.label.end,
                  }}
                  // disablePast={true}
                  slotProps={{
                    textField: {
                      required: true,
                      error: props.error,
                      helperText: props.error ? props.helperText : '',
                    },
                  }}
                  // value={defaultValues[_getField].value as DateRange<Date>}
                />
                {/* </DemoContainer> */}
              </LocalizationProvider>
            </React.Fragment>
          );
        }}
      />
    </FormControl>
  );
};

export default DateRangeForm;
