import { Fragment, memo, useCallback, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Theme } from "../../constant/Theme";
import {
  Badge,
  BadgeProps,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useAppDispatch } from "../../store";
import { logout } from "../../store/slice/settings/user/actions/logout";
import { useAppSelector } from "../../store";
import { MenuType } from "../../store/slice/settings/user/interface/userReducerInterface.interface";
import ConfirmationDialog from "../../components/ConfirmationDialog";
import { menuIconController } from "../helper/menuIconController";

const StyledBadge = styled(Badge, {
  shouldForwardProp: (prop) =>
    prop !== "sidebarCollapse" && prop !== "isMobile",
})<{ sidebarCollapse?: boolean; isMobile?: boolean } & BadgeProps>(
  ({ theme, sidebarCollapse, isMobile }) => ({
    "& .MuiBadge-badge": {
      right: !sidebarCollapse ? -15 : isMobile ? -15 : -3,
      top: !sidebarCollapse ? 10 : isMobile ? 9 : -10,
      border: `2px solid ${theme.palette.background.paper}`,
      background: "#00b76f",
      color: "white",
    },
  })
);

const activeLinkStyle = {
  color: Theme.palette.primary.main,
};

type MenuProps = {
  isMobile: boolean;
  sidebarCollapse: boolean;
  onClick: () => void;
};

const Menu = ({
  isMobile = false,
  sidebarCollapse = false,
  onClick = () => {},
}: MenuProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const openAlertDialog = useCallback(() => setOpen(true), [setOpen]);
  const closeAlertDialog = () => setOpen(false);
  const handleSubmit = useCallback(() => {
    setLoading(true);
    dispatch(logout());
  }, [setLoading, dispatch]);

  return (
    <Fragment>
      <MemoizedListMenu
        isMobile={isMobile}
        sidebarCollapse={sidebarCollapse}
        onClick={onClick}
        onLogout={openAlertDialog}
      />
      <ConfirmationDialog
        open={open}
        titleButtonDisagree={"Cancel"}
        titleButtonAgree={"Logout"}
        title={"Logout"}
        subTitle={"Are you sure you want to exit the app ?"}
        onClose={closeAlertDialog}
        loading={loading}
        onSubmit={handleSubmit}
      />
    </Fragment>
  );
};

const ListMenu = ({
  isMobile,
  sidebarCollapse,
  onClick,
  onLogout,
}: {
  isMobile: boolean;
  sidebarCollapse: boolean;
  onClick: () => void;
  onLogout: () => void;
}) => {
  const { pathname } = useLocation();
  const { user } = useAppSelector((state) => state.settings);
  return (
    <List sx={{ mb: { xs: "15px", sm: "20px" } }}>
      {user.config.menus.map((menu, menuIndex) => {
        return (
          menu.isParent && (
            <ListItem key={menuIndex} disablePadding sx={{ display: "block" }}>
              {menuIndex === user.config.menus.length - 1 && <Divider />}
              {menu.name === "Logout" ? (
                <MenuButtonRender
                  isMobile={isMobile}
                  menu={menu}
                  sidebarCollapse={sidebarCollapse}
                  pathname={pathname}
                  onClick={onLogout}
                />
              ) : (
                <NavlinkRender
                  isMobile={isMobile}
                  menu={menu}
                  sidebarCollapse={sidebarCollapse}
                  pathname={pathname}
                  onClick={onClick}
                />
              )}
            </ListItem>
          )
        );
      })}
    </List>
  );
};

const MemoizedListMenu = memo(ListMenu, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

const NavlinkRender = ({
  isMobile,
  menu,
  sidebarCollapse,
  pathname,
  onClick,
}: {
  isMobile: boolean;
  menu: MenuType;
  sidebarCollapse: boolean;
  pathname: string;
  onClick: () => void;
}) => {
  return (
    <NavLink
      style={({ isActive }) => (isActive ? activeLinkStyle : {})}
      to={menu.href}
      className={"link-reset"}
      aria-label={menu.name}
      title={menu.name}
    >
      <MenuButtonRender
        isMobile={isMobile}
        menu={menu}
        sidebarCollapse={sidebarCollapse}
        pathname={pathname}
        onClick={onClick}
      />
    </NavLink>
  );
};

const MenuButtonRender = ({
  isMobile,
  menu,
  sidebarCollapse,
  pathname,
  onClick,
}: {
  isMobile: boolean;
  menu: MenuType;
  sidebarCollapse: boolean;
  pathname: string;
  onClick: () => void;
}) => {
  return (
    <ListItemButton
      onClick={onClick}
      aria-label={menu.name}
      title={menu.name}
      sx={{
        height: 48,
        justifyContent: {
          xs: "initial",
          sm: !sidebarCollapse ? "initial" : "center",
        },
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          color: pathname === menu.href ? "primary.main" : "",
          minWidth: 0,
          mr: {
            xs: 2,
            sm: !sidebarCollapse ? 2 : "auto",
          },
          justifyContent: "center",
        }}
      >
        {menuIconController(menu.name, 25)}
      </ListItemIcon>
      {menu.name === "Notification" ? (
        <StyledBadge
          badgeContent={100}
          max={99}
          sidebarCollapse={sidebarCollapse}
          isMobile={isMobile}
        >
          <ListItemText
            primary={menu.label}
            sx={{
              display: {
                xs: "block",
                sm: !sidebarCollapse ? "block" : "none",
              },
              whiteSpace: "nowrap",
            }}
          />
        </StyledBadge>
      ) : (
        <ListItemText
          primary={menu.label}
          sx={{
            display: {
              xs: "block",
              sm: !sidebarCollapse ? "block" : "none",
            },
            whiteSpace: "nowrap",
          }}
        />
      )}
    </ListItemButton>
  );
};

const MemoizedMenu = memo(Menu, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedMenu;
