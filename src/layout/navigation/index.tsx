import { Fragment, lazy, memo } from 'react';
import { ContextValue, SidebarContent } from '@mui-treasury/layout';
const Menu = lazy(() => import('./Menu'));

type NavigationProps = {
  sidebarCollapse: boolean;
  isMobile: boolean;
  ctx: ContextValue & {
    expanded: boolean;
    entered: boolean;
    isMouseOverSidebar: boolean;
  };
};

const Navigation = ({
  sidebarCollapse = false,
  isMobile = false,
  ctx,
}: NavigationProps) => {
  return (
    <Fragment>
      <SidebarContent>
        <Menu
          isMobile={isMobile}
          sidebarCollapse={sidebarCollapse}
          onClick={() =>
            isMobile &&
            setTimeout(() => ctx.setOpen('leftEdgeSidebar', false), 100)
          }
        />
      </SidebarContent>
    </Fragment>
  );
};

const MemoizedNavigation = memo(Navigation, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedNavigation;
