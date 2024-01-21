import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";
import React from "react";
import LoadingScreen from "../../../components/LoadingScreen";
import { useLayoutCtx } from "@mui-treasury/layout";
/**
 * see docs:
 * https://mui.com/x/react-charts/legend/
 */

type PieChartCardPropsType = {
  loading: boolean;
  data: Array<{ id: number; value: number; label: string; color: string }>;
  label: string;
};
const PieChartCard = (props: PieChartCardPropsType) => {
  const {
    state: { leftEdgeSidebar },
  } = useLayoutCtx();

  return (
    <Card variant="outlined" sx={{ pl: 3 }}>
      {props.loading ? (
        <Box sx={{ height: "360px", ml: -3 }}>
          <LoadingScreen message={""} />
        </Box>
      ) : (
        <CardContent sx={{ p: 0 }}>
          <Box sx={{ display: "flex", mt: 2, mb: 0 }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {props.label}
            </Typography>
          </Box>
          <PieChart
            sx={{ ml: -1, mt: "-40px", mb: 2 }}
            series={[
              {
                data: props.data,
                // data: [
                //   { id: 0, value: 10, label: 'Female', color: '#FB8C00' },
                //   { id: 1, value: 15, label: 'Male', color: '#183028' },
                // ],
                innerRadius: 52,
                outerRadius: !leftEdgeSidebar?.collapsed ? 75 : 85,
                paddingAngle: -5,
                cornerRadius: 0,
                // startAngle: -92,
                // endAngle: 180,
                // cx: 100,
                // cy: 150,
              },
            ]}
            margin={{
              top: 0,
              bottom: 20,
              left: 0,
              right: !leftEdgeSidebar?.collapsed ? 15 : 10,
            }}
            slotProps={{
              legend: {
                direction: "column",
                position: { vertical: "bottom", horizontal: "left" },
                padding: 0,
                itemMarkWidth: 6,
                itemMarkHeight: 6,
                markGap: 8,
                itemGap: 12,
                labelStyle: {
                  fontSize: 12,
                  fill: "black",
                },
              },
            }}
            // width={200}
            height={295}
          />
        </CardContent>
      )}
    </Card>
  );
};

const MemoizedPieChartCard = React.memo(
  PieChartCard,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedPieChartCard;
