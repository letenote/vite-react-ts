import { Footer } from '@mui-treasury/layout';
import { memo } from 'react';

const FooterLayout = ({ show = false }) => {
  if (!show) return;
  return <Footer style={{ padding: '45px 30px' }}>Footer</Footer>;
};

const MemoizedFooterLayout = memo(FooterLayout, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedFooterLayout;
