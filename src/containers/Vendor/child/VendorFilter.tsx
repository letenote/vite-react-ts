/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { ComponentFormType } from '../../../components/Forms/enum/ComponentFormType.enum';
import SelectForm from '../../../components/Forms/SelectForm';
import { useAppDispatch, useAppSelector } from '../../../store';
import { useLocation } from 'react-router-dom';
import { VendorFormFilterType } from './type/VendorFormFilterType.type';
import { getSelectInputOptions } from '../../../store/slice/components/actions/getSelectInputOptions';
import { SelectInputDialogType } from '../../../components/SelectInputDialog/enum/SelectInputDialogType.type';
import { VendorFormFilterSchema } from './schema/VendorFormFilterSchema.schema';
import { getVendors } from '../../../store/slice/page/vendor/action/getVendors';

const VendorFilter = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const { selectInputOptions } = useAppSelector((state) => state.components);
  const defaultValues: VendorFormFilterType = JSON.parse(
    JSON.stringify(VendorFormFilterSchema)
  );
  const form = useForm<VendorFormFilterType>({
    defaultValues: async () => {
      if (
        selectInputOptions.vendorType.loading &&
        selectInputOptions.vendorType.list.length === 0
      ) {
        await dispatch(
          getSelectInputOptions({ type: SelectInputDialogType.VENDOR_TYPE })
        );
      }

      return defaultValues;
    },
  });
  const { register, formState, handleSubmit, control } = form;
  const { errors } = formState;

  const onValid = (data: VendorFormFilterType) => {
    dispatch(
      getVendors({
        page,
        vendorTypeId: data.type.value.toString(),
        status: data.status.value.toString(),
        name: data.name.value.toString(),
      })
    );
  };

  return (
    <Box
      component="form"
      sx={{
        mb: 3,
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 0.4fr 1fr 0.4fr' },
        gap: 2,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onValid)}
    >
      {Object.keys(defaultValues).map((field) => {
        const _getField = field as keyof typeof defaultValues;
        const _registerField = `${defaultValues[_getField].id}.value` as any;
        switch (defaultValues[_getField].componentType) {
          case ComponentFormType.INPUT_DROPDOWN:
            return (
              <SelectForm
                key={_getField}
                name={defaultValues[_getField].name}
                registerField={_registerField}
                id={defaultValues[_getField].id}
                label={defaultValues[_getField].label.toString()}
                required={defaultValues[_getField].required}
                control={control}
                error={false}
                helperText={defaultValues[_getField].errorMessage}
                value={defaultValues[_getField].value.toString()}
                style={{
                  marginLeft: 0,
                  width: '100%',
                  marginBottom: 0,
                  marginTop: 0,
                  backgroundColorLabel: '#f5f5f5',
                }}
                options={
                  defaultValues[_getField].id === 'status'
                    ? defaultValues[_getField].options
                    : [
                        ...defaultValues[_getField].options,
                        ...selectInputOptions.vendorType.list.map(
                          (vendorType) => {
                            return {
                              value: vendorType.id,
                              label: vendorType.name,
                            };
                          }
                        ),
                      ]
                }
                disabled={defaultValues[_getField].disabled}
              />
            );
          default:
            return (
              <TextField
                sx={{ mt: 0, mb: 0 }}
                key={_getField}
                margin="normal"
                fullWidth={defaultValues[_getField].fullWidth}
                label={defaultValues[_getField].label.toString()}
                type={defaultValues[_getField].type}
                autoFocus={defaultValues[_getField].autoFocus}
                autoComplete={defaultValues[_getField].autoComplete}
                {...register(_registerField, {
                  required: {
                    value: defaultValues[_getField].required,
                    message: defaultValues[_getField].errorMessage,
                  },
                  disabled: defaultValues[_getField].disabled,
                  pattern: {
                    value: defaultValues[_getField].validate.pattern.value,
                    message: defaultValues[_getField].validate.pattern.message,
                  },
                })}
                error={!!errors[_getField]}
                helperText={errors[_getField]?.value?.message}
              />
            );
        }
      })}
      <LoadingButton
        fullWidth
        type="submit"
        loading={false}
        disabled={false}
        variant="contained"
        size="large"
        sx={{ mt: 0, mb: 0 }}
      >
        <Typography variant="button" display="block" gutterBottom>
          Search
        </Typography>
      </LoadingButton>
    </Box>
  );
};

const MemoizedVendorFilter = React.memo(
  VendorFilter,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedVendorFilter;
