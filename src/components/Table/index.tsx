import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Row from './child/Row';
import { tableStyle } from './child/style';
import Box from '@mui/material/Box';
import LoadingScreen from '../LoadingScreen';
import NoDataScreen from '../NoDataScreen';
import { TableImplTypes } from './type/TableImplTypes.type';

// eslint-disable-next-line react-refresh/only-export-components
const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: tableStyle.head,
  [`&.${tableCellClasses.body}`]: tableStyle.body,
}));

type MUI_Table_Props_Type = {
  headers: Array<string>;
  getValue: Array<string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  datas: Array<any>;
  loading: boolean;
  useAction: boolean;
  impl: TableImplTypes;
  action: {
    view: {
      use: boolean;
      onClick: (index: number) => void;
    };
    edit: {
      use: boolean;
      onClick: (index: number) => void;
    };
  };
};

const MUI_Table = (props: MUI_Table_Props_Type) => {
  return (
    <React.Fragment>
      {props.loading ? (
        <Box sx={defaultBoxStyle}>
          <LoadingScreen message="Loading.." />
        </Box>
      ) : props.datas.length === 0 ? (
        <Box sx={defaultBoxStyle}>
          <NoDataScreen message={'Users Data is Empty'} />
        </Box>
      ) : (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer component={Paper} sx={{ maxHeight: 720 }}>
            <Table
              sx={{ minWidth: 1200 }}
              stickyHeader
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  {props.headers.map((header, headerIndex) => {
                    return (
                      <StyledTableCell key={`${header}-${headerIndex}`}>
                        {header}
                      </StyledTableCell>
                    );
                  })}
                  {props.useAction && (
                    <StyledTableCell align="center">Action</StyledTableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {props.datas.map((data, dataIndex) => (
                  <Row
                    index={dataIndex}
                    impl={props.impl}
                    key={dataIndex}
                    data={data}
                    getValue={props.getValue}
                    useAction={props.useAction}
                    action={props.action}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </React.Fragment>
  );
};

const defaultBoxStyle = {
  minHeight: '530px',
  display: 'flex',
  justifyContent: 'center',
};

const MemoizedMUI_Table = React.memo(MUI_Table, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedMUI_Table;
