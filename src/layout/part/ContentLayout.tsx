import { Content } from '@mui-treasury/layout';

type ContentLayoutProps = {
  isDashboardPage: boolean;
  children: JSX.Element;
};

const ContentLayout = ({ children, isDashboardPage }: ContentLayoutProps) => {
  return (
    <Content
      style={{
        padding: '45px 30px',
        backgroundImage: isDashboardPage
          ? // ? 'linear-gradient(43deg, #f5f5f5 0%, #f5f5f5 80%, #FFCC70 100%)'
            'linear-gradient(50deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 75%, #ffbe4f80 92%, #2e7d3275 100%)'
          : 'none',
      }}
    >
      {children}
    </Content>
  );
};

export default ContentLayout;
