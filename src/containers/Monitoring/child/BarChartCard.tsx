import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import React from 'react';
import LoadingScreen from '../../../components/LoadingScreen';

/**
 * see docs:
 * https://mui.com/x/react-charts/legend/
 */

// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
// const pData = [
//   2400, 1398, 9800, 3908, 4800, 3800, 4300, 2400, 1398, 9800, 3908, 4800,
// ];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

type BarChartCardPropsType = {
  loading: boolean;
  data: Array<number>;
  label: string;
};
const BarChartCard = (props: BarChartCardPropsType) => {
  return (
    <Card variant="outlined" sx={{ pl: 3, mt: 1 }}>
      {props.loading ? (
        <Box sx={{ height: '360px', ml: -3 }}>
          <LoadingScreen message={''} />
        </Box>
      ) : (
        <CardContent sx={{ p: 0 }}>
          <Box sx={{ display: 'flex', mt: 2, mb: -0.5 }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {props.label}
            </Typography>
          </Box>
          <BarChart
            // width={500}
            height={300}
            series={[
              {
                data: props.data,
                label: 'Total',
                id: 'pvId',
                stack: 'total',
                color: '#FB8C00',
              },
              // { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
            ]}
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
            slotProps={{ legend: { hidden: true } }}
          />
        </CardContent>
      )}
    </Card>
  );
};

const MemoizedBarChartCard = React.memo(
  BarChartCard,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedBarChartCard;
