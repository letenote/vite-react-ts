// import { lazy } from 'react';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import {
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { memo } from 'react';
import { useAppSelector } from '../../store';
import { getInitialName } from '../../helper/populateString';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const Profile = ({ sidebarCollapse = false }) => {
  const { user } = useAppSelector((state) => state.settings);
  return (
    <List>
      <ListItem sx={{ p: 0 }}>
        <ListItemAvatar sx={{ minWidth: '50px' }}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar sx={{ bgcolor: orange[800] }}>
              {getInitialName(user.name)}
            </Avatar>
          </StyledBadge>
        </ListItemAvatar>
        <ListItemText
          sx={{
            flexDirection: {
              xs: 'column',
              sm: !sidebarCollapse ? 'column' : 'row',
            },
            display: { xs: 'flex', sm: !sidebarCollapse ? 'flex' : 'none' },
          }}
          primary={user.name}
          secondary={`${user.departement}`}
        />
      </ListItem>
    </List>
  );
};

const MemoizedProfile = memo(Profile, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedProfile;
