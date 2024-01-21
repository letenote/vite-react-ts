import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import { tableStyle } from './style';
import { nestedObjectStrToValue } from '../../../helper/nestedObjectStrToValue';
import { TableImplTypes } from '../type/TableImplTypes.type';
import { TableImpl } from '../enum/TableImpl';
import { PageBudgetListReducerInterface } from '../../../store/slice/page/budget/interface/PageBudgetReducerInterface.interface';
import Chip from '@mui/material/Chip';
import {
  statusBudgetGenerate,
  statusColorBudgetGenerate,
} from '../../../containers/Budget/helper/statusBudgetGenerate';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { useAppSelector } from '../../../store';
import { showRejectAndApproveButtonController } from '../../../containers/Budget/helper/showButton';
import { PageTrainingListReducerInterface } from '../../../store/slice/page/training/interface/PageTrainingReducerInterface.interface';
import { Typography } from '@mui/material';
import moment from 'moment';
import { TrainingStatusType } from '../../../containers/Training/child/enum/TrainingStatusType.enum';
import { PagePaymentListReducerInterface } from '../../../store/slice/page/payment/interface/PagePaymentReducerInterface.interface';
import { blue, green, red } from '@mui/material/colors';
import { BudgetStatus } from '../../../containers/Budget/enum/BudgetStatus.enum';

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgb(0 0 0 / 2%)',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  // '&:hover': {
  //   backgroundColor: '#e8782247',
  // },
}));

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: tableStyle.head,
  [`&.${tableCellClasses.body}`]: tableStyle.body,
}));

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(() => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: 1,
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
      },
    },
  },
}));

type RowPropsType = {
  index: number;
  getValue: Array<string>;
  useAction: boolean;
  data: PageBudgetListReducerInterface;
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

const Row = (props: RowPropsType) => {
  const { user } = useAppSelector((state) => state.settings);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <StyledTableRow>
        {props.getValue.map((val, valIndex) => {
          return (
            <StyledTableCell key={valIndex} component="th" scope="row">
              {valueByImplPageRender({
                impl: props.impl,
                data: props.data,
                _key: val,
                role: user.role,
              })}
            </StyledTableCell>
          );
        })}
        {props.useAction && (
          <StyledTableCell align="center">
            <React.Fragment>
              <IconButton
                aria-label="settings"
                size="small"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
            </React.Fragment>
          </StyledTableCell>
        )}
      </StyledTableRow>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {props.action.view.use && (
          <MenuItem
            onClick={() => {
              handleClose();
              props.action.view.onClick(props.index);
            }}
            disableRipple
          >
            <VisibilityIcon sx={{ mr: 1.5 }} />
            View
          </MenuItem>
        )}
        {props.action.edit.use &&
          editButtonByImplPageRender({
            impl: props.impl,
            data: props.data,
            onClick: () => {
              handleClose();
              props.action.edit.onClick(props.index);
            },
          })}
      </StyledMenu>
    </React.Fragment>
  );
};

const editButtonByImplPageRender = (props: {
  impl: TableImplTypes;
  data: PageBudgetListReducerInterface;
  onClick: () => void;
}) => {
  switch (props.impl) {
    case TableImpl.BUDGET_PAGE:
      return !showRejectAndApproveButtonController(props.data)
        ? null
        : props.data.reviewBy !== null
          ? null
          : editButtonActionRender({ onClick: props.onClick });
    default:
      return editButtonActionRender({ onClick: props.onClick });
  }
};

const editButtonActionRender = (props: { onClick: () => void }) => {
  return (
    <MenuItem onClick={props.onClick} disableRipple>
      <EditIcon sx={{ mr: 1.5 }} />
      Edit
    </MenuItem>
  );
};

const valueByImplPageRender = (props: {
  impl: TableImplTypes;
  data:
    | PageBudgetListReducerInterface
    | PageTrainingListReducerInterface
    | PagePaymentListReducerInterface;
  _key: string;
  role: string;
}) => {
  switch (props.impl) {
    case TableImpl.BUDGET_PAGE:
      return budgetPageValueRender({
        data: props.data as PageBudgetListReducerInterface,
        _key: props._key,
        role: props.role,
      });
    case TableImpl.TRAINING_PAGE:
      return trainingPageValueRender({
        data: props.data as PageTrainingListReducerInterface,
        _key: props._key,
        role: props.role,
      });
    case TableImpl.PAYMENT_PAGE:
      return paymentPageValueRender({
        data: props.data as PagePaymentListReducerInterface,
        _key: props._key,
        role: props.role,
      });
    default:
      return nestedObjectStrToValue(props._key, props.data);
  }
};

