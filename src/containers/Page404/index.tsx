import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <React.Fragment>
      <div style={{ position: 'relative' }}>
        <span style={{ fontSize: '150px', color: 'grey' }}>OOPS!</span>
        <span
          style={{
            fontSize: '18px',
            color: 'grey',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '40px',
            background: 'whitesmoke',
            padding: '5px 10px',
          }}
        >
          404 - <code>{location.pathname}</code>- The Page Cant Be Found
        </span>
      </div>
      <Button
        component={Link}
        to="/dashboard"
        variant="outlined"
        color="secondary"
      >
        Dashboard
      </Button>
    </React.Fragment>
  );
};

const MemoizedPage404 = React.memo(Page404, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedPage404;
