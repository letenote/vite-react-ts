import grey from "@mui/material/colors/grey";
import { createTheme } from "@mui/material/styles";
import { FwdStyles } from "./FwdStyles";
import { blue, green } from "@mui/material/colors";

export const Theme = createTheme({
  palette: {
    background: {
      default: grey[100],
    },
    // background-image: linear-gradient(43deg, #f5f5f5 0%, #f5f5f5 80%, #FFCC70 100%);
    primary: {
      main: FwdStyles.brandColor,
    },
    secondary: {
      main: grey[600],
    },
    mode: "light",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: FwdStyles.borderRadius + 4,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "white",
        },
        sizeLarge: {
          height: 55,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: 0,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          "&.MuiGrid-item": { padding: 8 },
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          // verticalAlign: 'top',
          // marginTop: 2,
          // marginBottom: 1,
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: "white",
          "&.Mui-completed": { color: green[500] },
          "&.Mui-active": {
            color: blue[500],
          },
          "&.Mui-error": {
            color: "#d32f2f",
          },
          "&.Mui-active .MuiStepIcon-text": {
            fill: "white",
          },
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          marginTop: "0px",
          paddingTop: "0px",
        },
      },
    },
  },
});
