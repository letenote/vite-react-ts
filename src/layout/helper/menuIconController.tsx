import InboxIcon from '@mui/icons-material/MoveToInbox';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaidIcon from '@mui/icons-material/Paid';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AssessmentIcon from '@mui/icons-material/Assessment';

export const menuIconController = (name: string, fontSize: number = 25) => {
  switch (name.toLowerCase()) {
    case 'logout':
      return <LogoutIcon sx={{ fontSize }} />;
    case 'setting':
      return <SettingsIcon sx={{ fontSize }} />;
    case 'user':
      return <PeopleAltIcon sx={{ fontSize }} />;
    case 'payment':
      return <AccountBalanceWalletIcon sx={{ fontSize }} />;
    case 'budget':
      return <PaidIcon sx={{ fontSize }} />;
    case 'vendor':
      return <WorkIcon sx={{ fontSize }} />;
    case 'dashboard':
      return <DashboardIcon sx={{ fontSize }} />;
    case 'notification':
      return <MailIcon sx={{ fontSize }} />;
    case 'monitoring':
      return <AssessmentIcon sx={{ fontSize }} />;
    case 'training':
      return <AssignmentIndIcon sx={{ fontSize }} />;
    default:
      return <InboxIcon sx={{ fontSize }} />;
  }
};
