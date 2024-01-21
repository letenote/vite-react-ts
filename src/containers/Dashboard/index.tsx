import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useAppSelector } from '../../store';
import MenuCard from './child/MenuCard';
import Grid from '@mui/material/Grid';
import FooterVersion from '../../components/FooterVersion/Index';

const Dashboard = () => {
  const { user } = useAppSelector((state) => state.settings);
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
      <Box sx={{ textAlign: 'left', mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Welcome, {user.name}.
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ color: 'grey' }}>
          Here`s a quick action for you to view and access all the features in
          this platform.
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {user.config.menus.map((menu, menuIndex) => {
            return (
              menu.isParent &&
              !['dashboard', 'setting', 'logout'].includes(
                menu.name.toLowerCase()
              ) && (
                <Grid item xs={12} sm={6} md={3} key={menuIndex}>
                  <MenuCard name={menu.label} href={menu.href} />
                </Grid>
              )
            );
          })}
        </Grid>
      </Box>
      <FooterVersion />
    </Container>
  );
};

const MemoizedDashboard = React.memo(Dashboard, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedDashboard;