const trainingPageValueRender = (props: {
  data: PageTrainingListReducerInterface;
  _key: string;
  role: string;
}) => {
  switch (props._key) {
    case 'startDate':
      return (
        <Typography variant="caption" display="block" gutterBottom>
          {`${moment(props.data.startDate).format('DD MMM YYYY')} - ${moment(
            props.data.endDate
          ).format('DD MMM YYYY')}`}
        </Typography>
      );
    case 'trainingType.name':
      return (
        <Chip
          label={props.data.trainingType.name}
          size={'small'}
          color={'info'}
          variant={'outlined'}
        />
      );
    case 'participants':
      return (
        <Typography variant="caption" display="block" gutterBottom>
          {`${props.data.participants.length} Employee`}
        </Typography>
      );
    case 'payments.isPaid':
      // eslint-disable-next-line no-case-declarations
      const _isPaid = props.data.payments.filter((payment) => payment.isPaid);
      // eslint-disable-next-line no-case-declarations
      const _isPaidStatus =
        _isPaid.length === props.data.payments.length
          ? TrainingStatusType.PAID
          : TrainingStatusType.UNPAID;
      return (
        <Chip
          label={_isPaidStatus}
          size={'small'}
          color={
            _isPaidStatus === TrainingStatusType.PAID ? 'success' : 'warning'
          }
          variant={'outlined'}
        />
      );
    case 'cost':
      // eslint-disable-next-line no-case-declarations
      const totalCost = Number(
        props.data.payments.reduce((accumulator, object) => {
          return accumulator + Number(object.cost);
        }, 0)
      );
      return (
        <Typography variant="body2" display="block" gutterBottom>
          {new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
          }).format(totalCost)}
        </Typography>
      );
    case 'createdBy.name':
      return (
        <ListItem alignItems="flex-start" sx={{ p: 0 }}>
          <ListItemAvatar sx={{ marginRight: '-10px' }}>
            <Avatar alt="Remy Sharp" sx={{ width: 35, height: 35 }} />
          </ListItemAvatar>
          <ListItemText
            primary={nestedObjectStrToValue(props._key, props.data)}
            secondary={
              <span style={{ fontSize: '12px', marginTop: '-5px' }}>
                {props.data?.createdBy.departement.name ?? '-'}
              </span>
            }
          />
        </ListItem>
      );
    default:
      return nestedObjectStrToValue(props._key, props.data);
  }
};

const budgetPageValueRender = (props: {
  data: PageBudgetListReducerInterface;
  _key: string;
  role: string;
}) => {
  switch (props._key) {
    case 'status':
      return (
        <Chip
          label={statusBudgetGenerate(props.data, props.role)}
          size={'small'}
          color={statusColorBudgetGenerate(
            statusBudgetGenerate(props.data, props.role)
          )}
          variant={'outlined'}
        />
      );
    case 'requestBy.name':
      return (
        <ListItem alignItems="flex-start" sx={{ p: 0 }}>
          <ListItemAvatar sx={{ marginRight: '-10px' }}>
            <Avatar alt="Remy Sharp" sx={{ width: 35, height: 35 }} />
          </ListItemAvatar>
          <ListItemText
            primary={nestedObjectStrToValue(props._key, props.data)}
            secondary={
              <span style={{ fontSize: '12px', marginTop: '-5px' }}>
                {props.data?.requestBy?.departement?.name ?? '-'}
              </span>
            }
          />
        </ListItem>
      );
    case 'training':
      return (
        <div
          style={{
            color:
              statusBudgetGenerate(props.data, props.role) ===
              BudgetStatus.APPROVE
                ? props.data.training === null
                  ? green[500]
                  : red[500]
                : blue[500],
            fontWeight: 900,
          }}
        >
          {statusBudgetGenerate(props.data, props.role) === BudgetStatus.APPROVE
            ? props.data.training === null
              ? 'Have not been used'
              : 'Already used'
            : '-'}
        </div>
      );
    default:
      return nestedObjectStrToValue(props._key, props.data);
  }
};

const paymentPageValueRender = (props: {
  data: PagePaymentListReducerInterface;
  _key: string;
  role: string;
}) => {
  switch (props._key) {
    case 'isPaid':
      return (
        <Chip
          label={props.data.isPaid ? 'Paid' : 'Unpaid'}
          size={'small'}
          color={props.data.isPaid ? 'success' : 'warning'}
          variant={'outlined'}
        />
      );
    default:
      return nestedObjectStrToValue(props._key, props.data);
  }
};

const MemoizedRow = React.memo(Row, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedRow;
