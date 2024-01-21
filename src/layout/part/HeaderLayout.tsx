import { lazy, memo, Suspense } from 'react';
import { useLayoutCtx, Header } from '@mui-treasury/layout';
const Menu = lazy(() => import('@mui/icons-material/Menu'));
const KeyboardArrowLeft = lazy(
  () => import('@mui/icons-material/KeyboardArrowLeft')
);
const Box = lazy(() => import('@mui/material/Box'));
const IconButton = lazy(() => import('@mui/material/IconButton'));

const HeaderLayout = ({ isXS = false }) => {
  const {
    setOpen,
    state: { leftEdgeSidebar },
  } = useLayoutCtx();

  if (!isXS) return;
  return (
    <Header>
      <Suspense fallback={'loading header'}>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            px: 2,
            gap: 1,
            backgroundColor: 'primary.main',
            color: 'white',
          }}
        >
          <IconButton
            onClick={() => setOpen('leftEdgeSidebar', !leftEdgeSidebar?.open)}
            sx={{
              color: 'white',
            }}
          >
            {leftEdgeSidebar?.open ? <KeyboardArrowLeft /> : <Menu />}
          </IconButton>
          {/* Logo Header */}
        </Box>
      </Suspense>
    </Header>
  );
};

const MemoizedHeaderLayout = memo(HeaderLayout, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedHeaderLayout;
