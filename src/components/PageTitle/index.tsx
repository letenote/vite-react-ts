import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type PageTitlePropsType = {
  title: string;
  backNavigate: string;
};
const PageTitle = (props: PageTitlePropsType) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        textAlign: 'left',
        mb: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        mr: 1,
      }}
    >
      <IconButton
        aria-label="Example"
        onClick={() => navigate(`/${props.backNavigate}`)}
        sx={{ ml: -2, mr: 1 }}
      >
        <ChevronLeftIcon />
      </IconButton>
      <Typography variant="h6" gutterBottom>
        {props.title}
      </Typography>
    </Box>
  );
};

const MemoizedPageTitle = React.memo(PageTitle, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedPageTitle;
