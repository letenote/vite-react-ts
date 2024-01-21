import Container from '@mui/material/Container';
import React, { Suspense, lazy, useEffect } from 'react';
import PageTitle from '../../components/PageTitle';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppDispatch, useAppSelector } from '../../store';
import { getGenderMonitoring } from '../../store/slice/page/monitoring/action/getGenderMonitoring';
import { getSpendMonitoring } from '../../store/slice/page/monitoring/action/getSpendMonitoring';
import { getEmployeeTrainedMonitoring } from '../../store/slice/page/monitoring/action/getEmployeeTrainedMonitoring';
import { getTrainingHoursMonitoring } from '../../store/slice/page/monitoring/action/getTrainingHoursMonitoring';
import { getTotalTrainingPerMonthMonitoring } from '../../store/slice/page/monitoring/action/getTotalTrainingPerMonthMonitoring';
const FooterVersion = lazy(
  () => import('../../components/FooterVersion/Index')
);
const Grid = lazy(() => import('@mui/material/Grid'));
const SimpleAnalyticCard = lazy(() => import('./child/SimpleAnalyticCard'));
const PieChartCard = lazy(() => import('./child/PieChartCard'));
const BarChartCard = lazy(() => import('./child/BarChartCard'));

const Monitoring = () => {
  const dispatch = useAppDispatch();
  const { monitoring } = useAppSelector((state) => state.pages);

  useEffect(() => {
    dispatch(getGenderMonitoring());
    dispatch(getSpendMonitoring());
    dispatch(getEmployeeTrainedMonitoring());
    dispatch(getTrainingHoursMonitoring());
    dispatch(getTotalTrainingPerMonthMonitoring());
  }, [dispatch]);

  return (
    <Container
      sx={{
        pt: 3,
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
      }}
      maxWidth={false}
    >
      <PageTitle title={'Monitoring'} backNavigate={'dashboard'} />
      <Suspense
        fallback={
          <CircularProgress color={'primary'} style={{ marginTop: '50px' }} />
        }
      >
        <Grid container spacing={2}>
          {[
            ...[monitoring.spend],
            ...[monitoring.employeeTrained],
            ...[monitoring.trainingHours],
          ].map((analytic, analyticIndex) => {
            return (
              <Grid item xs={12} md={4} key={analyticIndex} sx={{ pl: 0 }}>
                <SimpleAnalyticCard
                  loading={analytic.loading}
                  label={analytic.label}
                  value={analytic.value}
                  suffix={analytic.suffix}
                  prefix={analytic.prefix}
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} md={9} sx={{ pl: 0 }}>
            <BarChartCard
              loading={monitoring.totalTrainingPerMonth.loading}
              label={monitoring.totalTrainingPerMonth.label}
              data={monitoring.totalTrainingPerMonth.value}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            style={{ paddingLeft: '8px', marginTop: '8px' }}
          >
            <PieChartCard
              loading={monitoring.gender.loading}
              label={monitoring.gender.label}
              data={[
                {
                  id: monitoring.gender.data.female.id,
                  value: monitoring.gender.data.female.value,
                  label: monitoring.gender.data.female.label,
                  color: monitoring.gender.data.female.color,
                },
                {
                  id: monitoring.gender.data.male.id,
                  value: monitoring.gender.data.male.value,
                  label: monitoring.gender.data.male.label,
                  color: monitoring.gender.data.male.color,
                },
              ]}
            />
          </Grid>
        </Grid>
        <FooterVersion />
      </Suspense>
    </Container>
  );
};

const MemoizedMonitoring = React.memo(Monitoring, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedMonitoring;
