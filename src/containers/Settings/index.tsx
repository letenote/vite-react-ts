import Container from '@mui/material/Container';
import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Avatar, Button, Divider, Grid, ListItemText } from '@mui/material';
import { useAppSelector } from '../../store';
import { capitalizeFirstLetter } from '../../helper/populateString';
import FooterVersion from '../../components/FooterVersion/Index';
import ChangePasswordDialog from './child/ChangePasswordDialog';

const Settings = () => {
  const { user } = useAppSelector((state) => state.settings);
  const [changePSDialog, setChangePSDialog] = useState<{
    open: boolean;
  }>({
    open: false,
  });
  const handleOpenChangePSDialog = () => {
    setChangePSDialog({ open: true });
  };
  const handleCloseChangePSDialog = () => setChangePSDialog({ open: false });
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
      <PageTitle title={'Settings'} backNavigate={'dashboard'} />
      <Card sx={{ minWidth: 275 }}>
        <CardContent sx={{ p: 3 }}>
          <Grid container spacing={2} sx={{ p: 3 }}>
            <Grid
              xs={12}
              md={2}
              item
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Avatar alt="Remy Sharp" sx={{ width: 120, height: 120 }} />
            </Grid>
            <Grid
              xs={12}
              md={4}
              item
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'start' },
                mt: { xs: 2, md: 0 },
                ml: { xs: 0, md: 3 },
              }}
            >
              <ListItemText
                sx={{ textAlign: { xs: 'center', md: 'left' } }}
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="h6"
                      color="text.primary"
                    >
                      {capitalizeFirstLetter(user.name)}
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {capitalizeFirstLetter(user.departement)}
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
              <Button
                variant="outlined"
                size="small"
                sx={{ width: '190px', mt: 1 }}
                onClick={handleOpenChangePSDialog}
              >
                Change Password
              </Button>
            </Grid>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ m: '0px 20px', display: { xs: 'none', md: 'block' } }}
            />
            {/* <Divider variant="middle" /> */}
            <Grid xs={12} md={5} item sx={{ textAlign: 'left' }}>
              {/* <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {capitalizeFirstLetter(user.departement)}
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment> */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <FooterVersion />
      {changePSDialog.open && (
        <ChangePasswordDialog
          open={changePSDialog.open}
          closeEvent={handleCloseChangePSDialog}
        />
      )}
    </Container>
  );
};

const MemoizedSettings = React.memo(Settings, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedSettings;
