import * as React from "react";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import { FwdStyles } from "../../../constant/FwdStyles";
import { grey } from "@mui/material/colors";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Controller } from "react-hook-form";
import { SelectOptionsTypes } from "../type/SelectOptionsTypes.type";
import FormHelperText from "@mui/material/FormHelperText";

type SelectFormType = {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  options: SelectOptionsTypes;
  registerField: string;
  disabled: boolean;
};

export default function MaxHeightTextarea(props: SelectFormType) {
  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    width: 100%;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 16.5px 14px;
    border-radius: 4px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? "#c4c4c4" : "#c4c4c4"};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };

    &:hover {
      border-color: black;
    }

    &:focus {
      border-color: ${props.error ? "red" : FwdStyles.brandColor};
      box-shadow: 0 0 0 1px ${
        theme.palette.mode === "dark"
          ? FwdStyles.brandColor
          : FwdStyles.brandColor
      };
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );

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
          xs: "100%",
          md: props.style.width,
        },
      }}
    >
      <InputLabel
        sx={{
          backgroundColor: "white",
          pr: 1,
          position: "absolute",
          top: "-23px",
          fontSize: "12px",
        }}
      >{`${props.label}${props.required ? " *" : ""}`}</InputLabel>
      <Controller
        control={props.control}
        name={props.registerField}
        defaultValue={props.value}
        rules={{
          required: { value: props.required, message: props.helperText },
        }}
        render={({ field }) => {
          console.log("field", { field, props });
          return (
            <React.Fragment>
              <Textarea
                {...field}
                maxRows={4}
                aria-label={props.label}
                // placeholder={props.label}
                style={{
                  height: "150px",
                  borderColor: props.error ? "red" : "#c4c4c4",
                }}
              />
              {props.error && (
                <FormHelperText>{props.helperText}</FormHelperText>
              )}
            </React.Fragment>
          );
        }}
      />
    </FormControl>
  );
}
