import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import LoadingScreen from "../../../components/LoadingScreen";

type SimpleAnalyticCardPropsType = {
  loading: boolean;
  label: string;
  value: string;
  suffix?: string;
  prefix?: string;
};
const SimpleAnalyticCard = (props: SimpleAnalyticCardPropsType) => {
  const { suffix = "", prefix = "" } = props;
  return (
    <Card variant="outlined" sx={{ pl: 3 }}>
      {props.loading ? (
        <Box sx={{ height: "102px" }}>
          <LoadingScreen message={""} marginTop={"30px"} />
        </Box>
      ) : (
        <CardContent
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.label}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ mt: 0.5, ml: prefix !== "" ? "25px" : 0, fontSize: "1.7rem" }}
          >
            {prefix !== "" && (
              <span
                style={{
                  fontSize: "14px",
                  position: "absolute",
                  marginLeft: "-25px",
                  marginTop: "4px",
                }}
              >
                {prefix}
              </span>
            )}
            {new Intl.NumberFormat("id-ID", {}).format(Number(props.value))}
            {suffix !== "" && (
              <span
                style={{
                  fontSize: "14px",
                  position: "absolute",
                  marginLeft: "10px",
                  marginTop: "4px",
                }}
              >
                {suffix}
              </span>
            )}
          </Typography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="111"
            height="71"
            viewBox="0 0 111 71"
            fill="none"
            style={{ position: "absolute", left: "-25px", top: "35px" }}
          >
            <path
              d="M17.3013 38.8564C17.3013 32.698 23.9679 28.849 29.3013 31.9282L80.3013 61.3731C85.6346 64.4523 85.6346 72.1503 80.3013 75.2295L29.3013 104.674C23.9679 107.754 17.3013 103.905 17.3013 97.7461L17.3013 38.8564Z"
              fill="#FB8C00"
            />
            <path
              d="M4.55126 29.7631C-2.44873 25.7217 -11.1987 30.7735 -11.1987 38.8564L-11.1987 97.7461C-11.1987 105.829 -2.44873 110.881 4.55127 106.839L55.5513 77.3945C62.5513 73.3531 62.5513 63.2495 55.5513 59.208L4.55126 29.7631Z"
              fill="#183028"
              stroke="white"
              stroke-width="5"
            />
          </svg>
        </CardContent>
      )}
    </Card>
  );
};

const MemoizedSimpleAnalyticCard = React.memo(
  SimpleAnalyticCard,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedSimpleAnalyticCard;
