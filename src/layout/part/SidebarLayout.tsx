import { lazy, Suspense, Fragment, memo } from "react";
import { EdgeSidebar } from "@mui-treasury/layout";
import Navigation from "../navigation/index";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

const Box = lazy(() => import("@mui/material/Box"));
const Profile = lazy(() => import("../navigation/Profile"));
const KeyboardArrowLeft = lazy(
  () => import("@mui/icons-material/KeyboardArrowLeft")
);
const KeyboardArrowRight = lazy(
  () => import("@mui/icons-material/KeyboardArrowRight")
);
const ButtonBase = lazy(() => import("@mui/material/ButtonBase"));
const Logo = lazy(() => import("../navigation/Logo"));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const SidebarLayout = ({ isXS = false }) => {
  return (
    <EdgeSidebar anchor="left">
      {(leftSidebarCTX) => {
        return (
          <Fragment>
            <DrawerHeader
              sx={{
                m: 0,
                justifyContent: "start",
                ml: leftSidebarCTX.state?.leftEdgeSidebar?.collapsed
                  ? "10px"
                  : "17px",
              }}
            >
              <Suspense fallback={"loading logo"}>
                <Logo
                  isCollapse={
                    leftSidebarCTX.state?.leftEdgeSidebar?.collapsed || false
                  }
                />
              </Suspense>
            </DrawerHeader>
            <Divider />
            <Suspense fallback={"loading sidebar content"}>
              <Navigation
                sidebarCollapse={
                  leftSidebarCTX.state?.leftEdgeSidebar?.collapsed || false
                }
                isMobile={isXS}
                ctx={leftSidebarCTX}
              />
            </Suspense>
            <div>
              <Suspense fallback={"loading sidebar profile"}>
                <Divider />
                <Box sx={{ pt: 1, pb: 1, pr: 1.5, pl: 1.5 }}>
                  <Profile
                    sidebarCollapse={
                      leftSidebarCTX.state?.leftEdgeSidebar?.collapsed || false
                    }
                  />
                </Box>
              </Suspense>
            </div>
            {!isXS && (
              <Suspense fallback={"loading sidebar footer"}>
                <Divider />
                <ButtonBase
                  name="collapse btn"
                  aria-label="collapse btn"
                  title="collapse btn"
                  onClick={() =>
                    leftSidebarCTX.setCollapsed(
                      "leftEdgeSidebar",
                      !leftSidebarCTX.state?.leftEdgeSidebar?.collapsed
                    )
                  }
                  sx={{
                    minHeight: 40,
                    width: "100%",
                    bgcolor: "primary.main",
                    color: "white",
                    borderTop: "1px solid",
                    borderColor: "grey.200",
                  }}
                >
                  {leftSidebarCTX.state?.leftEdgeSidebar?.collapsed ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </ButtonBase>
              </Suspense>
            )}
          </Fragment>
        );
      }}
    </EdgeSidebar>
  );
};

const MemoizedSidebarLayout = memo(SidebarLayout, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedSidebarLayout;
