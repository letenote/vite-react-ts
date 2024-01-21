import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { Link, useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import LoadingScreen from "../../../components/LoadingScreen";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import NoDataScreen from "../../../components/NoDataScreen";
import Grid from "@mui/material/Grid";
import { getVendors } from "../../../store/slice/page/vendor/action/getVendors";
import VendorCard from "./VendorCard";

const VendorList = () => {
  const dispatch = useAppDispatch();
  const { vendor } = useAppSelector((state) => state.pages);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(getVendors({ page: value }));
  };

  useEffect(() => {
    dispatch(getVendors({ page }));
  }, [dispatch, page]);

  return (
    <>
      {vendor.listLoading ? (
        <Box sx={defaultBoxStyle}>
          <LoadingScreen message="Loading.." />
        </Box>
      ) : vendor.list.length === 0 ? (
        <Box sx={defaultBoxStyle}>
          <NoDataScreen message={"Vendors Data is Empty"} />
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {vendor.list.map((vendor, vendorIndex) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={vendorIndex}>
                  <VendorCard key={vendorIndex} vendorData={vendor} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}
      <Stack spacing={2} sx={{ alignItems: "center", mt: 3 }}>
        <Pagination
          page={page}
          count={vendor.totalPage}
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/vendor${item.page === 1 ? "" : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </Stack>
    </>
  );
};

const defaultBoxStyle = {
  minHeight: "530px",
  display: "flex",
  justifyContent: "center",
};

const MemoizedVendorList = React.memo(VendorList, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedVendorList;
