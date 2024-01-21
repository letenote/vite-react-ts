import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { FwdStyles } from "../../../constant/FwdStyles";
import { menuIconController } from "../../../layout/helper/menuIconController";

type MenuCardPropsType = {
  name: string;
  href: string;
};

const MenuCard = (props: MenuCardPropsType) => {
  return (
    <Card>
      <CardHeader
        title={
          <Box
            sx={{ textAlign: "left", display: "flex", alignItems: "center" }}
          >
            {menuIconController(props.name, 20)}
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "left", ml: 1 }}
            >
              {props.name}
            </Typography>
          </Box>
        }
        subheader={
          <Box>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ textAlign: "left", display: "flex", mt: 1 }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </Typography>
          </Box>
        }
      />
      <CardContent
        sx={{ textAlign: "left", display: "flex", justifyContent: "flex-end" }}
      >
        <NavLink
          style={{
            display: "flex",
            alignItems: "center",
            color: FwdStyles.brandColor,
          }}
          to={props.href}
          className={"link-reset"}
          aria-label={props.name}
          title={props.name}
        >
          <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
            View
          </Typography>
          <KeyboardArrowRightIcon sx={{ fontSize: 20 }} />
        </NavLink>
      </CardContent>
    </Card>
  );
};

const MemoizedMenuCard = React.memo(MenuCard, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedMenuCard;
